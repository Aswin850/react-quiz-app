import React from "react";

export default function NextButton({ dispatch, answer, index, numQuestion }) {
  const hasAnswered = answer !== null;
  if (!hasAnswered) return null;
  if (index < numQuestion - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      </div>
    );
  if (index === numQuestion - 1) {
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      </div>
    );
  }
}
