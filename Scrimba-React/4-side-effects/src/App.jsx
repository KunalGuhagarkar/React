// import Header from "./components/Header";
// import Main from "./components/Main";

// import "./App.css";

// export default function App() {
//   return (
//     <>
//       <Header />
//       <Main />
//     </>
//   );
// }

import { useState, useEffect } from "react";

export default function App() {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://swapi.info/api/people/1")
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, []);

  console.log("Rendered!");

  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
