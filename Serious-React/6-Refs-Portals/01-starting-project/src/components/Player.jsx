import { useState } from "react";

export default function Player() {

  const [name, setName] = useState();

  function nameSetClickHandler() {
    
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <section id="player">
      <h2>Welcome unknown entity</h2>
      <h1>{name}</h1>
      <p>
        <input type="text" onChange={handleNameChange} />
        <button onClick={nameSetClickHandler}>Set Name</button>
      </p>
    </section>
  );
}
