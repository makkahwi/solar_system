import { Fragment } from "react";

export default function Venus(props) {
  return (
    <Fragment id="venus">
      <mesh {...props} receiveShadow castShadow>
        <sphereBufferGeometry args={[0.4, 30, 10]} />
        <meshPhysicalMaterial color="orange" />
      </mesh>
    </Fragment>
  );
}
