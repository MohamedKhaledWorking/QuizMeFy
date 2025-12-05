import React, { useState } from "react";
import Answers from "./Answers.jsx";
import QuestionAction from "./QuestionAction.jsx";
import { Flag, FlagOff } from "lucide-react";

export default function Question({
  questionIdx,
  quiz,
  dispatch,
  selected,
  flagged,
}) {
  const isFlagged = flagged.some((item) => item == questionIdx);
  console.log(isFlagged);
  return (
    <div className="w-9/12 px-3 py-4 ">
      <div className="bg-sec px-8 py-10 rounded-3xl border border-gray-400/10">
        <div className="flex justify-between">
          <p className="text-gray-400">question {questionIdx + 1}</p>
          {isFlagged ? (
            <FlagOff
              size={20}
              className={`text-yellow-400 hover:text-yellow-500 cursor-pointer duration-300 `}
              onClick={() => {
                dispatch({ type: "removeFlagged", payload: questionIdx });
              }}
            />
          ) : (
            <Flag
              size={20}
              className={`text-gray-400 hover:text-yellow-500 cursor-pointer duration-300 `}
              onClick={() => {
                dispatch({ type: "setFlagged", payload: questionIdx });
              }}
            />
          )}
        </div>
        <p className="text-2xl my-4">
          {quiz?.questions[questionIdx]?.question}
        </p>

        <ul className="my-12 border-b border-gray-400/10 pb-8">
          {quiz?.questions[questionIdx]?.options.map((option, idx) => {
            return (
              <Answers
                key={idx}
                idx={idx}
                option={option}
                selected={selected}
                dispatch={dispatch}
                questionIdx={questionIdx}
                points={quiz?.questions[questionIdx]?.points}
                correctOption={quiz?.questions[questionIdx]?.correctOption}
              />
            );
          })}
        </ul>

        <QuestionAction
          dispatch={dispatch}
          questionIdx={questionIdx}
          length={quiz?.questions?.length}
        />
      </div>
    </div>
  );
}
