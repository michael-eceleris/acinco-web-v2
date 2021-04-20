import React from "react";
import Banner from "../layout/layoutMakeYourPlan/Banner";
import HowToActive from "../layout/layoutMakeYourPlan/HowToActive";
import Coverages from "../layout/layoutMakeYourPlan/Coverages";
import Recoveries from "../layout/layoutMakeYourPlan/RecoveriesExclutions";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
const MakeYourPlan = () => {
  return (
    <>
      <Helmet>
        <title>Arma tu Plan | Acinco</title>
        <meta
          name="description"
          content="Este plan va dirigido a los usuarios Tigo que tengan activo un Arma tu plan superior a $74.900 y activen la casilla de Protección Móvil en Smart App."
        />
      </Helmet>
      <Banner />
      <HowToActive />
      <Coverages />
      <Recoveries />
      <ContactUs />
      <Footer />
    </>
  );
};

export default MakeYourPlan;
