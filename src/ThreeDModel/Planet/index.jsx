import { Fragment } from "react";
import PlanetPath from "./Path";
import RotatingPlanet from "./RotatingPlanet";

export default function Planet({ ...props }) {
  return (
    <Fragment>
      <RotatingPlanet {...props} />

      <PlanetPath {...props} />
    </Fragment>
  );
}
