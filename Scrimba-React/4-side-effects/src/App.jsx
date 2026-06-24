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

// import { useState, useEffect } from "react";

// export default function App() {
//   const [starWarsData, setStarWarsData] = useState({});
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     fetch(`https://swapi.info/api/people/${count}`)
//       .then((res) => res.json())
//       .then((data) => setStarWarsData(data));
//   }, [count]);

//   return (
//     <div>
//       <h2>The count is {count}</h2>
//       <button onClick={() => setCount((prevCount) => prevCount + 1)}>
//         Get Next Character
//       </button>
//       <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//     </div>
//   );
// }

// import { useState } from "react";
// import WindowTracker from "./components/WindowTracker";

// export default function App() {
//   const [show, setShow] = useState(true);

//   return (
//     <main className="container">
//       <button onClick={() => setShow((prevShow) => !prevShow)}>
//         Toggle WindowTracker
//       </button>
//       {show && <WindowTracker />}
//     </main>
//   );
// }

import { useRef } from "react";

export default function App() {
  const inputRef = useRef(null);
  const countRef = useRef(0);

  function handleClick() {
    inputRef.current.focus();
  }

  function handleIncrementCountClick() {
    console.log(countRef.current);
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
      <br />
      <br />
      <h1>{countRef}</h1>
      <button onClick={handleIncrementCountClick}>Increase Count</button>
    </>
  );
}
