import { BadgeQuestionMark, CircleX, SearchCheck } from "lucide-react";
import React from "react";

export default function ResultStats({ correct = 0, question = 10, points = 0}) {
  const inCorrect = question - correct;
  return (
    <div className="flex items-center w-full bg my-20 space-x-4 ">
      <div className="w-1/4  py-8  px-4 bg-sec rounded-3xl border border-gray-400/10">
        <div className=" flex flex-col items-center">
          <div className="size-15 flex items-center justify-center bg-green-500/20 text-green-500 rounded-full">
            <SearchCheck />
          </div>
          <p className="text-4xl my-3">{correct}</p>
          <p className="text-gray-500 ">correct</p>
        </div>
      </div>
      <div className="w-1/4  py-8  px-4 bg-sec rounded-3xl border border-gray-400/10">
        <div className=" flex flex-col items-center">
          <div className="size-15 flex items-center justify-center bg-rose-600/20 text-rose-600 rounded-full">
            <CircleX />
          </div>
          <p className="text-4xl my-3">{inCorrect}</p>
          <p className="text-gray-500 ">Incorrect</p>
        </div>
      </div>
      <div className="w-1/4  py-8  px-4 bg-sec rounded-3xl border border-gray-400/10">
        <div className=" flex flex-col items-center">
          <div className="size-15 flex items-center justify-center bg-indigo-500/30 text-indigo-500 rounded-full">
            <BadgeQuestionMark />
          </div>
          <p className="text-4xl my-3">{question}</p>
          <p className="text-gray-500 ">Questions</p>
        </div>
      </div>
      <div className="w-1/4  py-8  px-4 bg-sec rounded-3xl border border-gray-400/10">
        <div className=" flex flex-col items-center">
          <div className="size-15 flex items-center justify-center bg-yellow-500/30 text-yellow-500 rounded-full">
            <BadgeQuestionMark />
          </div>
          <p className="text-4xl my-3">{points}</p>
          <p className="text-gray-500 ">points</p>
        </div>
      </div>
    </div>
  );
}
