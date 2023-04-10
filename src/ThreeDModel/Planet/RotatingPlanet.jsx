import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { TextureLoader } from "three";

export default function RotatingPlanet({
  color,
  name,
  speed,
  position: initialPosition,
  size,
  photo,
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

    const texture = useLoader(TextureLoader, photo);

    return (
      <mesh
        {...props}
        receiveShadow
        castShadow
        ref={myMesh}
        position={position}
      >
        <sphereBufferGeometry args={[size, 30, 10]} />

        <meshPhysicalMaterial map={texture} />
      </mesh>
    );
  }

  return <Rotating />;
}
