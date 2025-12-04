import React from "react";

export default function HistoryCard({ item }) {
  return (
    <div className="bg-slate-800/50 hover:bg-slate-800 duration-300 cursor-pointer hover:scale-x-105 hover:border hover:border-sky-500 my-4 p-3 flex rounded-lg">
      <p className="text-2xl">{item.categoryIcon}</p>
      <div className="flex flex-col">
        <p className="ml-4 font-semibold text-lg line-clamp-1 text-white">
          {item.categoryTitle}
        </p>
        <div className="flex items-center mt-2">
          <p
            className={`ml-4 text-sm text-gray-400 ${
              item.score > 75
                ? "text-green-500"
                : item.score < 50
                ? "text-orange-500"
                : "text-yellow-500"
            }`}
          >
            {" "}
            {item.score}%
          </p>
          <p className="ml-4 text-sm text-gray-400 ">
            {item.completedAt.toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
