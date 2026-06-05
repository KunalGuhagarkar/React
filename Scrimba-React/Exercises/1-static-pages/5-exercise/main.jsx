/* 
Challenge: set up new React app from scratch!
Hints:
1. Need to import the method to create a new root from the "react-dom/client" package.
2. Use that root to render some JSX. For now, just render an h1 element that says anything you want. 
*/

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

// root.render(<h1>HouseKeeping Heading One</h1>);

root.render(
  <main>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png"
      alt="react-logo"
    />
    <h1>This is another element</h1>
  </main>,
);
