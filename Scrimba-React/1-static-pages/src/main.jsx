import { createRoot } from "react-dom/client";

// // 1. Create a root
// const root = createRoot(document.getElementById('root'));
// // 2. Render some markup to the root
// root.render(<h1>Hello React!</h1>);

// const root = createRoot(document.getElementById("root"));
// root.render(
//   <ol>
//     <li>Apple</li>
//     <li>Banana</li>
//     <li>Cherry</li>
//   </ol>
// );

// React.createElement()
import { createElement } from "react";

const root = createRoot(document.getElementById("root"));
const reactElement = createElement("h1", null, "Hello from createElement")

root.render(reactElement);