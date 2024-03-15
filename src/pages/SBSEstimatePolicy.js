import React from "react";
import { Helmet } from "react-helmet";

import IconTab from "../assets/images/favicon_sbs.png";
import Navbar from "../layout/layoutSBSEstimate/Navbar";
import Footer from "../layout/layoutBlankClaims/Footer";
import ContactUs from "../layout/layoutBlankClaims/ContactUs";
import StepperComponent from "../layout/layoutSBSEstimate/stepper/StepperComponent";
import DataSBS from "../data/newClients.json";
import Banner from "../layout/layoutSBSEstimate/Banner";

const SBSEstimatePage = () => {
  const {
    customerService: { company, contact },
    colorPrimary,
    allUppercase,
    contactUsBackground,
    consumerAdvocate,
    webPage,
    urlWebPage,
    bannerBackground,
  } = DataSBS[0];
  return (
    <>
      <Helmet>
        <title>Cotizador | SBS </title>
        <meta name='description' content='' />
        <link rel='icon' href={IconTab} />
      </Helmet>
      <Navbar />
      <Banner bannerBackground={bannerBackground} />
      <StepperComponent />
      <ContactUs
        company={company}
        contact={contact}
        colorPrimary={colorPrimary}
        allUppercase={allUppercase}
        contactUsBackground={contactUsBackground}
        consumerAdvocate={consumerAdvocate}
        webPage={webPage}
        urlWebPage={urlWebPage}
      />
      <Footer colorPrimary={colorPrimary} />
    </>
  );
};

export default SBSEstimatePage;
