import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Fragment } from "react";

export default function RotatingPlanet({ args, color, planetName, ...props }) {
  function Rotating() {
    const myMesh = useRef();

    useFrame(({ clock }) => {
      const a = clock.getElapsedTime();
      myMesh.current.rotation.z = a;
    });

    return (
      <mesh {...props} receiveShadow castShadow ref={myMesh}>
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
