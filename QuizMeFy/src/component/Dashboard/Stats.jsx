import { Award, ChartSpline, Flame, Radar, Star } from "lucide-react";
import React, { useState } from "react";

export default function Stats() {
  const [profile, setProfile] = useState({
    totalQuizzesTaken: 15,
    averageScore: 78,
    bestCategory: "History",
    currentStreak: 3,
  });
  return (
    <>
      <div className="border border-gray-400/20 bg-sec px-4 py-6 rounded-lg  ">
        <div className="flex items-center space-x-3 text-teal-500 ">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chart-line-icon lucide-chart-line"
          >
            <path d="M3 3v16a2 2 0 0 0 2 2h16" />
            <path d="m19 9-5 5-4-4-3 3" />
          </svg>
          <p className="text-2xl font-bold">your stats</p>
        </div>
        <div className="flex justify-between flex-wrap items-center mt-4 pb-8">
          <div className="w-1/2  flex justify-center items-center mt-8">
            <div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-500 flex items-center justify-center">
    
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-award-icon lucide-award"
              >
                <circle cx="12" cy="8" r="7" />
                <path d="M8.21 13.89 5 21l7-4 7 4-3.21-7.11" />
              </svg>
            </div>
            <div className="ml-4  text-sm">
              <p className="text-white text-2xl font-bold">
                {profile.totalQuizzesTaken}
              </p>
              <p className="text-gray-500 text-xs max-w-[100px] h-8 line-clamp-2 ">
                Total Quizzes Taken
              </p>
            </div>
          </div>
          <div className="w-1/2  flex justify-center items-center mt-8">
            <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
    
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-radar-icon lucide-radar"
              >
                <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
                <path d="M4 6h.01" />
                <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
                <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
                <path d="M12 18h.01" />
                <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
                <circle cx="12" cy="12" r="2" />
                <path d="m13.41 10.59 5.66-5.66" />
              </svg>
            </div>
            <div className="ml-4  text-sm">
              <p className="text-white text-2xl font-bold">
                {profile.averageScore}%
              </p>
              <p className="text-gray-500 text-xs max-w-[100px] h-8 line-clamp-2 ">
                Average Score
              </p>
            </div>
          </div>
          <div className="w-1/2  flex justify-center items-center mt-8">
            <div className="w-10 h-10 rounded-full bg-rose-500/20 text-rose-500 flex items-center justify-center">
    
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-flame-icon lucide-flame"
              >
                <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />
              </svg>
            </div>
            <div className="ml-4  text-sm">
              <p className="text-white text-2xl font-bold">
                {profile.currentStreak}
              </p>
              <p className="text-gray-500 text-xs max-w-[100px] h-8 line-clamp-2 ">
                Current Streak
              </p>
            </div>
          </div>
          <div className="w-1/2  flex justify-center items-center mt-8">
            <div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-500 flex items-center justify-center">
    
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-star-icon lucide-star"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
              </svg>
            </div>
            <div className="ml-4  text-sm">
              <p className="text-white text-2xl font-bold">
                {profile.bestCategory}
              </p>
              <p className="text-gray-500 text-xs max-w-[100px] h-8 line-clamp-2 ">
                Best Category
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
