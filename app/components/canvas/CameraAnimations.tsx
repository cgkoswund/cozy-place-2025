import { OrbitControls } from "@react-three/drei";

const CameraAnimations: React.FC = () => {
  return (
    <>
      <OrbitControls enablePan={false} />
    </>
  );
};

export default CameraAnimations;
