import { useState, useRef } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timerExpired, setTimerExpired] = useState(false);

  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleToggleChallenge}>
          {challenge ? `Stop` : "Start Challenge"}
        </button>
      </p>
      <p>{challenge ? "Time is running ..." : "Timer inactive"}</p>
    </section>
  );
}
