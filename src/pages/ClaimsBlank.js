import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Layout from "../layout/Layout";
import Modal from "../components/Modal";
import FormContext from "../context/form/formContext";
import Navbar from "../layout/layoutBlankClaims/Navbar";
import Banner from "../layout/layoutBlankClaims/Banner";
import Footer from "../layout/layoutBlankClaims/Footer";
import ModalInfo from "../components/Modal/infoRequired";
import ContactUs from "../layout/layoutBlankClaims/ContactUs";
import clienteAxios from "../config/axios";

const ClaimsBlank = ({ client }) => {
  const formContext = useContext(FormContext);
  const { showModal } = formContext;
  const { push } = useHistory();
  useEffect(() => {}, [showModal]);
  const {
    clientName,
    bannerBackground,
    contactUsBackground,
    colorPrimary,
    colorSecundary,
    allUppercase,
    logo,
    icon,
    customerService: { company, contact },
    claimsDoc,
    consumerAdvocate,
    privacyPolicyPersonalData,
    webPage,
    urlWebPage,
    isLoginValid,
    sponsorId,
    notFoundPage,
  } = client;
  sessionStorage.setItem("colorPrimary", colorPrimary);
  const [iconTab, setIconTab] = useState(null);
  import(`../assets/images/${icon}`).then((icon) => setIconTab(icon.default));
  useEffect( () => {
    const fetchData = async () => {
      if(isLoginValid){
        try {
          const response = await clienteAxios.get(`/api/v1/access?sponsor=${sponsorId}`);
          if(response){
            console.log('response', response)
          }
        } catch (error) {
          push(notFoundPage)
        }
      }
    }
    fetchData();
    //eslint-disable-next-line
  },[])
  return (
    <>
      <Helmet>
        <title>Reclamaciones | {clientName} </title>
        <meta
          name="description"
          content="¡Es muy simple! Con tan solo 5 sencillos pasos puedes realizar tu reclamación."
        />
        <link rel="icon" href={iconTab} />
      </Helmet>
      <Navbar clientName={clientName} logo={logo} />
      <Banner bannerBackground={bannerBackground} />
      {showModal ? <Modal /> : null}
      <ModalInfo clientName={clientName} claimsDoc={claimsDoc} />
      <Layout
        claimsDoc={claimsDoc}
        allUppercase={allUppercase}
        colorPrimary={colorPrimary}
        colorSecundary={colorSecundary}
        privacyPolicyPersonalData={privacyPolicyPersonalData}
      />
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

ClaimsBlank.propTypes = {
  client: PropTypes.object.isRequired,
};

export default ClaimsBlank;
