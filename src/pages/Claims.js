import React, { useContext, useEffect } from "react";
import FormContext from "../context/form/formContext";
import Banner from "../layout/layoutClaims/Banner";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Layout from "../layout/Layout";
import Modal from "../components/Modal";
import ClaimsMobile from "../layout/layoutClaims/ClaimsMobile";
import ModalInfo from "../components/Modal/infoRequired";
import { Helmet } from "react-helmet";
const Claims = () => {
  const formContext = useContext(FormContext);
  const { showModal } = formContext;
  useEffect(() => {}, [showModal]);
  return (
    <>
      <Helmet>
        <title>Reclamaciones | Acinco</title>
        <meta
          name="description"
          content="¡Es muy simple! Con tan solo 5 sencillos pasos puedes realizar tu reclamación."
        />
      </Helmet>
      {showModal ? <Modal /> : null}
      <ModalInfo />
      <Banner />
      <ClaimsMobile />
      <Layout />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Claims;
