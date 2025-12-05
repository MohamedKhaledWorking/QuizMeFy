import React from "react";

export default function SubmitModel({ dispatch, selected, questions }) {
  const isRemaining = questions - selected;
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-sec">
      <div className="w-[700px] px-8 py-12 bg-main rounded-3xl text-center">
        <h1 className="text-2xl font-bold text-white">Submit The Quiz ? </h1>
        <p className="text-gray-400 my-4 ">
          you have selected {selected} of {questions}
        </p>
        {isRemaining > 0 && (
          <p className="my-3 text-yellow-500">
            Warning: You have {isRemaining} unanswered questions.
          </p>
        )}
        <p className="my-3 text-rose-500">once you submit you can't go back</p>

        <button className="bg-teal-500 text-white px-12 py-3 text-xl capitalize rounded-lg hover:bg-teal-600 duration-300 my-4 w-full cursor-pointer">
          Submit
        </button>
        <button
          className="bg-rose-500 text-white px-12 py-3 text-xl capitalize rounded-lg hover:bg-rose-600 duration-300 my-4 w-full cursor-pointer"
          onClick={() => dispatch({ type: "cancel" })}
        >
          cancel
        </button>
      </div>
    </div>
  );
}
