import { useState } from "react";

export default function Player() {

  const [name, setName] = useState();

  function nameSetHandler(e) {
    setName(e.target.value);
  }

  return (
    <section id="player">
      <h2>Welcome unknown entity</h2>
      <p>
        <input type="text" value={name} />
        <button onClick={nameSetHandler}>Set Name</button>
      </p>
    </section>
  );
}
