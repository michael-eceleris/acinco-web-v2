import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../layout/layoutSamsungCarePlusElectro/Banner";
import Footer from "../components/Footer";
import Plans from "../layout/layoutSamsungCarePlusElectro/Plans";
import Coverages from "../layout/layoutSamsungCarePlusElectro/Coverages";
import Recoveries from "../layout/layoutSamsungCarePlusElectro/RecoveriesAndExclutions";
import UseSecureSection from "../layout/layoutSamsungCarePlusElectro/UseSecureSection";
import NavbarSamsungCarePlus from "../layout/layoutClaimsSamsungCarePlus/Navbar";
import ContactUsElectro from "../layout/layoutSamsungCarePlusElectro/ContactUs";

const SamsungCarePlusElectro = () => {
  return (
    <>
      <Helmet>
        <title>Samsung Care + Electrodoméstico | Acinco</title>
        <meta
          name='description'
          content='Este Seguro aplica para nuestros clientes que adquirieron
                  nuestro producto Samsung Care +'
        />
      </Helmet>
      <NavbarSamsungCarePlus />
      <Banner />
      <Plans />
      <Coverages />
      <Recoveries />
      <UseSecureSection />
      <ContactUsElectro />
      <Footer />
    </>
  );
};

export default SamsungCarePlusElectro;
