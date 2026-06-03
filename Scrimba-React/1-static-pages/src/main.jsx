// import { createRoot } from "react-dom/client";

// // 1. Create a root
// const root = createRoot(document.getElementById('root'));
// // 2. Render some markup to the root
// root.render(<h1>Hello React!</h1>);

import {createRoot} from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <ol>
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
  </ol>
);