import React from "react";

import HomePage from "../../pages/home/Home.page";
import AboutUsPage from "../../pages/aboutus/AboutUs.page";
import ProductsPage from "../../pages/products/Products.page";

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
  {
    path: "products",
    component: ProductsPage,
    exact: true,
  },
];

export default routes;
