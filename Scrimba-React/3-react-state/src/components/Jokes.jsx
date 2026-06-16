import { useState } from "react";

export default function Jokes(props) {
  const [isShown, setIsShown] = useState(false);

  function handleToggle() {
    setIsShown((prev) => !prev);
  }

  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      <button onClick={handleToggle}>{ isShown ? "Hide" : "Show"} Punchline</button>
      <hr />
    </div>
  );
}
