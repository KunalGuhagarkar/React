import JokeComponent from "./Jokes/JokeComponent"

function App() {
  

  return (
    <>
      <JokeComponent setup="I got my daughter a fridge for her birthday." punchline="I can't wait to see her face light up when she opens it." />

      <JokeComponent setup="How did the hacker escape the police?" punchline="He just ransomware!" />

      <JokeComponent setup="Why don't pirates travel on mountain roads?" punchline="Scurvy." />

      <JokeComponent setup="Why do bees stay in the hive in the winter?" punchline="Swarm." />

      <JokeComponent setup="What's the best thing about Switzerland?" punchline="I don't know, but the flag is a big plus!" />

      <JokeComponent punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally." />
    </>
  )
}

export default App
