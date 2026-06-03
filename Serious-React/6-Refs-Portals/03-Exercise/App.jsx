import React from "react";

function App() {
  const imgRef = React.useRef();

  function handleClick() {
    imgRef.current.click();
  }

  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input
          ref={imgRef}
          data-testid="file-picker"
          type="file"
          accept="image/*"
        />
        <button onClick={handleClick}>Pick Image</button>
      </p>
    </div>
  );
}

export default App;
