import { Clock, House } from "lucide-react";
import React, { useEffect } from "react";
import { Link } from "react-router";

export default function QuizHeader({ quiz }) {
  function formatTime(totalMinutes) {
    const minutes = Math.floor(totalMinutes);
    const seconds = Math.round((totalMinutes - minutes) * 60);

    const mm = String(minutes).padStart(2, "0");
    const ss = String(seconds).padStart(2, "0");
    console.log(mm, ss);
    return `${mm}:${ss}`;
  }
  useEffect(( ) => {
    setTimeout(() => {
      
    })
  })
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div className="w-20 py-10 flex items-center justify-center ">
          <Link to={"/"}>
            <House />
          </Link>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-3xl mb-2">🏫 {quiz?.quizName}</h1>
          <p className="text-sm text-gray-500">
            {quiz?.length} questions . {quiz?.time} minutes . {quiz?.difficulty}
          </p>
        </div>
      </div>
      <div className="bg-gray-800 text-xl px-8 py-4 flex items-center space-x-2 rounded-lg">
        <Clock />
        <p>02:30</p>
      </div>
    </div>
  );
}
