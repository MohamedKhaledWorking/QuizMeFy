import { Flag, Send } from "lucide-react";
import React from "react";
import Instruction from "./Instruction.jsx";
import SidebarCard from "./SidebarCard.jsx";

export default function Sidebar({
  length,
  dispatch,
  selected,
  questionIdx,
  flagged,
}) {
  return (
    <div className="w-3/12 px-3 py-4 ">
      <div className="bg-sec px-8 py-10 rounded-3xl border border-gray-400/10">
        <p className="text-gray-500">questions</p>
        <div className="flex flex-wrap">
          {Array.from({ length: length }).map((_, index) => (
            <SidebarCard
              key={index}
              index={index}
              dispatch={dispatch}
              selected={selected}
              flagged={flagged}
              questionIdx={questionIdx}
            />
          ))}
        </div>
        <Instruction />
      </div>

      <button
        onClick={() => dispatch({ type: "submitting" })}
        className="flex border border-gray-500/20 items-center justify-center mt-8 rounded-xl px-12 space-x-4 p-4 w-full cursor-pointer hover:bg-sec duration-300 hover:scale-105 hover:text-teal-500 hover:border-teal-500"
      >
        <Send /> <p> Submit Quiz</p>
      </button>
    </div>
  );
}
