import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import FormContext from "../context/form/formContext";
import Banner from "../layout/layoutClaims/Banner";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Layout from "../layout/Layout";
import Modal from "../components/Modal";
import ClaimsMobile from "../layout/layoutClaims/ClaimsMobile";
import NavbarSamsungCarePlus from "../layout/layoutClaimsSamsungCarePlus/Navbar";
import ModalInfo from "../layout/layoutClaimsSamsungCarePlus/InfoRequired";

const ClaimsSamsungCarePlus = () => {
  const formContext = useContext(FormContext);
  const { showModal } = formContext;
  useEffect(() => {}, [showModal]);
  return (
    <>
      <Helmet>
        <title>Reclamaciones Samsung Care + | Acinco</title>
        <meta
          name='description'
          content='¡Es muy simple! Con tan solo 5 sencillos pasos puedes realizar tu reclamación.'
        />
      </Helmet>
      <NavbarSamsungCarePlus />
      {showModal ? <Modal /> : null}
      <ModalInfo clientName={"SamsungCarePlus"} />
      <Banner />
      <ClaimsMobile />
      <Layout />
      <ContactUs />
      <Footer />
    </>
  );
};

export default ClaimsSamsungCarePlus;
