import React, { lazy } from "react";

const Home = lazy(() => import("../../pages/home/Home"));

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
];

export default routes;
