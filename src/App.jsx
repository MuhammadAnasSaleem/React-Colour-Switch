import { useState } from "react";
const ColorPicker = () => {
  const [backgroundColor, SetBackgroundColor] = useState("#ffffff");
  const handleColorChange = (e) => {
    SetBackgroundColor(e.target.value);
  };
  return (
    <div
      style={{
        backgroundColor,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        type="color"
        value={backgroundColor}
        onChange={handleColorChange}
      />
      <p style={{ marginLeft: "20px" }}>Select a background color</p>
    </div>
  );
};

function App() {
  return <ColorPicker />;
}

export default App;
