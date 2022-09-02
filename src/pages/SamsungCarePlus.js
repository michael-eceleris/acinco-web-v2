import React from "react";
import Banner from "../layout/layoutSamsungCarePlus/Banner";
import Plans from "../layout/layoutSamsungCarePlus/Plans";
import Coverages from "../layout/layoutSamsungCarePlus/Coverages";
import Recoveries from "../layout/layoutSamsungCarePlus/RecoveriesAndExclutions";
import StepperComponent from "../layout/layoutSamsungCarePlus/stepper/StepperComponent";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
const SamsungCarePlus = () => {
  return (
    <>
      <Helmet>
        <title>Samsung Care + | Acinco</title>
        <meta
          name='description'
          content='Este Seguro aplica para nuestros clientes que adquirieron
                  nuestro producto Samsung Care +'
        />
      </Helmet>
      <Banner />
      <StepperComponent />
      <Plans />
      <Coverages />
      <Recoveries />
      <ContactUs />
      <Footer />
    </>
  );
};

export default SamsungCarePlus;
