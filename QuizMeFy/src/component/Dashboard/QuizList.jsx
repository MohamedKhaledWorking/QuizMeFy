import React from "react";
import QuizCard from "./QuizCard.jsx";

export default function QuizList({ quizzes }) {
  return (
    <div className="mt-5 text-white">
      <div className="flex justify-between">
        <p className="text-2xl font-bold">Categories</p>
        <p className="text-gray-400">{quizzes?.length} available</p>
      </div>

      <div className="flex flex-wrap mt-8">
        {quizzes?.map((quiz) => {
          return <QuizCard {...quiz} key={quiz.id} />;
        })}
      </div>
    </div>
  );
}
