import React from "react";
import Banner from "../layout/layoutSafeByGama/Banner";
import HowToActive from "../layout/layoutSafeByGama/HowToActive";
import Coverages from "../layout/layoutSafeByGama/Coverages";
import Recoveries from "../layout/layoutSafeByGama/RecoveriesAndExclutions";
import Contact from "../components/ContactUs";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const SafeByGama = () => {
  return (
    <>
      <Helmet>
        <title>Seguro por Gama | Acinco</title>
        <meta
          name="description"
          content="Este servicio va dirigido a todos los usuarios que tengan un plan pospago en Tigo."
        />
      </Helmet>
      <Banner />
      <HowToActive />
      <Coverages />
      <Recoveries />
      <Contact />
      <Footer />
    </>
  );
};

export default SafeByGama;
