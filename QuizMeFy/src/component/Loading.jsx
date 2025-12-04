import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-main">
      <div className="px-8 py-6 rounded-3xl flex flex-col items-center gap-4">
        <h1 className="text-7xl font-bold text-teal-400 ">QuizMeFy</h1>

        <div className="text-teal-400 my-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="500"
            height="500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 21V7" stroke-dasharray="20" stroke-dashoffset="20">
              <animate
                attributeName="stroke-dashoffset"
                values="20;0;20;20"
                keyTimes="0;0.5;0.875;1"
                dur="4s"
                repeatCount="indefinite"
                begin="0s"
              />
            </path>

            <path
              d="m16 12 2 2 4-4"
              stroke-dasharray="20"
              stroke-dashoffset="20"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="20;0;20;20"
                keyTimes="0;0.5;0.875;1"
                dur="4s"
                repeatCount="indefinite"
                begin="0.15s"
              />
            </path>

            <path
              d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"
              stroke-dasharray="80"
              stroke-dashoffset="80"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="80;0;80;80"
                keyTimes="0;0.5;0.875;1"
                dur="4s"
                repeatCount="indefinite"
                begin="0.3s"
              />
            </path>
          </svg>
        </div>

        <h2 className="text-white text-xl font-semibold">
          Preparing your quiz…
        </h2>
        <p className="text-sm text-gray-400">
          We’re picking the best questions for you.
        </p>
      </div>
    </div>
  );
}
