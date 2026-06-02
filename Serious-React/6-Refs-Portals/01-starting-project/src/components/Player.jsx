import { useState } from "react";

export default function Player() {

  const [name, setName] = useState();

  function nameSetHandler() {
    setName(name);
  }

  function handleNameChange(e) {
    console.log(e.target.value);
  }

  return (
    <section id="player">
      <h2>Welcome unknown entity</h2>
      <h1>{name}</h1>
      <p>
        <input type="text" value={name} onChange={handleNameChange} />
        <button onClick={nameSetHandler}>Set Name</button>
      </p>
    </section>
  );
}
