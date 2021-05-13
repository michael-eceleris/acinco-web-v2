import React from "react";
import Banner from "../layout/layoutColsubsidio/Banner";
import Coverages from "../layout/layoutColsubsidio/Coverages";
import Recoveries from "../layout/layoutColsubsidio/RecoveriesExclutions";
import Contact from "../components/ContactUs";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const AssistenceColsubsidio = () => {
  return (
    <>
      <Helmet>
        <title>Asistencia Colsubsidio | Acinco</title>
        <meta
          name="description"
          content="Está dirigido a todos los usuarios Colsubsidio que adquieran su póliza hogar con Axa Colpatria Seguro."
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

export default AssistenceColsubsidio;
