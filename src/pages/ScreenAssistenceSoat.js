import React from "react";
import Banner from "../layout/layoutSoatAssitence/Banner";
import Coverages from "../layout/layoutSoatAssitence/Coverages";
import Recoveries from "../layout/layoutSoatAssitence/RecoveriesAndExclutions";
import Contact from "../components/ContactUs";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
const ScreenAssistenceSoat = () => {
  return (
    <>
      <Helmet>
        <title>SOAT Asistencia Pantalla | Acinco</title>
        <meta
          name="description"
          content="Está dirigido a todos los usuarios que adquieran su SOAT con Axa Colpatria Seguro."
        />
      </Helmet>
      <Banner />
      <Coverages />
      <Recoveries />
      <Contact />
      <Footer />
    </>
  );
};

export default ScreenAssistenceSoat;
