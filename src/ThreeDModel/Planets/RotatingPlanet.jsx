import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { useRef } from "react";
import { Fragment } from "react";

export default function RotatingPlanet({
  args,
  color,
  planetName,
  position: initialPosition,
  ...props
}) {
  function Rotating() {
    const [position, setPosition] = useState(initialPosition);
    const myMesh = useRef();

    const planetSpeed = () => {
      switch (planetName) {
        case "mercury":
          return 48;
        case "venus":
          return 35;
        case "earth":
          return 30;
        case "mars":
          return 24;
        case "jupiter":
          return 13;
        case "saturn":
          return 10;
        case "uranus":
          return 7;
        case "neptune":
          return 5;
        default:
          return 1;
      }
    };

    useFrame(({ clock }) => {
      const a = clock.getElapsedTime();
      myMesh.current.rotation.z = a;

      const newValue = initialPosition + (a * planetSpeed()) / 50;

      setPosition([
        initialPosition * Math.cos(newValue),
        initialPosition * Math.sin(newValue),
        0,
      ]);
    });

    return (
      <mesh
        {...props}
        receiveShadow
        castShadow
        ref={myMesh}
        position={position}
      >
        <sphereBufferGeometry args={args} />

        <meshPhysicalMaterial color={color} />
      </mesh>
    );
  }

  return (
    <Fragment id={planetName}>
      <Rotating />
    </Fragment>
  );
}
