/**
Challenge: 

Part 2: 
- Add a `<header>` element with an `<img />` element with the image of the 
  React logo inside (src="react-logo.png") and make sure to set the 
  width to something more manageable so it doesn't take up the whole screen.
  Also, as always, you should include some alt text on the image.
- Add an `<h1>` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list, then wrap
  the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
  structure flowing well.
- Add a `<footer>` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function Page() {
  return (
    <div>
      <header>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png"
          alt="react-logo"
          width="50px"
        />
      </header>
      <main>
        <h1>Reasons I'm excited to learn React</h1>
        <ol>
          <li>Getting a Job</li>
          <li>Earning Money</li>
          <li>Getting Independent</li>
        </ol>
      </main>
      <footer>© 2026 Kunal Guhagarkar development. All rights reserved.</footer>
    </div>
  );
}

root.render(<Page />);