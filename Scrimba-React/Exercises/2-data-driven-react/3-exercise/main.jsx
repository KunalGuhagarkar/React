// Challenge:
// finish off the h1 below so it says "Hello Kunal Guhagarkar"

import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  const firstName = "Kunal";
  const lastName = "Guhagarkar";

  return <h1>Hello {firstName + " " + lastName}</h1>;
}

createRoot(document.getElementById("root")).render(<App />);