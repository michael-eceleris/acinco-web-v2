import React from "react";
import Banner from "../layout/layoutSoatAssitence/Banner";
import Coverages from "../layout/layoutSoatAssitence/Coverages";
import Recoveries from "../layout/layoutSoatAssitence/RecoveriesAndExclutions";
import Contact from "../components/ContactUs";
import Footer from "../components/Footer";

const ScreenAssistenceSoat = () => {
  return (
    <>
      <Banner />
      <Coverages />
      <Recoveries />
      <Contact />
      <Footer />
    </>
  );
};

export default ScreenAssistenceSoat;
