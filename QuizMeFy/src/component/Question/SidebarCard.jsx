import React from "react";

export default function SidebarCard({
  index,
  questionIdx,
  dispatch,
  selected,
  flagged,
}) {
  const isFlagged = flagged.some((item) => item == index);
  const isSelected = questionIdx == index;
  const isAnswered = selected.find((item) => item.questionIdx == index);
  return (
    <div className="w-1/5 cursor-pointer p-1 px-2 mt-8 size-12">
      <div
        className={` h-full w-full rounded-xl hover:bg-teal-500 flex justify-center items-center text-lg hover:outline-2 hover:outline-offset-3 hover:outline-teal-500 duration-300 ${
          isSelected
            ? "bg-teal-500 outline-2 outline-offset-3 outline-teal-500"
            : isFlagged
            ? "bg-yellow-500 outline-2 outline-offset-3 outline-yellow-500"
            : isAnswered
            ? "bg-green-500 outline-2 outline-offset-3 outline-green-500"
            : "bg-sec"
        }`}
        onClick={() => dispatch({ type: "setCurrentIdx", payload: index })}
      >
        {index + 1}
      </div>
    </div>
  );
}
