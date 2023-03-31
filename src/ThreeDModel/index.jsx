import { Canvas } from "@react-three/fiber";
import Floor from "./Floor";
import Bulb from "./Bulb";
import Box from "./Box";

export default function ThreeDModel() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        shadows
        style={{ backgroundColor: "#ffffff" }}
        camera={{ position: [-6, 7, 7] }}
      >
        <ambientLight color="white" intensity={0.2} />
        <Bulb position={[0, 3, 0]} />
        <Box rotateX={3} rotateY={0.2} />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
