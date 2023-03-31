import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Sun(props) {
  const texture = useLoader(TextureLoader, "/sun.jpg");

  const sunSize = 1392700; // acutal diameter by KM
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[sunSize, 30, 10]} />
      <meshPhongMaterial emissive="#d24d00" map={texture} />
    </mesh>
  );
}
