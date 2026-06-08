// Challenge: See if you can correctly pass the necessary props to the Joke component in the .map() (and render the jokeElements array) so the jokes show up on the page again

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
