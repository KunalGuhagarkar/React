import { useState, useRef } from "react";

export default function Player() {

  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState();

  function handleClick() {
    console.log(playerName.current.value);
    playerName.current
  }

  return (
    <section id="player">
      <h2>Welcome {submit ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
