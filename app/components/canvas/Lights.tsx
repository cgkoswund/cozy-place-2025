import { Environment } from "@react-three/drei";

const Lights: React.FC = () => {
  return (
    <>
      <Environment preset="apartment" />
      <color attach="background" args={["black"]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <directionalLight position={[1, 1, 1]} />
    </>
  );
};

export default Lights;
