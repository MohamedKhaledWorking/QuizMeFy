import React from "react";
import QuestionsAndTime from "./QuestionsAndTime.jsx";
import { Sparkles } from "lucide-react";

export default function Daily() {
  return (
    <div className=" w-full rounded-2xl px-6 py-8 bg-gradient-to-r from-[#3a2a1a] via-[#2a2218] to-[#3a2a1a] border border-yellow-500/40 shadow-[0_0_20px_-5px_rgba(255,200,0,0.2)] flex items-center justify-between">
      <p className="text-6xl">🏆</p>
      <div>
        <div className="text-md font-semibold mb-2 text-yellow-500 flex">
          {/* <Sparkles /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-sparkles-icon lucide-sparkles"
          >
            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
            <path d="M20 2v4" />
            <path d="M22 4h-4" />
            <circle cx="4" cy="20" r="2" />
          </svg>
          <p className="ml-4">Featured</p>
        </div>
        <p className="text-2xl font-bold capitalize text-white">
          Daily challenge
        </p>
        <p className="text-md text-gray-400">
          mixed questions from different topics
        </p>
      </div>
      <div className="w-1/2 flex items-center capitalize text-white justify-end">
        <QuestionsAndTime questions={20} time={5} />
        <button className="px-12 py-3 rounded-xl ml-4 bg-linear-to-r from-teal-500 to-sky-500 text-black cursor-pointer hover:scale-105 duration-300">
          Start Quiz
        </button>
      </div>
    </div>
  );
}
