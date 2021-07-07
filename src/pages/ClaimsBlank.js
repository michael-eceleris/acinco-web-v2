import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import FormContext from "../context/form/formContext";
import Navbar from "../layout/layoutBlankClaims/Navbar";
import Banner from "../layout/layoutBlankClaims/Banner";
import ContactUs from "../layout/layoutBlankClaims/ContactUs";
import Footer from "../layout/layoutBlankClaims/Footer";
import Layout from "../layout/Layout";
import Modal from "../components/Modal";
import ModalInfo from "../components/Modal/infoRequired";

const ClaimsBlank = ({ client }) => {
  const formContext = useContext(FormContext);
  const { showModal } = formContext;
  useEffect(() => {}, [showModal]);
  const { 
    clientName, 
    imageBanner, 
    colorPrimary, 
    colorSecundary,
    allUppercase,
    logo,
    icon,
    customerService: {
      company,
      attentionSchedule,
      contact
    } 
  } = client;
  sessionStorage.setItem('colorPrimary', colorPrimary);
  const [ iconTab, setIconTab ] = useState(null);
  import(`../assets/images/${icon}`).then((icon) => setIconTab(icon.default))
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
      <Navbar  clientName={clientName} logo={logo} />
      <Banner imageBanner={imageBanner} clientName={clientName} colorPrimary={colorPrimary} />
      {showModal ? <Modal /> : null}
      <ModalInfo />
      <Layout colorPrimary={colorPrimary} colorSecundary={colorSecundary} allUppercase={allUppercase}/>
      <ContactUs 
        colorPrimary={colorPrimary} 
        company={company} 
        attentionSchedule={attentionSchedule} 
        contact={contact}
        allUppercase={allUppercase}
      />
      <Footer colorPrimary={colorPrimary} />
    </>
  )
}

ClaimsBlank.propTypes = {
  client: PropTypes.object.isRequired
}

export default ClaimsBlank;