import RotatingPlanet from "./RotatingPlanet";

export default function Mars(props) {
  return (
    <RotatingPlanet
      args={[0.5, 30, 10]}
      color="red"
      planetName="mars"
      {...props}
    />
  );
}
