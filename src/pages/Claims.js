import React, { useContext, useEffect } from "react";
import FormContext from "../context/form/formContext";
import Banner from "../layout/layoutClaims/Banner";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Layout from "../layout/Layout";
import Modal from "../components/Modal";
const Claims = () => {
  const formContext = useContext(FormContext);
  const { showModal } = formContext;
  useEffect(() => {}, [showModal]);
  return (
    <>
      {showModal ? <Modal /> : null}
      <Banner />
      <Layout />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Claims;
