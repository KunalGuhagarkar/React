// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   function add() {
//     setCount(prevCount => prevCount + 1);
//   }

//   function minus() {
//     setCount(prevCount => prevCount - 1);
//   }

//   return (
//     <main className="container">
//       <h1>How many times will Bob say "state" in this section?</h1>
//       <div className="counter">
//         <button onClick={minus} className="minus" aria-label="Decrease count">
//           –
//         </button>
//         <h2 className="count">{count}</h2>
//         <button onClick={add} className="plus" aria-label="Increase count">
//           +
//         </button>
//       </div>
//     </main>
//   );
// }

// export default App;

import { useState } from "react";

export default function App() {
  // const isGoingOut = true;
  // let answer = isGoingOut ? "Yes" : "No"; // 👈 Use ternary here

  const [isGoingOut, setIsGoingOut] = useState(true);

  // Remove the code below 👇 once your ternary is done
  // if (isGoingOut === true) {
  //   answer = "Yes";
  // } else {
  //   answer = "No";
  // }

  // function handleToggle() {
  //   setIsGoingOut(!isGoingOut);
  // }

  return (
    <main>
      <h1 className="title">Do I feel like going out tonight?</h1>
      <button onClick={() => setIsGoingOut(!isGoingOut)} className="value">
        {isGoingOut ? "Yes" : "No"}
      </button>
    </main>
  );
}
