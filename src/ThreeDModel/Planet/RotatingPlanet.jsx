import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { useRef } from "react";
import { Fragment } from "react";

export default function RotatingPlanet({
  color,
  name,
  speed,
  position: initialPosition,
  size,
  ...props
}) {
  function Rotating() {
    const [position, setPosition] = useState(initialPosition);
    const myMesh = useRef();

    useFrame(({ clock }) => {
      const a = clock.getElapsedTime();
      myMesh.current.rotation.z = a;

      const newValue = initialPosition + (a * speed) / 50;

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
        <sphereBufferGeometry args={[size, 30, 10]} />

        <meshPhysicalMaterial color={color} />
      </mesh>
    );
  }

  return (
    <Fragment id={name}>
      <Rotating />
    </Fragment>
  );
}
