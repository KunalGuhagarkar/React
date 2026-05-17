import { useState } from "react";

function Color() {
  const [color, setColor] = useState("black");

  function handleColorChange(e) {
    setColor(e.target.value);
  }

  return (
    <div className="main-container">
      <div className="color-container" style={{backgroundColor: color}}>
        <p>Color Picker</p>
        <p>{color}</p>
      </div>

      <input type="color" value={color} onChange={handleColorChange}/>
    </div>
  );
}

export default Color;
