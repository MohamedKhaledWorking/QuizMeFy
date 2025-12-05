import React from "react";

export default function QuizProgress({ selected, questions }) {
  const percentage = (selected.length / questions.length) * 100;
  return (
    <>
      <div className="flex justify-between text-gray-400 ">
        <p>question {selected.length} of 10</p>
        <p>{percentage}%</p>
      </div>

      <div className="relative bg-gray-800 p-1 my-4 rounded-lg overflow-hidden">
        <div
          className="absolute top-0 left-0 bg-teal-500 h-full rounded-lg"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </>
  );
}
