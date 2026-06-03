import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [challenge, setChallenge] = useState(false);

  function startClickHandle() {
    setChallenge((c) => !c);
  }

  function handleStart() {
    const timeDuration = 1000;

    setChallenge((prevChallenge) => {
      const nextChallengeState = !prevChallenge;

      if (nextChallengeState) {
        console.log("Timer Started");
        const start = Date.now();
        setTimeout(() => {
          setChallenge((currentChallenge) => !currentChallenge);
          const end = Date.now();
          console.log(`Elapsed time: ${end - start}ms`);
        }, timeDuration);
      }
      return nextChallengeState;
    });
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
