import React from "react";
import Banner from "../layout/layoutTotalProtection/Banner";
import HowToActive from "../components/HowToActive";
import Coverages from "../layout/layoutTotalProtection/Coverages";
import Recoveries from "../layout/layoutTotalProtection/RecoveriesExclutions";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
const TotalProtection = () => {
  return (
    <>
      <Helmet>
        <title>Protección Total | Acinco</title>
        <meta
          name="description"
          content="Este seguro aplica para clientes que adquieren los planes Pospago 5.3, plan Bussiness Combo B2B Voz y SMS Nacional ilimitado +35GB y/o Combo B2B Voz y SMS Nacional ilimitado +50GB, sin ningún costo adicional"
        />
      </Helmet>
      <Banner />
      <HowToActive plan="all" />
      <Coverages />
      <Recoveries />
      <ContactUs />
      <Footer />
    </>
  );
};

export default TotalProtection;
