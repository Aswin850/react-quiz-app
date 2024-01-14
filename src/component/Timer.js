import React, { useEffect } from "react";

export default function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const myIntervalID = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return function cleanUp() {
      clearInterval(myIntervalID);
    };
  }, [dispatch]);
  return (
    <div className="timer">
      {mins < 10 && "0"} {mins}: {seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
