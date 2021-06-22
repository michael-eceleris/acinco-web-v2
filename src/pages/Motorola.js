import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../layout/layoutMotorola/Banner";
import Footer from "../components/Footer";
import Coverages from "../layout/layoutMotorola/Coverages";
import Recoveries from "../layout/layoutMotorola/RecoveriesAndExclutions";
import ContactUs from "../components/ContactUs";

const Motorola = () => {
  return (
    <>
      <Helmet>
        <title>Motorola | Acinco</title>
        <meta
          name='description'
          content='Este seguro va dirigido a los usuarios que compren su equipo + seguro o asistencia por medio de la pagina web de Motorola.'
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

export default Motorola;
