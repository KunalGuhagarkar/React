import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {

  const [challenge, setChallenge] = useState(false);

  function handleTimer() {
    setTimeout(() => {

    }, 1000)
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''};
      </p>
      <p>
        <button onClick={handleStartClick}>
          {challenge ? `Stop at ${targetTime}` : 'Start Challenge'}
        </button>
      </p>
      <p className="">
        Time is running ... / Timer inactive
      </p>
    </section>
  );
}
