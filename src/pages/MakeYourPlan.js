import React from "react";
import Banner from "../layout/layoutMakeYourPlan/Banner";
import HowToActive from "../layout/layoutMakeYourPlan/HowToActive";
import Coverages from "../layout/layoutMakeYourPlan/Coverages";
import Recoveries from "../layout/layoutMakeYourPlan/RecoveriesExclutions";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
const MakeYourPlan = () => {
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

export default MakeYourPlan;
