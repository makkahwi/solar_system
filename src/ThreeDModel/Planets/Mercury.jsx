import RotatingPlanet from "./RotatingPlanet";

export default function Mercury(props) {
  return (
    <RotatingPlanet
      args={[0.2, 30, 10]}
      color="white"
      planetName="mercury"
      {...props}
    />
  );
}
