import React from "react";
import Banner from "../layout/layoutSamsungCarePlusClaims/Banner";
import ClaimsStepper from "../layout/layoutSamsungCarePlusClaims/stepper/StepperComponent";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const SamsungCarePlusClaims = () => {
  return (
    <>
      <Helmet>
        <title>Samsung Care + | Reclamaciones</title>
        <meta
          name="description"
          content="¡Es muy simple! Con tan solo 5 sencillos pasos puedes realizar tu reclamación."
        />
      </Helmet>
      <Banner />
      <ClaimsStepper />
      <ContactUs />
      <Footer />
    </>
  );
};

export default SamsungCarePlusClaims;
