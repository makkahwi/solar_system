import { Fragment } from "react";

export default function Earth(props) {
  return (
    <Fragment id="earth">
      <mesh {...props} receiveShadow castShadow>
        <sphereBufferGeometry args={[0.3, 30, 10]} />

        <meshPhysicalMaterial color="#388cf3" />
      </mesh>
    </Fragment>
  );
}
