import React, { useState } from "react";
import HistoryCard from "./HistoryCard.jsx";

export default function HistoryList() {
  const [history, setHistory] = useState([
    {
      id: "history-1",
      categoryId: "math",
      categoryTitle: "Mathematics",
      categoryIcon: "🧮",
      score: 80,
      totalQuestions: 10,
      difficulty: "Medium",
      completedAt: new Date("2024-01-24"),
    },
    {
      id: "history-2",
      categoryId: "science",
      categoryTitle: "Science",
      categoryIcon: "🔬",
      score: 90,
      totalQuestions: 10,
      difficulty: "Medium",
      completedAt: new Date("2024-01-23"),
    },
    {
      id: "history-3",
      categoryId: "history",
      categoryTitle: "History",
      categoryIcon: "🏛️",
      score: 70,
      totalQuestions: 10,
      difficulty: "Easy",
      completedAt: new Date("2024-01-22"),
    },
    {
      id: "history-4",
      categoryId: "geography",
      categoryTitle: "Geography",
      categoryIcon: "🌍",
      score: 100,
      totalQuestions: 10,
      difficulty: "Easy",
      completedAt: new Date("2024-01-21"),
    },
  ]);
  return (
    <div className="">
      {history?.map((item) => {
        return <HistoryCard item={item} />;
      })}
    </div>
  );
}
