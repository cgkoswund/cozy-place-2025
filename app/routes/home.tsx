import type { Route } from "./+types/home";
import BaseCanvas from "~/components/canvas/BaseCanvas";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cozy cat room" },
    { name: "description", content: "Cozy purr and chill" },
  ];
}

export default function Home() {
  return (
    <>
      <BaseCanvas />
    </>
  );
}
