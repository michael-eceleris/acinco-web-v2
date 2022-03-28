import React from 'react';
import Banner from '../layout/layoutCamaraComercio/Banner';
import StepperComponent from '../layout/layoutCamaraComercio/stepper/StepperComponent';
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const CamaraComercioPage = () => {
  return (
    <>
      <Helmet>
        <title>Camara Comercio | Acinco</title>
        <meta 
          name='description'
          content=''
        />
      </Helmet>
      <Banner />
      <StepperComponent />
      <ContactUs />
      <Footer />
    </>
  )
}

export default CamaraComercioPage;