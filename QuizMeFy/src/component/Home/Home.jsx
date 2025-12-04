import React from "react";
import LightPillar from "./LightPillar.jsx";
import Navbar from "../Navbar.jsx";
import HeroText from "./HeroText.jsx";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen relative">
        <div className="flex justify-center items-center h-full w-full flex-col relative overflow-hidden">
          <Navbar />
          <LightPillar />
          <HeroText />
        </div>
      </div>
    </>
  );
}
