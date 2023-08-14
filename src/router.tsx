import { createBrowserRouter } from "react-router-dom";
import { PrivateLayout } from "./components/Layout/PrivateLayout";
import { Home, Vehicles } from "./pages";

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
        path: "/vehicles",
        element: <Vehicles />,
      },
    ]
  },
]);