import Contact from "./components/Contact";

function App() {
  return (
    <div className="contacts">
      <Contact img=".\src\assets\cat.jpg" name="Mr. Whiskerson" />
      <Contact />
      <Contact />
      <Contact />
    </div>
  );
}

export default App;
