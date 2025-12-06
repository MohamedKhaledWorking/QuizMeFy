import { BookOpenCheck, Lightbulb, XCircle } from "lucide-react";
import React from "react";

export default function ReviewCard({ question, idx, selected }) {
  const userAnswer = selected.find((s) => s.questionIdx === idx);

  return (
    <div className="p-8 border border-gray-400/30 bg-sec mb-16 rounded-3xl w-full capitalize">
      <p className="text-md text-gray-400 mb-2">question {idx + 1}</p>
      <p className="text-2xl font-bold text-white mb-6">
        {question?.question}
      </p>

      <div className="mb-8">
        {question?.options.map((opt, optionIndex) => {
          const isCorrect = question.correctOption === optionIndex + 1;
          const isUserSelected = userAnswer?.answerIdx === optionIndex;
          const isWrongSelection = isUserSelected && !isCorrect;

          return (
            <div
              key={optionIndex}
              className={`px-8 py-4 mb-6 rounded-xl flex items-center space-x-4 
                ${
                  isCorrect
                    ? "bg-green-500/10 text-green-500 border border-green-500"
                    : isWrongSelection
                    ? "bg-red-500/10 text-red-500 border border-red-500"
                    : "bg-main text-gray-400 border border-transparent"
                }
              `}
            >
              {isCorrect && <BookOpenCheck />}
              {isWrongSelection && <XCircle />}

              <p>{opt.text}</p>
            </div>
          );
        })}
      </div>

      <div className="flex items-center border border-teal-500 bg-teal-500/5 text-teal-500 space-x-4 p-4 rounded-2xl">
        <Lightbulb />
        <div>
          <p className="text-xl font-bold">Explanation</p>
          <p>{question?.explanation}</p>
        </div>
      </div>
    </div>
  );
}
