import React from "react";
import { Helmet } from "react-helmet";

import Banner from "../layout/layoutPMP/Banner";
import StepperComponent from "../layout/layoutPMP/stepper/StepperComponent";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const PMPSignUpPage = () => {
  return (
    <>
      <Helmet>
        <title>Protect My Phone | Acinco</title>
      </Helmet>
      <Banner />
      <StepperComponent />
      <ContactUs />
      <Footer />
    </>
  );
};

export default PMPSignUpPage;
