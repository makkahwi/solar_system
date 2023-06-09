import { Canvas } from "@react-three/fiber";
import { Fragment } from "react";

import Controls from "./Controls";
import Panel from "./Panel";
import Planet from "./Planet";
import Sun from "./Sun";

export default function ThreeDModel() {
  const planets = [
    {
      name: "mercury",
      speed: 48,
      position: 1.75,
      color: "white",
      size: 4879.4, // acutal diameter by KM
      photo: "/mercury.jpg",
    },
    {
      name: "venus",
      speed: 35,
      position: 2.5,
      color: "orange",
      size: 12104,
      photo: "/venus.jpg",
    },
    {
      name: "earth",
      speed: 30,
      position: 3.5,
      color: "#388cf3",
      size: 12742,
      photo: "/earth.jpg",
    },
    {
      name: "mars",
      speed: 24,
      position: 4.5,
      color: "red",
      size: 6779,
      photo: "/mars.jpg",
    },
    {
      name: "jupiter",
      speed: 13,
      position: 6,
      color: "orange",
      size: 139820,
      photo: "/jupter.jpg",
    },
    {
      name: "saturn",
      speed: 10,
      position: 8,
      color: "yellow",
      size: 116460,
      photo: "/saturn.jpg",
    },
    {
      name: "uranus",
      speed: 7,
      position: 10,
      color: "lightBlue",
      size: 50724,
      photo: "/uranus.jpg",
    },
    {
      name: "neptune",
      speed: 5,
      position: 11.5,
      color: "purple",
      size: 49244,
      photo: "/neptune.jpg",
    },
  ];

  return (
    <div
      style={{
        width: "100vw",
        height: "90vh",
        backgroundImage: 'url("bg.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <Canvas shadows camera={{ position: [2, -16, 5] }}>
        <ambientLight color="white" intensity={0.4} />

        <Sun position={[0, 0, 0]} />

        {planets.map(({ ...props }, i) => (
          <Fragment key={i}>
            <Planet {...props} />
          </Fragment>
        ))}

        <Controls />
      </Canvas>

      <Panel />
    </div>
  );
}
