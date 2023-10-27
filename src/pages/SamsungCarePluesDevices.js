import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../layout/layoutSamsungCarePlusDevices/Banner";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Plans from "../layout/layoutSamsungCarePlusDevices/Plans";
import Coverages from "../layout/layoutSamsungCarePlusDevices/Coverages";
import Recoveries from "../layout/layoutSamsungCarePlusDevices/RecoveriesAndExclutions";
import UseSecureSection from "../layout/layoutSamsungCarePlusDevices/UseSecureSection";
import NavbarSamsungCarePlus from "../layout/layoutClaimsSamsungCarePlus/Navbar";

const SamsungCarePlusDevices = () => {
  return (
    <>
      <Helmet>
        <title>Samsung Care + Dispositivos Movíles | Acinco</title>
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
      <ContactUs />
      <Footer />
    </>
  );
};

export default SamsungCarePlusDevices;
