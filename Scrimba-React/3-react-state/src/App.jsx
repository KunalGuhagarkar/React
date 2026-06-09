function App() {
  function handleClick() {
    console.log("Clicked");
  }

  function handleMouseEnter() {
    console.log("Mouse Entered");
  }

  return (
    <main className="container">
      <img
        onMouseEnter={handleMouseEnter}
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
      />
      {/* <button onClick={() => console.log("Clicked")}>Click me</button> */}
      <button onClick={handleClick}>Click me</button>
    </main>
  );
}

export default App;
