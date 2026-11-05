import { useCallback, useEffect, useRef, useState } from "react";

// A temporary, locally synthesized soundtrack: no personal media or remote calls.
export function useHorrorAudio() {
  const context = useRef<AudioContext | null>(null);
  const output = useRef<GainNode | null>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.65);

  const start = useCallback(async () => {
    if (!context.current) {
      const audio = new AudioContext();
      context.current = audio;
      const master = audio.createGain();
      master.gain.value = 0;
      const compressor = audio.createDynamicsCompressor();
      compressor.threshold.value = -20;
      compressor.ratio.value = 12;
      master.connect(compressor).connect(audio.destination);
      output.current = master;

      [43.65, 46.25, 65.41, 92.5, 130.81].forEach((frequency, index) => {
        const tone = audio.createOscillator();
        tone.type = index < 2 ? "sawtooth" : "sine";
        tone.frequency.value = frequency;
        const gain = audio.createGain();
        gain.gain.value = index < 2 ? 0.06 : 0.08;
        const filter = audio.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.value = 650;
        tone.connect(filter).connect(gain).connect(master);
        const tremolo = audio.createOscillator();
        tremolo.frequency.value = 0.13 + index * 0.07;
        const depth = audio.createGain();
        depth.gain.value = 0.035;
        tremolo.connect(depth).connect(gain.gain);
        tremolo.start();
        tone.start();
      });

      const noise = audio.createBuffer(1, audio.sampleRate * 4, audio.sampleRate);
      const samples = noise.getChannelData(0);
      for (let i = 0; i < samples.length; i++) samples[i] = Math.random() * 2 - 1;
      const source = audio.createBufferSource();
      source.buffer = noise;
      source.loop = true;
      const filter = audio.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.value = 1100;
      filter.Q.value = 6;
      const noiseGain = audio.createGain();
      noiseGain.gain.value = 0.055;
      source.connect(filter).connect(noiseGain).connect(master);
      const sweep = audio.createOscillator();
      sweep.frequency.value = 0.09;
      const sweepDepth = audio.createGain();
      sweepDepth.gain.value = 700;
      sweep.connect(sweepDepth).connect(filter.frequency);
      sweep.start();
      source.start();
    }
    const audio = context.current;
    try {
      await audio.resume();
      if (context.current !== audio) return;
      setPlaying(audio.state === "running");
      output.current?.gain.setTargetAtTime(volume, audio.currentTime, 0.5);
    } catch {
      setPlaying(false);
    }
  }, [volume]);

  useEffect(() => {
    void start();
    return () => {
      const audio = context.current;
      context.current = null;
      output.current = null;
      if (audio) void audio.close();
    };
    // Initialize once; volume changes are applied without recreating the score.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const audio = context.current;
    if (audio) output.current?.gain.setTargetAtTime(volume, audio.currentTime, 0.1);
  }, [volume]);

  const toggle = async () => {
    const audio = context.current;
    if (playing && audio) {
      await audio.suspend();
      setPlaying(false);
    } else await start();
  };
  return { playing, volume, setVolume, toggle };
}