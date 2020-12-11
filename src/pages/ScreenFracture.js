import React from "react";
import Banner from "../layout/layoutScreenFracture/Banner";
import HowToActive from "../components/HowToActive";
import Coverages from "../layout/layoutScreenFracture/Coverages";
import RecoveriesExclutions from "../layout/layoutScreenFracture/RecoveriesExclutions";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
const ScreenFracture = () => {
  return (
    <>
      <Banner />
      <HowToActive />
      <Coverages />
      <RecoveriesExclutions />
      <ContactUs />
      <Footer />
    </>
  );
};

export default ScreenFracture;
