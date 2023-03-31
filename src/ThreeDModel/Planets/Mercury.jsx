import { Fragment } from "react";

export default function Mercury(props) {
  return (
    <Fragment id="mercury">
      <mesh {...props} receiveShadow castShadow>
        <sphereBufferGeometry args={[0.175, 30, 10]} />

        <meshPhysicalMaterial color="white" />
      </mesh>
    </Fragment>
  );
}
