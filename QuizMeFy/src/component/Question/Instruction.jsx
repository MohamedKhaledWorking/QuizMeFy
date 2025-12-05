import { Flag } from "lucide-react";
import React from "react";

export default function Instruction() {
  return (
    <div className="flex items-center space-x-8 ">
      <div className="flex mt-8 items-center text-sm">
        <div className="bg-green-500/20 border-green-500/30 border w-5 h-5 mr-2 rounded"></div>
        <p>answered</p>
      </div>
      <div className="flex mt-8 items-center text-sm">
        <div className="w-5 h-5 mr-2 rounded text-yellow-500">
          <Flag />
        </div>
        <p>Flagged</p>
      </div>
    </div>
  );
}
