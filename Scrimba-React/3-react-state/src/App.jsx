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

// import { useState } from "react";

// export default function App() {
//   // const isGoingOut = true;
//   // let answer = isGoingOut ? "Yes" : "No"; // 👈 Use ternary here

//   const [isGoingOut, setIsGoingOut] = useState(true);

//   // Remove the code below 👇 once your ternary is done
//   // if (isGoingOut === true) {
//   //   answer = "Yes";
//   // } else {
//   //   answer = "No";
//   // }

//   // function handleToggle() {
//   //   setIsGoingOut(!isGoingOut);
//   // }

//   return (
//     <main>
//       <h1 className="title">Do I feel like going out tonight?</h1>
//       <button onClick={() => setIsGoingOut(!isGoingOut)} className="value">
//         {isGoingOut ? "Yes" : "No"}
//       </button>
//     </main>
//   );
// }

// import { useState } from "react";

// export default function App() {
//   const [myFavoriteThings, setMyFavoriteThings] = useState([]);
//   const allFavoriteThings = [
//     "💦🌹",
//     "😺",
//     "💡🫖",
//     "🔥🧤",
//     "🟤🎁",
//     "🐴",
//     "🍎🥧",
//     "🚪🔔",
//     "🛷🔔",
//     "🥩🍝",
//   ];

//   const thingsElements = myFavoriteThings.map((thing) => (
//     <p key={thing}>{thing}</p>
//   ));

//   function addFavoriteThing() {
//     setMyFavoriteThings(prevFavList => [...prevFavList, allFavoriteThings[prevFavList.length]]);
//   }

//   return (
//     <main>
//       <button onClick={addFavoriteThing}>Add item</button>
//       <section aria-live="polite">{thingsElements}</section>
//     </main>
//   );
// }

// import React from "react";
// import avatar from "./assets/avatar.png";
// import starFilled from "./assets/star.png";
// import starEmpty from "./assets/star-empty.png";

// export default function App() {
//   const [contact, setContact] = React.useState({
//     firstName: "John",
//     lastName: "Doe",
//     phone: "+1 (212) 555-1212",
//     email: "itsmyrealname@example.com",
//     isFavorite: false,
//   });

//   let starIcon = contact.isFavorite ? starFilled : starEmpty;

//   function toggleFavorite() {
//     setContact((prevContact) => {
//       return { ...prevContact, isFavorite: !prevContact.isFavorite };
//     });
//   }

//   return (
//     <main>
//       <article className="card">
//         <img
//           src={avatar}
//           className="avatar"
//           alt="User profile picture of John Doe"
//         />
//         <div className="info">
//           <button
//             onClick={toggleFavorite}
//             aria-pressed={contact.isFavorite}
//             aria-label={
//               contact.isFavorite ? "Remove From Favorites" : "Add To Favorites"
//             }
//             className="favorite-button"
//           >
//             <img
//               src={starIcon}
//               alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
//               className="favorite"
//             />
//           </button>
//           <h2 className="name">
//             {contact.firstName} {contact.lastName}
//           </h2>
//           <p className="contact">{contact.phone}</p>
//           <p className="contact">{contact.email}</p>
//         </div>
//       </article>
//     </main>
//   );
// }

function App() {
  return (
    <section>
      <h1>Signup Form</h1>
      <form>
        <input type="text" />
        <br />
        <input type="radio" />
        <br />
        <label>
          Email
          <input type="email" name="email" placeholder="joe@example.com" />
        </label>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="jane@example.com"
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" placeholder="xxxx" />
        <br />
        <input type="submit" value="Click" />
        <button type="button">Click Me</button>
        <button type="submit">Click To Submit</button>
      </form>
    </section>
  );
}

export default App;
