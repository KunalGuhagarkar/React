import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState();

  function handleChange(e) {
    setEnteredPlayerName(e.target.value);
  }

  return (
    <section id="player">
      <h2>Welcome unknown entity</h2>
      <p>
        <input type="text" value={enteredPlayerName} onChange={handleChange} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
