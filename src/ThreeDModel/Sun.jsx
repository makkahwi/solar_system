import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";

export default function Sun(props) {
  const texture = useLoader(TextureLoader, "/sun.jpg");
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[1.2, 30, 10]} />
      <meshPhongMaterial emissive="#d24d00" map={texture} />
    </mesh>
  );
}
