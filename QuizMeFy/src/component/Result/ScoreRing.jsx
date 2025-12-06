// ScoreRing.jsx
import React from "react";

export default function ScoreRing({ score = 89, size = 380 }) {
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clampedScore = Math.max(0, Math.min(100, score));
  const offset = circumference - (clampedScore / 100) * circumference;

  const color =
    clampedScore < 50
      ? "#ef4444"
      : clampedScore < 70
      ? "#facc15"
      : clampedScore < 90
      ? "#3b82f6"
      : clampedScore < 95
      ? "#22d3ee"
      : "#22c55e";

  return (
    <>
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2  w-3.5 h-3.5 rounded-full"
          style={{ backgroundColor: color }}
        />

        <svg width={size} height={size}>
          <circle
            stroke="#1e2535"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
        </svg>

        <svg
          className="absolute top-0 left-0"
          width={size}
          height={size}
          style={{ transform: "rotate(-90deg)" }}
        >
          <circle
            stroke={color}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            r={radius}
            cx={size / 2}
            cy={size / 2}
            className="transition-all duration-500"
          />
        </svg>

        <div className="absolute text-center">
          <p className="text-3xl font-extrabold" style={{ color }}>
            {clampedScore}%
          </p>
          <p className="text-sm text-slate-400">Score</p>
        </div>
      </div>
      <p className=" mt-8 text-2xl">Keep studying! You can do better!</p>
      <p className="text-gray-500 mt-5">Mathematics</p>
    </>
  );
}
