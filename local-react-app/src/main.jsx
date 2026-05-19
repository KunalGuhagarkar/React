import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/* 1.
const reactElement = createElement("h1", null, "Hello from react's createElement");
const reactElement = <h1><span>Hello from JSX</span></h1>
console.log(reactElement); */

/* 2.
function NavbarComponent() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

function MainContent() {
  return <h1>React is great!</h1>
} */

/* 3.
function ReactComponent() {
  return <img src="\src\assets\react.svg" alt="React Logo" />
  
}

function ReactHeadingComponent() {
  return <h1>Fun Facts About React</h1>
}

function FactsComponent() {
  return (
    <ul>
      <li>Was originally released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has over 100K stars on GitHub</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  );
} */

createRoot(document.getElementById('root')).render(
  // reactElement // using createElement() -> Hello from react's createElement
  // reactElement // Hello from JSX

  /* <>
    <NavbarComponent />
    <MainContent />
  </> */

  /* <>
    <h1 className="header">This is Declarative Coding</h1>
  </> */

  /*<>
    <ReactComponent />
    <ReactHeadingComponent />
    <FactsComponent />
  </>*/
  <StrictMode>
    <App />
  </StrictMode>

);
