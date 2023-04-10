import { extend, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { MapControls } from "three/examples/jsm/controls/MapControls";

extend({ MapControls });

function Control(props) {
  const { camera, gl } = useThree();

  useEffect(() => {
    document.onkeydown = function (e) {
      switch (e.key) {
        case "+":
          camera.position.y += 1;
          break;
        case "-":
          camera.position.y -= 1;
          break;
        case "ArrowUp":
          camera.position.z += 1;
          break;
        case "ArrowDown":
          camera.position.z -= 1;
          break;
        case "ArrowLeft":
          camera.position.x -= 1;
          break;
        case "ArrowRight":
          camera.position.x += 1;
          break;
        case "0":
          camera.position.x = 2;
          camera.position.y = -16;
          camera.position.z = 5;
          break;
        default:
          console.log("click " + e.key + " is not useable in the app");
          break;
      }
    };
  });

  return (
    <mapControls
      {...props}
      attach={"mapControls"}
      args={[camera, gl.domElement]}
    />
  );
}

export default Control;
