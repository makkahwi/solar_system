import RotatingPlanet from "./RotatingPlanet";

export default function Saturn(props) {
  return (
    <RotatingPlanet
      args={[0.75, 30, 10]}
      color="yellow"
      planetName="saturn"
      {...props}
    />
  );
}
