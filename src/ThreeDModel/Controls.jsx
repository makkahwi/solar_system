import { extend, useThree } from "@react-three/fiber";
import { MapControls } from "three/examples/jsm/controls/MapControls";

extend({ MapControls });

function Control(props) {
  const { camera, gl } = useThree();

  return (
    <mapControls
      {...props}
      attach={"mapControls"}
      args={[camera, gl.domElement]}
    />
  );
}

export default Control;
