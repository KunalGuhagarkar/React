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
  const [selectedTopic, setSelectedTopic] = useState("");
  const [active, setActive] = useState(false);

  console.log(selectedTopic.title);

  function handleSelect({ title, description, code }) {
    setSelectedTopic({ title, description, code });
  }

  return (
    <div>
      <HeaderComponent />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isActive={selectedTopic.title === "Components"}
              onSelect={() => handleSelect(EXAMPLES.components)}
            >
              Component
            </TabButton>
            <TabButton
              isActive={selectedTopic.title === "JSX"}
              onSelect={() => handleSelect(EXAMPLES.jsx)}
            >
              JSX
            </TabButton>
            <TabButton
              isActive={selectedTopic.title === "Props"}
              onSelect={() => handleSelect(EXAMPLES.props)}
            >
              Props
            </TabButton>
            <TabButton
              isActive={selectedTopic.title === "State"}
              onSelect={() => handleSelect(EXAMPLES.state)}
            >
              State
            </TabButton>
          </menu>
          {!selectedTopic && <p>Please select a topic</p>}
          {selectedTopic ? (
            <div id="tab-content">
              <h3>{selectedTopic.title}</h3>
              <p>{selectedTopic.description}</p>
              <pre>
                <code>{selectedTopic.code}</code>
              </pre>
            </div>
          ) : null}
        </section>
      </main>
    </div>
  );
}

export default App;
