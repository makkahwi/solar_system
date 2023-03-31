import { useRef } from "react";

export default function PlanetPath({ size, position, color, ...props }) {
  const myMeshMesh = useRef();

  return (
    <mesh
      visible
      rotation={[0, 0, 0]}
      castShadow
      position={[0, 0, 0]}
      ref={myMeshMesh}
    >
      <ringBufferGeometry
        args={[position - size / 2, position + size / 2, 100]}
      />

      <meshPhysicalMaterial color={color} />
    </mesh>
  );
}
