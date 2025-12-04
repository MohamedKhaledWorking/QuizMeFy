import React, { useState } from "react";
import DashboardText from "./DashboardText.jsx";
import Daily from "./Daily.jsx";
import QuestionsAndTime from "./QuestionsAndTime.jsx";
import QuizCard from "./QuizCard.jsx";
import QuizList from "./QuizList.jsx";
import Stats from "./Stats.jsx";
import History from "./History.jsx";

export default function Dashboard() {
  const [quizzes, setQuizzes] = useState([
    {
      id: "math",
      title: "Mathematics",
      description: "Test your skills in algebra, geometry, and problem-solving",
      icon: "🧮",
      questionCount: 10,
      estimatedTimeMinutes: 8,
      difficulty: "Medium",
      color: "from-blue-500 to-cyan-500",
      completedQuizzes: 3,
    },
    {
      id: "science",
      title: "Science",
      description: "Explore physics, chemistry, and biology concepts",
      icon: "🔬",
      questionCount: 10,
      estimatedTimeMinutes: 10,
      difficulty: "Medium",
      color: "from-green-500 to-emerald-500",
      completedQuizzes: 2,
    },
    {
      id: "history",
      title: "History",
      description: "Journey through world events and civilizations",
      icon: "🏛️",
      questionCount: 10,
      estimatedTimeMinutes: 8,
      difficulty: "Easy",
      color: "from-amber-500 to-orange-500",
      completedQuizzes: 5,
    },
    {
      id: "geography",
      title: "Geography",
      description: "Discover countries, capitals, and natural wonders",
      icon: "🌍",
      questionCount: 10,
      estimatedTimeMinutes: 7,
      difficulty: "Easy",
      color: "from-teal-500 to-green-500",
      completedQuizzes: 1,
    },
    {
      id: "technology",
      title: "Technology",
      description: "Challenge yourself with tech and programming trivia",
      icon: "💻",
      questionCount: 10,
      estimatedTimeMinutes: 10,
      difficulty: "Hard",
      color: "from-purple-500 to-pink-500",
      completedQuizzes: 0,
    },
    {
      id: "literature",
      title: "Literature",
      description: "Test your knowledge of classic and modern works",
      icon: "📚",
      questionCount: 10,
      estimatedTimeMinutes: 9,
      difficulty: "Medium",
      color: "from-rose-500 to-red-500",
      completedQuizzes: 4,
    },
  ]);

  return (
    <div className="bg-main h-screen pt-20 px-4 capitalize">
      <div className="container  mx-auto flex flex-col items-center">
        <DashboardText />
        <div className="flex w-full h-96 mt-10">
          <div className="w-3/4  px-4 ">
            <Daily />
            <QuizList quizzes={quizzes} />
          </div>
          <div className="w-1/4  px-4">
            <Stats />
            <History />
          </div>
        </div>
      </div>
    </div>
  );
}
