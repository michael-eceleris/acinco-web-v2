import React from "react";
import Banner from "../layout/layoutScreenFracture/Banner";
import HowToActive from "../components/HowToActive";
import Coverages from "../layout/layoutScreenFracture/Coverages";
import RecoveriesExclutions from "../layout/layoutScreenFracture/RecoveriesExclutions";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
const ScreenFracture = () => {
  return (
    <>
      <Helmet>
        <title>Fractura de Pantalla | Acinco</title>
        <meta
          name="description"
          content="Este seguro aplica para clientes que adquieran los planes Pospago 5.2, Bancolombia Crédito o Bussiness Combo B2B Voz y SMS Nacional Ilimitado + 12GB o combos."
        />
      </Helmet>
      <Banner />
      <HowToActive />
      <Coverages />
      <RecoveriesExclutions />
      <ContactUs />
      <Footer />
    </>
  );
};

export default ScreenFracture;
