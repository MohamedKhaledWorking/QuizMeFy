import React, { useState } from "react";

export default function Answers({
  idx,
  option,
  dispatch,
  questionIdx,
  selected,
  points,
  correctOption,
}) {
  const isSelected = selected.find(
    (item) => item.questionIdx == questionIdx && item.answerIdx == idx
  );

  function handleSelecting(id) {
    isSelected
      ? dispatch({
          type: "deSelectAnswer",
          payload: { questionIdx, answerIdx: idx, correctOption },
        })
      : dispatch({
          type: "selectAnswer",
          payload: { questionIdx, answerIdx: idx, correctOption },
        });
  }
  return (
    <div
      className={`bg-gray-800/30 py-4 px-8 my-4 rounded-lg border border-gray-400/10 border-2 cursor-pointer hover:border-teal-500 hover:translate-x-6 duration-300 group ${
        isSelected && "border-teal-500 text-teal-500 translate-x-6"
      } `}
      onClick={() => handleSelecting(idx)}
    >
      <li className="py-2">
        <span
          className={`mr-4 bg-gray-600/30 text-gray-400 px-2 py-2 px-4 rounded-xl group-hover:bg-teal-500/30 group-hover:text-teal-500 duration-300 text-xl ${"bg-teal-500/30 text-teal-500"}`}
        >
          {idx == 0 ? "a" : idx == 1 ? "b" : idx == 2 ? "c" : "d"}
        </span>
        <span className="text-xl">{option.text}</span>
      </li>
    </div>
  );
}

// ${"bg-teal-500/30 border-teal-500"}
