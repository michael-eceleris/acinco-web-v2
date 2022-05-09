import React from "react";
import { Helmet } from "react-helmet";

import Banner from "../layout/layoutPMP/Banner";
import Coverages from "../layout/layoutPMP/Coverage";
import SectionSignUp from "../layout/layoutPMP/SectionSignUp";
import Recoveries from "../layout/layoutPMP/RecoveriesExclutions";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const PMPPage = () => {
  return (
    <>
      <Helmet>
        <title>Protect My Phone | Acinco</title>
        <meta
          name='description'
          content='Está dirigido a todos los usuarios que adquieran su Protect My
                Phone en tiendas autorizadas.'
        />
      </Helmet>
      <Banner />
      <Coverages />
      <Recoveries />
      <SectionSignUp />
      <ContactUs />
      <Footer />
    </>
  );
};

export default PMPPage;
