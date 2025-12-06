import React from "react";
import QuestionsAndTime from "./Dashboard/QuestionsAndTime.jsx";
import { Link } from "react-router";

export default function Starter() {
  return (
    <div className="w-screen h-screen flex  items-center justify-center bg-main text-white capitalize">
      <div className="w-[800px] py-18 border border-gray-400/10 rounded-3xl shadow-md bg-sec">
        <h1 className="text-7xl text-center ">🏫</h1>
        <h2 className="text-4xl text-center my-12">history</h2>
        <p className="text-md text-gray-500 text-center px-20 line-clamp-4">
          Dive into a world of quizzes and challenge your knowledge across
          various topics. Get started by exploring our quiz categories and test
          your skills!
        </p>
        <div className="flex justify-center my-12">
          <QuestionsAndTime questions={10} time={8} />
          <div className="px-4 text-green-400 bg-green-400/10 rounded-full px-12 py-2 ">
            easy
          </div>
        </div>

        <div className="w-3/4 mx-auto">
          <Link
            to={"/quiz"}
            className="block text-center px-12 py-4 rounded-2xl border border-teal-500 capitalize text-teal-500  text-xl hover:scale-105  duration-300 transition-all cursor-pointer"
          >
            <div className="flex  flex items-center justify-center space-x-3">
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
                class="lucide lucide-play-icon lucide-play"
              >
                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
              </svg>
              <p>Ready</p>
            </div>
          </Link>
          <Link
            to={"/dashboard"}
            className="block text-center px-12 py-4 rounded-2xl border border-sky-500 text-sky-500 duration-300 text-xl hover:scale-105  capitalize transition-all cursor-pointer mt-8"
          >
            <div className="flex  flex items-center justify-center space-x-3">
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
                class="lucide lucide-book-open-icon lucide-book-open"
              >
                <path d="M12 7v14" />
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
              </svg>
              <p>not yet </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
