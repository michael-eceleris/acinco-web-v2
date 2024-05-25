import React from "react";
import { Helmet } from "react-helmet";

import Img from "../../assets/images/claims_banner.png";

import Banner from "../../components/banner/Banner";
import Footer from "../../components/Footer/Footer";
import ClaimsComponent from "./components/Claims.component";

const ClaimsPage = () => {
  return (
    <>
      <Helmet>
        <title>Reclamaciones | Acinco </title>
        <meta
          name="description"
          content="¡Es muy simple! Con tan solo 5 sencillos pasos puedes realizar tu reclamación."
        />
      </Helmet>
      <Banner
        title={
          <h1 className="text-5xl font-semibold text-textPrimary">
            Reclamaciones
          </h1>
        }
        paragraph={
          <p className="mt-5 text-2xl text-textBlack">
            ¡Es muy simple! Con tan solo 5 sencillos pasos puedes realizar tu
            reclamación.
          </p>
        }
        sectionImages={
          <div className="h-full xl:-ml-3 xl:w-11/12 2xl:-ml-10 2xl:w-10/12">
            <img src={Img} className="h-auto max-w-full" alt="banner_img_1" />
          </div>
        }
        classNameContainer="py-40 pb-24  px-24"
      />
      <ClaimsComponent />
      <Footer />
    </>
  );
};

export default ClaimsPage;
