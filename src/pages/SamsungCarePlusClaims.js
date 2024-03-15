import React from "react";
import Banner from "../layout/layoutSamsungCarePlusClaims/Banner";
import ClaimsStepper from "../layout/layoutSamsungCarePlusClaims/stepper/StepperComponent";
import Footer from "../layout/layoutBlankClaims/Footer";
import { Helmet } from "react-helmet";
import Navbar from "../layout/layoutSamsungCarePlusClaims/Navbar";
import Logo from "../assets/images/samsung_care_plus.png";

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
      <Navbar clientName={"Samsung Care +"} logo={Logo} />
      <Banner />
      <ClaimsStepper />
      <Footer colorPrimary="#000000" />
    </>
  );
};

export default SamsungCarePlusClaims;
