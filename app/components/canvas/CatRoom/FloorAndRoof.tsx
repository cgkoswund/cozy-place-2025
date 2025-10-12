import { Grid } from "@react-three/drei";
import * as THREE from "three";

const gridSize = [10.5, 10.5];
const roomSize = [6 * 2, 2.5, 3 * 2];
const gridConfig = {
  cellSize: 0.6,
  cellThickness: 1,
  cellColor: "#6f6f6f",
  sectionSize: 3.3,
  sectionThickness: 1.5,
  sectionColor: "#9d4b4b",
  fadeDistance: 25,
  fadeStrength: 1,
  followCamera: false,
  //   infiniteGrid: true,
};
const FloorAndRoof: React.FC = () => {
  return (
    <>
      {/* Roof */}
      <Grid
        position={[0, roomSize[1], 0]}
        rotation={[-Math.PI, 0, 0]}
        args={[gridSize[0], gridSize[1]]}
        {...gridConfig}
      />
      {/* Floor */}
      <Grid
        position={[0, 0, 0]}
        args={[gridSize[0], gridSize[1]]}
        {...gridConfig}
      />

      {/* Left Wall */}

      <Grid
        position={[-roomSize[0] / 2, roomSize[1] / 2, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        args={[gridSize[0], gridSize[1]]}
        {...gridConfig}
      />

      {/* Right Wall */}
      <Grid
        position={[roomSize[0] / 2, roomSize[1] / 2, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        args={[gridSize[0], gridSize[1]]}
        {...gridConfig}
      />
      {/* Back Wall */}
      <Grid
        position={[0, roomSize[1] / 2, -roomSize[2] / 2]}
        rotation={[Math.PI / 2, 0, 0]}
        args={[gridSize[0], gridSize[1]]}
        {...gridConfig}
      />
      {/* Front Wall */}
      <Grid
        position={[0, roomSize[1] / 2, roomSize[2] / 2]}
        rotation={[-Math.PI / 2, 0, 0]}
        args={[gridSize[0], gridSize[1]]}
        {...gridConfig}
      />
      {/* temp structure */}
      <group position={[0, roomSize[1] / 2, 0]}>
        <mesh>
          <boxGeometry
            args={[roomSize[0] + 0.1, roomSize[1] + 0.1, roomSize[2] + 0.1]}
          />
          <meshStandardMaterial color="darkblue" side={THREE.BackSide} />
        </mesh>
      </group>
    </>
  );
};

export default FloorAndRoof;
