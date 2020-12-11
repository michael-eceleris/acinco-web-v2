import React from "react";
import Banner from "../layout/layoutTotalProtection/Banner";
import HowToActive from "../components/HowToActive";
import Coverages from "../layout/layoutTotalProtection/Coverages";
import Recoveries from "../layout/layoutTotalProtection/RecoveriesExclutions";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
const TotalProtection = () => {
  return (
    <>
      <Banner />
      <HowToActive />
      <Coverages />
      <Recoveries />
      <ContactUs />
      <Footer />
    </>
  );
};

export default TotalProtection;
