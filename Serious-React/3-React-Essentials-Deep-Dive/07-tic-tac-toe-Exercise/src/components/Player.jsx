/*
  Exercise:
  1. Add a function that's triggered when the <button> is clicked
  2. Change isEditing to true in that function
  3. Show the <span className="player-name"> only when isEditing is false
  4. Show an <input> element (which does not need to work) if isEditing is true
*/

import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    // setIsEditing(!isEditing); // => schedules a state updates to be true
    // setIsEditing(!isEditing); // => schedules a state updates to be true
    // Best Practice
    setIsEditing((editing) => !editing);
  }

  function handleChange() {
    setName((n) => n);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" required value={name} onChange={handleChange} />
        ) : (
          <span className="player-name">{name}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
