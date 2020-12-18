import React from "react";
import Banner from "../layout/layoutSamsung/Banner";
import Coverages from "../layout/layoutSamsung/Coverages";
import Recoveries from "../layout/layoutSamsung/RecoveriesAndExclutions";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Samsung = () => {
  return (
    <>
      <Banner />
      <Coverages />
      <Recoveries />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Samsung;
