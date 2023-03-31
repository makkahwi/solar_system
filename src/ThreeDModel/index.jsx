import { Canvas } from "@react-three/fiber";
import Controls from "./Controls";
import Mercury from "./Planets/Mercury";
import Venus from "./Planets/Venus";
import Sun from "./Sun";
import Earth from "./Planets/Earth";
import Mars from "./Planets/Mars";
import Jupiter from "./Planets/Jupiter";
import Saturn from "./Planets/Saturn";

export default function ThreeDModel() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        shadows
        style={{ backgroundColor: "#262435" }}
        camera={{ position: [-8, 7, 7] }}
      >
        <ambientLight color="white" intensity={0.4} />

        <Sun position={[0, 0, 0]} />

        <Mercury position={[-2.75, 1, 0]} rotateX={2} rotateY={0.2} />

        <Venus position={[3.25, 1.5, 0]} rotateX={2} rotateY={0.2} />

        <Earth position={[-2.75, 3.5, 0]} rotateX={2} rotateY={0.2} />

        <Mars position={[2, -8, 0]} rotateX={2} rotateY={0.2} />

        <Jupiter position={[-5.25, -1.75, 0]} rotateX={2} rotateY={0.2} />

        <Saturn position={[8.5, 4, 0]} rotateX={2} rotateY={0.2} />

        <Controls />
      </Canvas>
    </div>
  );
}
