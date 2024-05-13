import React from "react";
import { Helmet } from "react-helmet";

import Img1 from "../../assets/images/about_us.png";

import Banner from "../../components/banner/Banner";
import Footer from "../../components/Footer/Footer";
import InfoSection from "./components/info.component";

const AboutUsPage = () => {
  return (
    <>
      <Helmet>
        <title>Acinco | Nosotros</title>
        <meta
          name="description"
          content="Desde su fundación en 1998, A5 ha sido un actor importante en el mercado de telecomunicaciones. "
        />
      </Helmet>
      <Banner
        title={
          <h1 className="text-5xl font-semibold text-textPrimary">
            ¿Quiénes somos?
          </h1>
        }
        paragraph={
          <p className="mt-5 text-2xl text-textBlack">
            Desde su fundación en 1998, A5 ha sido un actor importante en el
            mercado de telecomunicaciones.
          </p>
        }
        sectionImages={
          <div className="h-full xl:-ml-3 xl:w-9/12 2xl:w-10/12">
            <img src={Img1} className="h-auto max-w-full" alt="banner_img_1" />
          </div>
        }
        classNameContainer="py-48 2xl:pb-50"
      />
      <InfoSection />
      <Footer />
    </>
  );
};

export default AboutUsPage;
