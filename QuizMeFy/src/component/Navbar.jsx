import React from "react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 mt-12 w-1/2 mx-auto rounded-[60px] backdrop-blur-md 
       backdrop-blur-3xl bg-white/5 border border-white/60 capitalize"
    >
      <div className="flex items-center justify-between flex-wrap p-6 px-9">
        <div className="text-white mr-6">
          <Link to={"/"} className="font-semibold text-xl tracking-tight">
            QuizMeFy
          </Link>
        </div>
        <div>
          <Link
            to={"/"}
            className="inline-block text-lg px-4 py-1 leading-none  rounded-full text-white mt-4 lg:mt-0 "
          >
            Get Started
          </Link>
          <Link
            to={"/dashboard"}
            className="ml-4 inline-block text-lg px-4 py-1 leading-none  rounded-full text-white mt-4 lg:mt-0 "
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
