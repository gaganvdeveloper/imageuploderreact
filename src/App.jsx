import React from "react";
import Dashboard from "./Components/Dashboard";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UploadProfile from "./Components/UploadProfile";
import AllProfiles from "./Components/AllProfiles";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "upload",
          element: <UploadProfile />,
        },
        {
          path: "all",
          element: <AllProfiles />,
        },
      ],
      errorElement: <h1>404 Error</h1>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
