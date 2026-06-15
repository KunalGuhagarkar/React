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

// function App() {
//   function handleSubmit(formData) {
//     // console.log(formData);
//     // const email = formData.get("email");
//     // console.log(email);
//     // const password = formData.get("password");
//     // console.log(password);
//     // const radio = formData.get("employmentStatus");
//     // console.log(radio);
//     // const checkbox = formData.getAll("dietaryRestrictions");
//     // console.log(checkbox);
//     // const select = formData.get("fav-color");
//     // console.log(select);
//     // console.log(Object.fromEntries(formData));
//     const data = Object.fromEntries(formData);
//     console.log(data);
//     const dietaryRestrictions = formData.getAll("dietaryRestrictions");
//     console.log(dietaryRestrictions);
//     const allData = { ...data, dietaryRestrictions };
//     console.log(allData.dietaryRestrictions);
//   }

//   return (
//     <section>
//       <h1>Signup Form</h1>
//       <form action={handleSubmit}>
//         <label htmlFor="email">Email:</label>
//         <input
//           defaultValue="jane@example.com"
//           type="email"
//           id="email"
//           name="email"
//           placeholder="jane@example.com"
//         />

//         <br />

//         <label htmlFor="password">Password:</label>
//         <input
//           defaultValue="password123"
//           type="password"
//           name="password"
//           id="password"
//           placeholder="xxxx"
//         />

//         <br />

//         <label htmlFor="description">Description:</label>
//         <textarea
//           name="description"
//           id="description"
//           defaultValue="This is a description"
//         ></textarea>

//         <fieldset>
//           <legend>Employee Status:</legend>
//           <label>
//             <input type="radio" name="employmentStatus" value="Unemployed" />
//             Unemployed
//           </label>
//           <label>
//             <input type="radio" name="employmentStatus" value="Part-time" />
//             Part-Time
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="employmentStatus"
//               value="Full-time"
//               defaultChecked
//             />
//             Full-Time
//           </label>
//         </fieldset>

//         <fieldset>
//           <legend>Dietary Restrictions:</legend>
//           <label>
//             <input type="checkbox" name="dietaryRestrictions" value="Kosher" />
//             Kosher
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="dietaryRestrictions"
//               value="Vegan"
//               defaultChecked
//             />
//             Vegan
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="dietaryRestrictions"
//               value="Gluten-Free"
//               defaultChecked
//             />
//             Gluten-Free
//           </label>
//         </fieldset>

//         <label htmlFor="fav-color">What is your favorite color?</label>
//         <select name="fav-color" id="fav-color" defaultValue="" required>
//           <option value="" disabled>
//             -- Choose a color --
//           </option>
//           <option value="red">Red</option>
//           <option value="blue">Blue</option>
//           <option value="green">Green</option>
//         </select>

//         <button type="submit">Submit</button>
//       </form>
//     </section>
//   );
// }

// export default App;

import Jokes from "./components/Jokes";
import jokesData from "./data/jokesData";

export default function App() {
  const jokeElements = jokesData.map((joke) => {
    return <Jokes key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
  });
  return <div>{jokeElements}</div>;
}
