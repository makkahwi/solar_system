export default function Box(props) {
  return (
    <mesh {...props} receiveShadow castShadow>
      <boxBufferGeometry />
      <meshPhysicalMaterial color="white" />
    </mesh>
  );
}
