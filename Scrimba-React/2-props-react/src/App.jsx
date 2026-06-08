// import Contact from "./components/Contact";

// function App() {
//   return (
//     <div className="contacts">
//       <Contact
//         img=".\src\assets\cat.jpg"
//         name="Mr. Whiskerson"
//         phone="(212) 555-1234"
//         email="mr.whiskaz@catnap.meow"
//       />
//       <Contact
//         img=".\src\assets\cat.jpg"
//         name="Fluffykins"
//         phone="(212) 555-2345"
//         email="fluff@me.com"
//       />
//       <Contact
//         img=".\src\assets\cat.jpg"
//         name="Felix"
//         phone="(212) 555-4567"
//         email="thecat@hotmail.com"
//       />
//       <Contact
//         img=".\src\assets\cat.jpg"
//         name="Pumpkin"
//         phone="(0800) CAT KING"
//         email="pumpkin@scrimba.com"
//       />
//     </div>
//   );
// }

// const person = {
//   img: "image_path",
//   name: "Kunal",
//   phone: 1234567890,
//   email: "k@gmail.com"
// };

// const {img, name} = person;
// console.log(img, name);

// const {img: image, name} = person;
// console.log(image, name);

// import Jokes from "./components/Jokes";

// function App() {
//   return (
//     <>
//       <Jokes
//         setup="I got my daughter a fridge for her birthday."
//         punchline="I can't wait to see her face light up when she opens it."
//         upvotes={22}
//         downvotes={10}
//         comments={[
//           { author: "Kunal", text: "What a Joke!" },
//           { author: "Oinku", text: "Oink Oink Oink" },
//         ]}
//         isPun={true}
//       />
//       <Jokes
//         setup="How did the hacker escape the police?"
//         punchline="He just ransomware!"
//         upvotes={22}
//         downvotes={10}
//         comments={[
//           { author: "Kunal", text: "What a Joke!" },
//           { author: "Oinku", text: "Oink Oink Oink" },
//         ]}
//         isPun={true}
//       />
//       <Jokes
//         setup="Why don't pirates travel on mountain roads?"
//         punchline="Scurvy."
//         upvotes={22}
//         downvotes={10}
//         comments={[
//           { author: "Kunal", text: "What a Joke!" },
//           { author: "Oinku", text: "Oink Oink Oink" },
//         ]}
//         isPun={true}
//       />
//       <Jokes
//         setup="Why do bees stay in the hive in the winter?"
//         punchline="Swarm."
//         upvotes={22}
//         downvotes={10}
//         comments={[
//           { author: "Kunal", text: "What a Joke!" },
//           { author: "Oinku", text: "Oink Oink Oink" },
//         ]}
//         isPun={true}
//       />
//       <Jokes
//         setup="What's the best thing about Switzerland?"
//         punchline="I don't know, but the flag is a big plus!"
//         upvotes={22}
//         downvotes={10}
//         comments={[
//           { author: "Kunal", text: "What a Joke!" },
//           { author: "Oinku", text: "Oink Oink Oink" },
//         ]}
//         isPun={false}
//       />
//       <Jokes
//         punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
//         upvotes={22}
//         downvotes={10}
//         comments={[
//           { author: "Kunal", text: "What a Joke!" },
//           { author: "Oinku", text: "Oink Oink Oink" },
//         ]}
//         isPun={true}
//       />
//     </>
//   );
// }

// export default App;

// import Contact from "./components/Contact";

// // Handling static assets
// import catImg from "./assets/cat.jpg";

// function App() {
//   return (
//     <div className="contacts">
//       <Contact
//         img={catImg}
//         name="Mr. Whiskerson"
//         phone="(212) 555-1234"
//         email="mr.whiskaz@catnap.meow"
//       />
//       <Contact
//         img={catImg}
//         name="Fluffykins"
//         phone="(212) 555-2345"
//         email="fluff@me.com"
//       />
//       <Contact
//         img={catImg}
//         name="Felix"
//         phone="(212) 555-4567"
//         email="thecat@hotmail.com"
//       />
//       <Contact
//         img={catImg}
//         name="Pumpkin"
//         phone="(0800) CAT KING"
//         email="pumpkin@scrimba.com"
//       />
//     </div>
//   );
// }

// export default App;

// export default function App() {
//   const ninjaTurtles = ["Donatello", "Michaelangelo", "Rafael", "Leonardo"];
//   return (
//     <main>
//       {ninjaTurtles.map((turtle) => (
//         <h2>{turtle}</h2>
//       ))}
//     </main>
//   );
// }

import Jokes from "./components/Jokes";
import jokesList from "./data/JokesData";

export default function App() {
  const joke = jokesList.map((joke) => {
    return (
      <>
        <Jokes setup={joke.setup} punchline={joke.punchline} />
      </>
    );
  });

  return <main>{joke}</main>;
}
