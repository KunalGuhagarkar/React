import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [challenge, setChallenge] = useState(false);

  function startClickHandle() {
    setChallenge((c) => !c);
  }

  function handleStart() {
    const timer = 1000;
    if (challenge) {
      console.log("Timer started");
      const start = Date.now();
      setTimeout(() => {
        setChallenge(!challenge);
      }, timer);
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
