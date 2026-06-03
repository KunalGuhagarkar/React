import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [challenge, setChallenge] = useState(false);

  function handleTimer() {
    setChallenge(!challenge);
    setTimeout(() => {
      console.log("Timer Over");
    }, 1000);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""};
      </p>
      <p>
        <button onClick={handleTimer}>
          {challenge ? `Stop at ${targetTime}` : "Start Challenge"}
        </button>
      </p>
      <p className="">Time is running ... / Timer inactive</p>
    </section>
  );
}
