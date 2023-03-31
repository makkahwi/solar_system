import { Canvas } from "@react-three/fiber";
import Mercury from "./Mercury";
import Sun from "./Sun";
import Controls from "./Controls";
import Draggable from "./Draggable";

export default function ThreeDModel() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        shadows
        style={{ backgroundColor: "#262435" }}
        camera={{ position: [-8, 7, 7] }}
      >
        <ambientLight color="white" intensity={0.2} />

        <Sun position={[0, 0, 0]} />

        <Draggable>
          <Mercury position={[1, 3, 1]} rotateX={2} rotateY={0.2} />
        </Draggable>

        <Controls />
      </Canvas>
    </div>
  );
}
