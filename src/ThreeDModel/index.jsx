import { Canvas } from "@react-three/fiber";
import Controls from "./Controls";
import RotatingPlanet from "./RotatingPlanet";
import Sun from "./Sun";

export default function ThreeDModel() {
  const planets = [
    { name: "mercury", speed: 48, position: 1.75, color: "white", size: 0.2 },
    { name: "venus", speed: 35, position: 2.5, color: "orange", size: 0.34 },
    { name: "earth", speed: 30, position: 3.5, color: "#388cf3", size: 0.4 },
    { name: "mars", speed: 24, position: 4.5, color: "red", size: 0.3 },
    { name: "jupiter", speed: 13, position: 6, color: "orange", size: 0.75 },
    { name: "saturn", speed: 10, position: 8, color: "yellow", size: 0.75 },
    { name: "uranus", speed: 7, position: 10, color: "lightBlue", size: 0.5 },
    { name: "neptune", speed: 5, position: 11.5, color: "purple", size: 0.4 },
  ];

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        shadows
        style={{ backgroundColor: "#262435" }}
        camera={{ position: [0, 0, 16] }}
      >
        <ambientLight color="white" intensity={0.4} />

        <Sun position={[0, 0, 0]} />

        {planets.map(({ ...props }, i) => (
          <RotatingPlanet key={i} {...props} />
        ))}

        <Controls />
      </Canvas>
    </div>
  );
}
