function App() {
  function handleClick() {
    return console.log("Clicked");
  }

  return (
    <main className="container">
      <img
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
      />
      {/* <button onClick={() => console.log("Clicked")}>Click me</button> */}
      <button onClick={handleClick}>Click me</button>
    </main>
  );
}

export default App;
