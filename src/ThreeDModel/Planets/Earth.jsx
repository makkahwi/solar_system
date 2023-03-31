import RotatingPlanet from "./RotatingPlanet";

export default function Earth(props) {
  return (
    <RotatingPlanet
      args={[0.4, 30, 10]}
      color="#388cf3"
      planetName="earth"
      {...props}
    />
  );
}
