import RotatingPlanet from "./RotatingPlanet";

export default function Jupiter(props) {
  return (
    <RotatingPlanet
      args={[0.75, 30, 10]}
      color="orange"
      planetName="jupiter"
      {...props}
    />
  );
}
