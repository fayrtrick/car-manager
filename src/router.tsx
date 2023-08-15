import { createBrowserRouter } from "react-router-dom";
import { PrivateLayout } from "./components/Layout/PrivateLayout";
import { Home, VehiclesTest1, VehiclesTest2 } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "/accueil",
        element: <Home />,
      },
      {
        path: "/vehicles",
        children: [
          {
            path: "/vehicles/tset",
            element: <VehiclesTest1 />,
          },
          {
            path: "/vehicles/test",
            element: <VehiclesTest2 />,
          },
        ]
      },
    ]
  },
]);