import RotatingPlanet from "./RotatingPlanet";

export default function Uranus(props) {
  return (
    <RotatingPlanet
      args={[0.3, 30, 10]}
      color="lightBlue"
      planetName="uranus"
      {...props}
    />
  );
}
