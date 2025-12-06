import React from "react";
import HistoryList from "./HistoryList.jsx";

export default function History() {
  return (
    <div className="border border-gray-400/20 bg-sec px-4 py-6 rounded-lg mt-8">
      <div className="flex items-center space-x-3 text-sky-500 mb-8">
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
          class="lucide lucide-history-icon lucide-history"
        >
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <path d="M12 7v5l4 2" />
        </svg>{" "}
        <p className="text-2xl font-bold">history</p>
      </div>
      <HistoryList />
    </div>
  );
}
