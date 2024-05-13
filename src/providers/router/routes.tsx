import React from "react";

import HomePage from "../../pages/home/Home.page";
import AboutUsPage from "../../pages/aboutus/AboutUs.page";

const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "aboutus",
    component: AboutUsPage,
    exact: true,
  },
];

export default routes;
