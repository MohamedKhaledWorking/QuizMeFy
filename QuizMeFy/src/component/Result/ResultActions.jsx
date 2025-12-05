import { House, LayoutDashboard, RotateCcw } from "lucide-react";
import React from "react";
import { Link } from "react-router";

export default function ResultActions({ dispatch }) {
  return (
    <div className="flex items-center w-full">
      <div className="w-1/3 px-4">
        <button
          onClick={() => dispatch({ type: "retry" })}
          className="w-full flex items-center justify-center  py-3  rounded-xl border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white duration-300  block cursor-pointer capitalize font-bold text-lg"
        >
          <RotateCcw /> <p className="ml-4">retry</p>
        </button>
      </div>
      <div className="w-1/3 px-4">
        <Link
          to="/"
          className="w-full  py-3  flex items-center justify-center rounded-xl border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white duration-300  block cursor-pointer capitalize font-bold text-lg"
        >
          <House />
          <p className="ml-4">home</p>
        </Link>
      </div>
      <div className="w-1/3 px-4">
        <Link
          to="/dashboard"
          className="w-full  py-3  flex items-center justify-center rounded-xl border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white duration-300  block cursor-pointer capitalize font-bold text-lg"
        >
          <LayoutDashboard /> <p className="ml-4">dashboard</p>
        </Link>
      </div>
    </div>
  );
}
