import { Clock, House } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export default function QuizHeader({ quiz, dispatch }) {
  const [secondsLeft, setSecondsLeft] = useState(quiz?.time * 60);

  function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const mm = String(minutes).padStart(2, "0");
    const ss = String(seconds).padStart(2, "0");

    return `${mm}:${ss}`;
  }

  useEffect(() => {
    if (!secondsLeft) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return dispatch({ type: "finished" });
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div className="w-20 py-10 flex items-center justify-center">
          <Link to={"/"}>
            <House />
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl mb-2">🏫 {quiz?.quizName}</h1>
          <p className="text-sm text-gray-500">
            {quiz?.length} questions · {quiz?.time} minutes · {quiz?.difficulty}
          </p>
        </div>
      </div>

      <div className="bg-gray-800 text-xl px-8 py-4 flex items-center space-x-2 rounded-lg">
        <Clock />
        <p>{formatTime(secondsLeft)}</p>
      </div>
    </div>
  );
}
