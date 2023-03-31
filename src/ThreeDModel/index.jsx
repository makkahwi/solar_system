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
        camera={{ position: [0, 0, 16] }}
      >
        <ambientLight color="white" intensity={0.4} />

        <Sun position={[0, 0, 0]} />

        <Mercury position={1.75} rotateX={2} rotateY={0.2} />

        <Venus position={2.5} rotateX={2} rotateY={0.2} />

        <Earth position={3.5} rotateX={2} rotateY={0.2} />

        <Mars position={4.5} rotateX={2} rotateY={0.2} />

        <Jupiter position={6} rotateX={2} rotateY={0.2} />

        <Saturn position={8} rotateX={2} rotateY={0.2} />

        <Uranus position={10} rotateX={2} rotateY={0.2} />

        <Neptune position={11.5} rotateX={2} rotateY={0.2} />

        <Controls />
      </Canvas>
    </div>
  );
}
