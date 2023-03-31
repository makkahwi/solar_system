import RotatingPlanet from "./RotatingPlanet";

export default function Mercury(props) {
  return (
    <RotatingPlanet
      args={[0.175, 30, 10]}
      color="white"
      planetName="mercury"
      {...props}
    />
  );
}
