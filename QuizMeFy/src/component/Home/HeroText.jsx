import React from "react";
import { Link } from "react-router";

export default function HeroText() {
  return (
    <>
      <div className="w-1/2 h-1/2 flex justify-center items-center flex-col text-center text-capitalize z-10">
        <div className="border border-white rounded-full px-6 py-2 text-white font-semibold mb-4 w-fit flex ">
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
            class="lucide lucide-brain-icon lucide-brain"
          >
            <path d="M12 18V5" />
            <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" />
            <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
            <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
            <path d="M18 18a4 4 0 0 0 2-7.464" />
            <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
            <path d="M6 18a4 4 0 0 1-2-7.464" />
            <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
          </svg>
          <p className="ml-3">Challenge Your Mind</p>
        </div>
        <p className="text-5xl text-bold text-white w-1/2 my-6 leading-snug">
          QuizMeFy <br /> helps you study smarter through personalized quizzes
        </p>
        <Link
          to={"/dashboard"}
          className="border border-white rounded-full px-18 py-3 text-white font-semibold hover:bg-white/40 hover:border-white transition text-xl cursor-pointer z-10 mt-2"
        >
          Get Started
        </Link>
      </div>
    </>
  );
}
