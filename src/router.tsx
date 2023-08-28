import { createBrowserRouter } from "react-router-dom";
import { PrivateLayout } from "./components/Layout/PrivateLayout";
import { Home, Inventory } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
    ],
  },
]);
