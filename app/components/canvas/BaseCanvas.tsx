import { Canvas } from "@react-three/fiber";
import React from "react";
import CameraAnimations from "./CameraAnimations";
import CatRoom from "./CatRoom";
import Lights from "./Lights";
import { Perf } from "r3f-perf";

const BaseCanvas: React.FC = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 2.5 / 8, 6 / 4] }}>
        <Perf position="top-left" />
        <Lights />
        <axesHelper />
        <CatRoom />
        <CameraAnimations />
      </Canvas>
    </div>
  );
};

export default BaseCanvas;
