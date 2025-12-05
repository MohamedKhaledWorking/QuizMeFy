import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import QuizHeader from "./QuizHeader.jsx";
import Loading from "../Loading.jsx";
import QuizProgress from "./QuizProgress.jsx";
import ErrorMsg from "../ErrorMsg.jsx";
import Question from "./Question.jsx";
import Sidebar from "./Sidebar.jsx";
import SubmitModel from "./SubmitModel.jsx";
import Result from "../Result/Result.jsx";

const initialState = {
  quiz: {},
  currentIdx: 0,
  status: "loading",
  errorMsg: "",
  selected: [],
  flagged: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "quizReceived":
      return { ...state, quiz: action.payload, status: "ready" };
    case "error":
      return { ...state, status: "error", errorMsg: action.payload };
    case "inc":
      return { ...state, currentIdx: state.currentIdx + 1 };
    case "dec":
      return { ...state, currentIdx: state.currentIdx - 1 };
    case "setCurrentIdx":
      return { ...state, currentIdx: action.payload };
    case "selectAnswer":
      const { questionIdx, answerIdx } = action.payload;
      const isExist = state.selected.find(
        (item) => item.questionIdx == questionIdx
      );
      return {
        ...state,
        selected: isExist
          ? state.selected.map((item) =>
              item.questionIdx == questionIdx ? action.payload : item
            )
          : [...state.selected, action.payload],
      };
    case "deSelectAnswer":
      return {
        ...state,
        selected: state.selected.filter(
          (item) => item.questionIdx !== action.payload.questionIdx
        ),
      };
    case "setFlagged":
      return { ...state, flagged: [...state.flagged, action.payload] };
    case "removeFlagged":
      return {
        ...state,
        flagged: state.flagged.filter((item) => item != action.payload),
      };
    case "retry":
      return { ...initialState, status: "quizReceived" , quiz: state.quiz};
    case "submitting":
      return { ...state, status: "submitting" };
    case "cancel":
      return { ...state, status: "quizReceived"};
    case "finished":
      return { ...state, status: "finished" };
  }
}

export default function Exam() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { quiz, status, currentIdx } = state;

  function getQuestions() {
    axios
      .get("http://localhost:3000/quiz")
      .then((res) => {
        return dispatch({ type: "quizReceived", payload: res.data });
      })
      .catch((err) => {
        return dispatch({ type: "error", payload: err });
      });
  }

  useEffect(() => {
    getQuestions();
  }, []);

  if (status == "error") {
    return <ErrorMsg ErrorMsg={state.errorMsg} />;
  }

  if (status == "loading") {
    return <Loading />;
  }

  if (status == "submitting") {
    return (
      <SubmitModel
        dispatch={dispatch}
        selected={state.selected.length}
        questions={quiz?.questions.length}
      />
    );
  }

  if (status == "finished") {
    return <Result dispatch={dispatch} selected={state.selected} quiz={quiz} />;
  }

  return (
    <div className="w-screen min-h-screen bg-main text-white capitalize">
      <div className="container mx-auto  h-full py-8">
        <QuizHeader quiz={quiz} />
        <div className="flex flex-col">
          <QuizProgress selected={state.selected} questions={quiz?.questions} />

          <div className="flex">
            {/* question section */}
            <Question
              quiz={quiz}
              key={currentIdx}
              dispatch={dispatch}
              questionIdx={currentIdx}
              selected={state.selected}
              flagged={state.flagged}
            />

            {/* sidebar section */}
            <Sidebar
              dispatch={dispatch}
              length={quiz?.length}
              flagged={state.flagged}
              questionIdx={currentIdx}
              selected={state.selected}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
