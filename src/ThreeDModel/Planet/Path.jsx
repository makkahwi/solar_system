import { useRef } from "react";

export default function PlanetPath({ ...props }) {
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
        args={[props.position - props.size / 2, props.position, 100]}
      />

      <meshPhysicalMaterial color={props.color} />
    </mesh>
  );
}
