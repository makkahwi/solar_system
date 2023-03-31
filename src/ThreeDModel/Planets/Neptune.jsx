import RotatingPlanet from "./RotatingPlanet";

export default function Neptune(props) {
  return (
    <RotatingPlanet
      args={[0.4, 30, 10]}
      color="purple"
      planetName="neptune"
      {...props}
    />
  );
}
