import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
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
    console.log(selectedButton);
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
            <TabButton onSelect={() => handleSelect(EXAMPLES.components)}>Component</TabButton>
            <TabButton onSelect={() => handleSelect(EXAMPLES.jsx)}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect(EXAMPLES.props)}>Props</TabButton>
            <TabButton onSelect={() => handleSelect(EXAMPLES.state)}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
