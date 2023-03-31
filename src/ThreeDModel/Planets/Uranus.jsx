import RotatingPlanet from "./RotatingPlanet";

export default function Uranus(props) {
  return (
    <RotatingPlanet
      args={[0.5, 30, 10]}
      color="lightBlue"
      planetName="uranus"
      {...props}
    />
  );
}
