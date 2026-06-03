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
    setSubmit(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submit ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
