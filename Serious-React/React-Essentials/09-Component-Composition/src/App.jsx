import { CORE_CONCEPTS } from "./data.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.jsx";
import CoreConcept from "./components/CoreConcept.jsx";


function App() {
  return (
    <div>
      <header>
        <h1>Hello World</h1>
      </header>
      <HeaderComponent />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            /> */}
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
