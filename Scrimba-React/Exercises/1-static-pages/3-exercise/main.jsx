/**
 * Challenge:
 * Create your very first custom React Component!
 * Call it "MainContent", and have it return a simple
 * h1 element that says "React is great!"
 */

import { createRoot } from "react-dom/client";

function MainContent() {
  return <h1>React is great!</h1>;
}

const root = createRoot(document.querySelector("root"));
root.render(
  <div>
    <MainContent />
  </div>,
);
