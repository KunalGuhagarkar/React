/*
  Exercise:
  1. Add a function that's triggered when the <button> is clicked
  2. Change isEditing to true in that function
  3. Show the <span className="player-name"> only when isEditing is false
  4. Show an <input> element (which does not need to work) if isEditing is true
*/

import { useState } from "react";

export default function Player({name, symbol}) {
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing(true);
  }

  return (
    <li>
      <span className="player">

        {isEditing && <span className="player-name">{name}</span>}
        {isEditing && <input />}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>Edit</button>
    </li>
  );
}
