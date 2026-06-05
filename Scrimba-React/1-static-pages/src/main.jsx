// import { createRoot } from "react-dom/client";

/* // 1. Create a root
const root = createRoot(document.getElementById('root'));
// 2. Render some markup to the root
root.render(<h1>Hello React!</h1>); */

/* const root = createRoot(document.getElementById("root"));
root.render(
  <ol>
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
  </ol>
); */

/* //React.createElement()
import { createElement } from "react";

const root = createRoot(document.getElementById("root"));

// Using createElement()
// const reactElement = createElement("h1", null, "Hello from createElement")

// Using JSX
const reactElement = <h1><span>Hello From JSX</span></h1>

console.log(reactElement);

root.render(reactElement); */

// Using Components
/* import {createRoot} from 'react-dom/client';

function MainContent() {
  return <h1>React is great!</h1>
}

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <MainContent />
  </div>
); */

// const root = document.querySelector("div#root");
// const headingOne = document.createElement("h1");
// headingOne.textContent = "This is Heading One";
// headingOne.classList.add("header");

// root.appendChild(headingOne);

// import { createRoot } from "react-dom/client";

// const root = createRoot(document.getElementById("root"));

// // root.render(<h1>HouseKeeping Heading One</h1>);

// root.render(
//   <main>
//     <img
//       src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png"
//       alt="react-logo"
//     />
//     <h1>This is another element</h1>
//   </main>,
// );

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

console.log(<h1>Hello World</h1>);

root.render(
  <main>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png"
      alt="react-logo"
      width="40px"
    />

    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </main>
);
