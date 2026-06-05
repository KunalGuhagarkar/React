/* 
Mini Challenge:
* Move the `header` element from the Page component into its own component called "Header"
* Then render an instance of the Header component inside the Page component where the `header` used to be. 
*/

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function Header() {
  return (
    <header>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png"
        alt="react-logo"
        width="50px"
      />
    </header>
  );
}

function Page() {
  return (
    <>
      <Header />
      <main>
        <h1>Reasons I'm excited to learn React</h1>
        <ol>
          <li>Getting a Job</li>
          <li>Earning Money</li>
          <li>Getting Independent</li>
        </ol>
      </main>
      <footer>© 2026 Kunal Guhagarkar development. All rights reserved.</footer>
    </>
  );
}

root.render(<Page />);
