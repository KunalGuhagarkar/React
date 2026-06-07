import Contact from "./components/Contact";

function App() {
  return (
    <div className="contacts">
      <Contact img=".\src\assets\cat.jpg" name="Mr. Whiskerson" />
      <Contact img=".\src\assets\cat.jpg" name="" />
      <Contact img=".\src\assets\cat.jpg" name="" />
      <Contact img=".\src\assets\cat.jpg" name="" />
    </div>
  );
}

export default App;
