import React from 'react'

import { useState, useRef } from "react"
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({title, targetTime}) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaing, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaing > 0 && timeRemaing < targetTime * 1000;

  if (timeRemaing <= 0) {
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    dialog.current.open();
  }


  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop () {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2> {title} </h2>
        {timerExpired && <p>You Lost!</p>}
        <p className="challenge-time">
          {targetTime} Second{targetTime > 1 ? 's' : ''};
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
          {timerIsActive ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}
