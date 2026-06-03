import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [challenge, setChallenge] = useState(false);

  function startClickHandle() {
    setChallenge((c) => !c);
  }

  function handleStart() {
    if (challenge) {
      console.log("Timer started");
      setTimeout(() => {
        console.log("Timer ended");
      }, 1000);
      setChallenge((c) => !c);
    }
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""};
      </p>
      <p>
        <button onClick={startClickHandle}>
          {challenge ? `Stop at ${targetTime}` : "Start Challenge"}
        </button>
        {handleStart()}
      </p>
      <p className="">Time is running ... / Timer inactive</p>
    </section>
  );
}
