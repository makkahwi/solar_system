import RotatingPlanet from "./RotatingPlanet";

export default function Venus(props) {
  return (
    <RotatingPlanet
      args={[0.34, 30, 10]}
      color="orange"
      planetName="venus"
      {...props}
    />
  );
}
