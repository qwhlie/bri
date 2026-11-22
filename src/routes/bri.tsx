import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/bri")({
  beforeLoad: () => { throw redirect({ to: "/", replace: true }); },
});