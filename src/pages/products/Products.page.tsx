import React from "react";
import { Helmet } from "react-helmet";

import Img1 from "../../assets/images/products_banner.png";

import Banner from "../../components/banner/Banner";
import Footer from "../../components/Footer/Footer";
import ProductsComponent from "./components/products.component";

const ProductsPage = () => {
  return (
    <>
      <Helmet>
        <title>Productos | Acinco </title>
        <meta
          name="description"
          content="Conoce sobre los productos de seguros que administramos."
        />
      </Helmet>
      <Banner
        title={
          <h1 className="text-5xl font-semibold text-textPrimary">
            Nuestros productos
          </h1>
        }
        paragraph={
          <p className="mt-5 text-2xl text-textBlack">
            Conoce sobre los productos de seguros que administramos.
          </p>
        }
        sectionImages={
          <div className=" hidden h-full md:block xl:-ml-3 xl:w-9/12 2xl:w-10/12">
            <img src={Img1} className="h-auto max-w-full" alt="banner_img_1" />
          </div>
        }
        classNameContainer="pt-24 pb-5 md:py-40 md:pb-24 md:px-24"
      />
      <ProductsComponent />
      <Footer />
    </>
  );
};

export default ProductsPage;
