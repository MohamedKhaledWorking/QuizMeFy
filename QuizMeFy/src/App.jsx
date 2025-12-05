import "./App.css";
import Home from "./component/Home/Home.jsx";
import Layout from "./component/Layout.jsx";
import Starter from "./component/Starter.jsx";
import Dashboard from "./component/Dashboard/Dashboard.jsx";
import Exam from "./component/Question/Exam.jsx";
import Notfound from "./component/Notfound.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Result from "./component/Result/Result.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "start",
        element: <Starter />,
      },
      {
        path: "quiz",
        element: <Exam />,
      },
      {
        path: "result",
        element: <Result />,
      },
      {
        path: "*",
        element: <Notfound baseIntensity={0.2}>404</Notfound>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
