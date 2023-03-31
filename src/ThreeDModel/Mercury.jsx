export default function Mercury(props) {
  return (
    <mesh {...props} receiveShadow castShadow>
      <sphereBufferGeometry args={[0.2, 30, 10]} />
      <meshPhysicalMaterial color="white" />
    </mesh>
  );
}
