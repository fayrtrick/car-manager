import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Accueil } from "./pages";
import { PrivateLayout } from "./components/Layout/PrivateLayout";

const root = document.getElementById("root") as HTMLElement;

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
    ]
  },
]);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
