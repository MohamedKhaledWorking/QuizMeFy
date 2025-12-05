import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-main">
      <div className="px-8 py-6 rounded-3xl flex flex-col items-center gap-4">
        <h1 className="text-9xl font-bold text-teal-400 ">QuizMeFy</h1>

        <div className="text-teal-400 my-20 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="500"
            height="500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* PATH 3 — Book Outline (draw first, erase last) */}
            <path
              d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"
              strokeDasharray="80"
              strokeDashoffset="80"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="80;0;0;80;80"
                keyTimes="0;0.25;0.7;0.85;1"
                dur="6s"
                repeatCount="indefinite"
                begin="0s"
              />
            </path>

            {/* PATH 1 — Vertical Line (draw second, erase second) */}
            <path d="M12 21V7" strokeDasharray="20" strokeDashoffset="20">
              <animate
                attributeName="stroke-dashoffset"
                values="20;20;0;0;20;20"
                keyTimes="0;0.25;0.45;0.7;0.85;1"
                dur="6s"
                repeatCount="indefinite"
                begin="0s"
              />
            </path>

            {/* PATH 2 — Checkmark (draw last, erase first) */}
            <path d="m16 12 2 2 4-4" strokeDasharray="20" strokeDashoffset="0">
              <animate
                attributeName="stroke-dashoffset"
                values="20;20;20;0;0;20"
                keyTimes="0;0.25;0.45;0.55;0.7;1"
                dur="6s"
                repeatCount="indefinite"
                begin="0s"
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
