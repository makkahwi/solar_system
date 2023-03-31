export default function Sun(props) {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[1.2, 30, 10]} />
      <meshPhongMaterial color="#fbc542" emissive="#d24d00" />
    </mesh>
  );
}
