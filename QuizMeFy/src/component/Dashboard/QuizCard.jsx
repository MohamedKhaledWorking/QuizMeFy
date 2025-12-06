import React from "react";
import QuestionsAndTime from "./QuestionsAndTime.jsx";
import { Link } from "react-router";
import { Trophy } from "lucide-react";

export default function QuizCard({
  title,
  description,
  icon,
  questionCount,
  estimatedTimeMinutes,
  difficulty,
  color,
  completedQuizzes,
}) {
  const defaultDifficultyClass =
    difficulty === "Easy"
      ? "green-400"
      : difficulty === "Medium"
      ? "yellow-600"
      : "red-600";

  return (
    <>
      <Link
        to={"/start"}
        className="pr-3 w-1/3 relative hover:scale-103 duration-300 cursor-pointer mb-6 group"
      >
        <div
          className={`absolute top-10 right-7 py-2 px-5 rounded-3xl text-xs text-${defaultDifficultyClass} bg-${defaultDifficultyClass}/30`}
        >
          {difficulty}
        </div>
        <div
          className={`p-5 py-8 relative hover:bg-blue-500/20 duration-300 rounded-xl`}
        >
          <div
            className={`absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20 bg-gradient-to-br ${color} rounded-xl `}
          />
          <p className="text-5xl ">{icon}</p>
          <p className="text-2xl text-white my-4 line-clamp-1 group-hover:text-sky-500 duration-300">
            {title}{" "}
          </p>
          <p className="text-gray-400 text-sm  mb-4 line-clamp-2 h-10">
            {description}
          </p>
          <QuestionsAndTime
            questions={questionCount}
            time={estimatedTimeMinutes}
          />
          <div className="flex mt-6 text-teal-500">
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
              className="lucide lucide-trophy-icon lucide-trophy"
            >
              <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" />
              <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" />
              <path d="M18 9h1.5a1 1 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
              <path d="M6 9H4.5a1 1 0 0 1 0-5H6" />
            </svg>
            <p className="ml-2">{completedQuizzes} completed</p>
          </div>
        </div>
      </Link>
    </>
  );
}
