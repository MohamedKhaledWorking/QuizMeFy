import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar.jsx";
import Home from "./component/Home/Home.jsx";
import Layout from "./component/Layout.jsx";

// FIXED IMPORT
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./component/Dashborad/Dashboard.jsx";
import Starter from "./component/Starter.jsx";
import Loading from "./component/Loading.jsx";

function App() {
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
