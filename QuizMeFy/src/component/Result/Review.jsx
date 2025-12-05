import React from "react";
import ReviewCard from "./ReviewCard.jsx";

export default function Review({selected , questions}) {
  return (
    <>
      <div className="my-16 w-full  ">
        <p className="text-4xl font-bold my-4">Review Answers</p>
      </div>
      {questions?.map((question, idx) => {
        return <ReviewCard key={question.id} question={question} idx={idx} selected={selected} />;
      })}
    </>
  );
}
