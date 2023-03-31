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

    useFrame(({ clock }) => {
      const a = clock.getElapsedTime();
      myMesh.current.rotation.z = a;
      setPosition([initialPosition[0], initialPosition[1], initialPosition[2]]);
    });

    return (
      <mesh
        {...props}
        receiveShadow
        castShadow
        ref={myMesh}
        position={initialPosition}
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
