import RotatingPlanet from "./RotatingPlanet";

export default function Mars(props) {
  return (
    <RotatingPlanet
      args={[0.3, 30, 10]}
      color="red"
      planetName="mars"
      {...props}
    />
  );
}
