import { Fragment } from "react";
import RotatingPlanet from "./RotatingPlanet";

export default function Planet({ ...props }) {
  return (
    <Fragment>
      <RotatingPlanet {...props} />

      <mesh visible rotation={[0, 0, 0]} castShadow position={[0, 0, 0]}>
        <ringBufferGeometry
          args={[props.position - props.size / 2, props.position, 100]}
        />

        <meshPhysicalMaterial color={props.color} />
      </mesh>
    </Fragment>
  );
}
