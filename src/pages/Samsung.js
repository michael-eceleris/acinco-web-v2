import React from "react";
import Banner from "../layout/layoutSamsung/Banner";
import Coverages from "../layout/layoutSamsung/Coverages";
import Recoveries from "../layout/layoutSamsung/RecoveriesAndExclutions";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
const Samsung = () => {
  return (
    <>
      <Helmet>
        <title>Samsung | Acinco</title>
        <meta
          name="description"
          content="Este seguro aplica para todos los usuarios que adquieran su equipo en tiendas especializadas de Samsung."
        />
      </Helmet>
      <Banner />
      <Coverages />
      <Recoveries />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Samsung;
