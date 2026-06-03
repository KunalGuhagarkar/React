import { useState, useRef } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [challenge, setChallenge] = useState(false);

  const timerIdRef = useRef(null);

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
      } else {
        // --- STOP TIMER LOGIC ---
        console.log("Timer Stopped Manually");
        clearTimeout(timerIdRef.current);
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
