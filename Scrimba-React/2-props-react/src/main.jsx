import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// function App() {
//   // const firstName = "Kunal";
//   // const lastName = "Guhagarkar";

//   // return <h1>Hello {firstName} {lastName}</h1>;

//   // return <h1>It is currently {new Date().getHours()}</h1>

//   // return <h1>It is currently {new Date().getHours() % 12}</h1>

//   // const hours = new Date().getHours() % 12;
//   // return <h1>It is currently about {hours}</h1>;

//   // const hours = new Date().getHours();
//   // let timeOfDay;

//   // if (hours < 12) {
//   //   timeOfDay = "Morning";
//   // } else if (hours > 12 && hours < 17) {
//   //   timeOfDay = "Afternoon";
//   // } else if (hours < 21) {
//   //   timeOfDay = "Evening";
//   // } else {
//   //   timeOfDay = "Night";
//   // }

//   // return <h1>Good {timeOfDay}</h1>
// }

createRoot(document.getElementById("root")).render(<App />);


// function Garage() {
//   return (
//     <>
//       <h1>How lives in my Garage</h1>
//       <Car brand="Ford" model="Mustang" color="red" />
//     </>
//   );
// }

// function Car({brand, model, color}) {
//   return (
//     <h2>I'm a {brand}! Model: {model}, Color: {color}</h2>
//   );
// }

// createRoot(document.getElementById("root")).render(<Garage />);
