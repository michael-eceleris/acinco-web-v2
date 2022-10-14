import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../layout/layoutMotoEdge/Banner";
import Coverages from "../layout/layoutMotoEdge/Coverages";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import Recoveries from "../layout/layoutMotoEdge/Recoveries";
import StepperComponent from "../layout/layoutMotoEdge/stepper/StepperComponent";

const Motorola = () => {
  return (
    <>
      <Helmet>
        <title>Motorola Edge | Acinco</title>
        <meta
          name='description'
          content='Esta asistencia cubre la reparación de la pantalla en caso de fractura/rotura por accidente. Está dirigido a todos los usuarios que compren un Motorola Edge (Ultra, Fusión y Neo).'
        />
      </Helmet>
      <Banner />
      <StepperComponent />
      <Coverages />
      <Recoveries />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Motorola;
