import { Canvas } from "@react-three/fiber";
import Controls from "./Controls";
import Mercury from "./Planets/Mercury";
import Venus from "./Planets/Venus";
import Sun from "./Sun";
import Earth from "./Planets/Earth";
import Mars from "./Planets/Mars";
import Jupiter from "./Planets/Jupiter";
import Saturn from "./Planets/Saturn";
import Uranus from "./Planets/Uranus";
import Neptune from "./Planets/Neptune";

export default function ThreeDModel() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        shadows
        style={{ backgroundColor: "#262435" }}
        camera={{ position: [0, 0, 12] }}
      >
        <ambientLight color="white" intensity={0.4} />

        <Sun position={[0, 0, 0]} />

        <Mercury position={[-2.15, -0.35, 0]} rotateX={2} rotateY={0.2} />

        <Venus position={[1.9, 2.1, 0]} rotateX={2} rotateY={0.2} />

        <Earth position={[-2.65, 2.25, 0]} rotateX={2} rotateY={0.2} />

        <Mars position={[0.85, -4, 0]} rotateX={2} rotateY={0.2} />

        <Jupiter position={[-4, -3.75, 0]} rotateX={2} rotateY={0.2} />

        <Saturn position={[4.75, 5.25, 0]} rotateX={2} rotateY={0.2} />

        <Uranus position={[-1, 7, 0]} rotateX={2} rotateY={0.2} />

        <Neptune position={[-8.25, -2.75, 0]} rotateX={2} rotateY={0.2} />

        <Controls />
      </Canvas>
    </div>
  );
}
