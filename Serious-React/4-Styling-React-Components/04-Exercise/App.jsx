import React from "react";

function App() {
  const [headingColor, setHeadingColor] = React.useState("white");

  function handleClickColorChangeYes() {
    setHeadingColor((c) => "green");
  }

  function handleClickColorChangeNo() {
    setHeadingColor((c) => "red");
  }

  return (
    <div id="app">
      <h1 style={{ color: headingColor }}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={handleClickColorChangeYes}>Yes</button>
        </li>
        <li>
          <button onClick={handleClickColorChangeNo}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
