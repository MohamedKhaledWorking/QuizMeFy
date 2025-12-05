import React, { useState } from "react";

export default function QuestionAction({ dispatch, questionIdx, length }) {
  return (
    <div className="flex justify-between">
      <button
        className={`text-teal-500 hover:text-white px-12 py-2 text-xl capitalize rounded-lg  hover:bg-teal-500  border border-teal-500 duration-300 ${
          questionIdx <= 0 ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        }`}
        onClick={() => dispatch({ type: "dec" })}
        disabled={questionIdx <= 0}
      >
        previous
      </button>
      <button
        className={`bg-teal-500 text-white px-12 py-2 text-xl capitalize rounded-lg hover:bg-gray-800/30 hover:text-teal-500  border border-teal-500 duration-300 ${
          questionIdx >= length - 1
            ? "cursor-not-allowed opacity-50 "
            : "cursor-pointer"
        }`}
        disabled={questionIdx >= length - 1}
        onClick={() => dispatch({ type: "inc" })}
      >
        next
      </button>
    </div>
  );
}
