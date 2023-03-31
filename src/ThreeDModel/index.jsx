import { Canvas } from "@react-three/fiber";
import Floor from "./Floor";
import Bulb from "./Bulb";
import Box from "./Box";
import Controls from "./Controls";
import Draggable from "./Draggable";

export default function ThreeDModel() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        shadows
        style={{ backgroundColor: "#ffffff" }}
        camera={{ position: [-6, 7, 7] }}
      >
        <ambientLight color="white" intensity={0.2} />

        <Draggable>
          <Bulb position={[0, 3, 0]} />
        </Draggable>

        <Draggable>
          <Box rotateX={3} rotateY={0.2} />
        </Draggable>

        <Controls />

        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
