import React from "react";

import HomePage from "../../pages/home/Home.page";
import AboutUsPage from "../../pages/aboutus/AboutUs.page";
import ProductsPage from "../../pages/products/Products.page";
import ClaimsPage from "../../pages/claims/Claims.page";

const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "nosotros",
    component: AboutUsPage,
    exact: true,
  },
  {
    path: "productos",
    component: ProductsPage,
    exact: true,
  },
  {
    path: "tramites-y-reclamaciones",
    component: ClaimsPage,
    exact: true,
  },
];

export default routes;
