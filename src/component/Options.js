import React from "react";

export default function Options({ questions, dispatch, answer }) {
  const hasAswered = answer !== null;
  return (
    <div className="options">
      {questions.options.map((option, i) => (
        <button
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            hasAswered
              ? i === questions.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={i}
          disabled={hasAswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
