export default function Panel() {
  const keyboardControls = ["-", "+", "↑", "↓", "→", "←", "0", "x", "y", "z"];

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        backgroundColor: "black",
        minHeight: "10vh",
        color: "white",
        width: "100vw",
        padding: "3vh 2.5vw",
      }}
    >
      <h4 style={{ textAlign: "center" }}>
        Use your mouse's left & right buttons for camera (view point) control,
        or keyboard controls of...
      </h4>

      <h4 style={{ textAlign: "center" }}>{keyboardControls.join(" ")}</h4>

      <small>
        <a href="https://suhaib.dev/" target="_blank">
          Suhaib Ahmad
        </a>
      </small>
    </div>
  );
}
