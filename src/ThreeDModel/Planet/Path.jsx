import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";

export default function PlanetPath({ size, position, color, photo, ...props }) {
  const myMeshMesh = useRef();

  const texture = useLoader(TextureLoader, photo);

  return (
    <mesh
      visible
      rotation={[0, 0, 0]}
      castShadow
      position={[0, 0, 0]}
      ref={myMeshMesh}
    >
      <ringBufferGeometry
        args={[position - size / 4, position + size / 4, 100]}
      />

      <meshPhysicalMaterial color="rgba(255,255,255,0.05)" />
    </mesh>
  );
}
