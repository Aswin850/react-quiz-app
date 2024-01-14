import React from "react";

export default function FinishScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
}) {
  const pec = (points / maxPossiblePoints) * 100;

  let emoji;
  if (pec === 100) emoji = "🏅";
  if (pec >= 80 && pec < 100) emoji = "🥈";
  if (pec >= 50 && pec < 80) emoji = "🥉";
  if (pec > 0 && pec < 50) emoji = "🎉";
  if (pec === 0) emoji = "🔁";

  return (
    <>
      <p className="result">
        {" "}
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(pec)}% ) {emoji}
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        {" "}
        Restart Quiz
      </button>
    </>
  );
}
