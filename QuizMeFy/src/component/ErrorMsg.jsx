import React from "react";
import { Link } from "react-router";

export default function ErrorMsg({ ErrorMsg }) {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-main">
      <div className="w-1/4 flex flex-col items-center space-y-4 bg-sec border border-rose-500/10 rounded-lg p-4 py-20">
        <h1 className="text-3xl font-bold text-rose-500">
          Something went wrong
        </h1>
        <p className="bg-rose-500/10 p-4 text-center text-rose-500 px-12 rounded-xl my-8">
          {ErrorMsg?.response?.data}
        </p>
        <p className="text-gray-500">Please try again later</p>

        <Link
          to="/dashboard"
          className="block text-teal-500 outline outline-teal-500 hover:bg-teal-500 hover:text-white duration-300 px-12 rounded-lg  py-2 w-1/2 text-center mx-auto"
        >
          return to home
        </Link>
        <button
          onClick={() => window.location.reload()}
          className="block text-sky-500 outline outline-sky-500 hover:bg-sky-500 hover:text-white duration-300 px-12 rounded-lg  py-2 w-1/2 cursor-pointer mx-auto"
        >
          retry
        </button>
      </div>
    </div>
  );
}
