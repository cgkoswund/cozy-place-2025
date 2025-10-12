import FloorAndRoof from "./FloorAndRoof";

const CatRoom: React.FC = () => {
  return (
    <>
      <group position={[0, 0.2 / 2, 0]}>
        <mesh>
          <boxGeometry args={[0.1, 0.2, 0.4]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </group>
      <FloorAndRoof />
    </>
  );
};

export default CatRoom;
