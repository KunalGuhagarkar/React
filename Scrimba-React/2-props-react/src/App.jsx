import Contact from "./components/Contact";

function App() {
  return (
    <div className="contacts">
      <Contact img=".\src\assets\cat.jpg" name="Mr. Whiskerson" />
      <Contact img=".\src\assets\cat.jpg" name="Fluffykins" />
      <Contact img=".\src\assets\cat.jpg" name="Felix" />
      <Contact img=".\src\assets\cat.jpg" name="Pumpkin" />
    </div>
  );
}

export default App;
