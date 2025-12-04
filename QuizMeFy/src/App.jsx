import "./App.css";
import Home from "./component/Home/Home.jsx";
import Layout from "./component/Layout.jsx";
import Starter from "./component/Starter.jsx";
import Dashboard from "./component/Dashboard/Dashboard.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
