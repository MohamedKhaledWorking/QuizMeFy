import React from "react";
import ScoreRing from "./ScoreRing.jsx";
import Review from "./Review.jsx";
import ResultStats from "./ResultStats.jsx";
import ResultActions from "./ResultActions.jsx";

export default function Result({ quiz, selected, dispatch }) {
  const totalPoints = quiz?.questions?.reduce((acc, q) => acc + q.points, 0);

  // find all *correctly answered* questions
  const correctAnswers = selected.filter((sel) => {
    const question = quiz.questions[sel.questionIdx];
    if (!question) return false;

    // if correctOption is 1-based and answerIdx is 0-based:
    return question.correctOption === sel.answerIdx + 1;
  });

  const earnedPoints = correctAnswers.reduce((sum, sel) => {
    const question = quiz.questions[sel.questionIdx];
    return sum + (question?.points || 0);
  }, 0);

  const scorePercent = Math.round((earnedPoints / totalPoints) * 100);
  return (
    <div className="w-screen min-h-screen py-20 bg-main text-white ">
      <div className="container flex items-center flex-col mx-auto px-60 ">
        <h1 className="text-5xl font-bold text-teal-400">Quiz Results</h1>
        <p className="text-gray-500 my-8">Here's how you performed</p>

        <ScoreRing score={scorePercent} />

        <ResultStats correct={correctAnswers.length} points={earnedPoints} />

        <ResultActions dispatch={dispatch} />

        <Review selected={selected} questions={quiz?.questions} />
      </div>
    </div>
  );
}
