import Contact from "./components/Contact";

function App() {
  return (
    <div className="contacts">
      <Contact
        img=".\src\assets\cat.jpg"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img=".\src\assets\cat.jpg"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img=".\src\assets\cat.jpg"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img=".\src\assets\cat.jpg"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}

export default App;
