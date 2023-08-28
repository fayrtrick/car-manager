import { lazy } from "react";

export const Home = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("./Home");
});
export const Inventory = lazy(() => import("./Inventory"));
