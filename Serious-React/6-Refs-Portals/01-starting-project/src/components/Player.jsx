import { useState, useRef } from "react";

export default function Player() {

  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState();
  const [submit, setSubmit] = useState(false);

  function handleChange(e) {
    setSubmit(false);
    setEnteredPlayerName(e.target.value);
  }

  function handleClick() {
    console.log(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {submit ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
