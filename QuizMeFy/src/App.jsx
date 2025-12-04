import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar.jsx";
import Home from "./component/Home/Home.jsx";
import Layout from "./component/Layout.jsx";

// FIXED IMPORT
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
