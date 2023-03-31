import { Canvas } from "@react-three/fiber";
import Controls from "./Controls";
import Draggable from "./Draggable";
import Mercury from "./Planets/Mercury";
import Venus from "./Planets/Venus";
import Sun from "./Sun";
import Earth from "./Planets/Earth";

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
          <Mercury position={[-2.75, 1, 0]} rotateX={2} rotateY={0.2} />
        </Draggable>

        <Draggable>
          <Venus position={[3, 2, 0]} rotateX={2} rotateY={0.2} />
        </Draggable>

        <Draggable>
          <Earth position={[-2.75, 3.5, 0]} rotateX={2} rotateY={0.2} />
        </Draggable>

        <Controls />
      </Canvas>
    </div>
  );
}
