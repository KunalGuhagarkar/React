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

/* import { createRoot } from "react-dom/client";

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
); */

/* import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(<TemporaryName />);

function TemporaryName() {
  return (
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
} */

/* import { createRoot } from "react-dom/client";

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

root.render(<Page />); */

// import { createRoot } from "react-dom/client";

// const root = createRoot(document.getElementById("root"));

// function MyComponent() {
//   return (
//     <small>I'm tiny text</small>
//   );
// }

// root.render(<MyComponent />);

/* import { createRoot } from "react-dom/client";
import {Fragment} from "react";

const root = createRoot(document.getElementById("root"));

function Page() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

root.render(<Page />); */

/* import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function Header() {
  return (
    <header className="header-container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png"
        alt="react-logo"
        className="img"
      />
      <nav>
        <ul className="nav-list">
          <li className="list-item">Pricing</li>
          <li className="list-item">About</li>
          <li className="list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li className="main-list-item">Earning Money</li>
        <li className="main-list-item">Getting Independent</li>
        <li className="main-list-item">Getting a Job</li>
      </ol>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer-container">© 2026 Kunal Guhagarkar development. All rights reserved.</footer>
  );
}

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

root.render(<Page />); */

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

root.render(<Page />);
