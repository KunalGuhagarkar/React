import { CORE_CONCEPTS } from "./data.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

import { useState } from "react";

function App() {
  /*
    Rule 1: Only call hooks inside of Component Function
    Rule 2: Only call hooks on the top level
  */
  const [selectedTopic, setSelectedTopic] = useState("Please Click a Button");

  function handleSelect(selectedButton) {
    if (selectedButton === "component") {
      setSelectedTopic("This is component information");
    }
    else if (selectedButton === "jsx") {
      setSelectedTopic("This is jsx information");
    }
    else if (selectedButton === "props") {
      setSelectedTopic("This is props information");
    } else {
      setSelectedTopic("This is state information");
    }
  }

  return (
    <div>
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
            <TabButton onSelect={() => handleSelect('component')}>Component</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          <div>
            {selectedTopic}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
