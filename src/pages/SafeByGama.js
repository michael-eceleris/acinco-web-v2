import React from "react";
import Banner from "../layout/layoutSafeByGama/Banner";
import HowToActive from "../layout/layoutSafeByGama/HowToActive";
import Coverages from "../layout/layoutSafeByGama/Coverages";
import Recoveries from "../layout/layoutSafeByGama/RecoveriesAndExclutions";
import Contact from "../components/ContactUs";
import Footer from "../components/Footer";

const SafeByGama = () => {
  return (
    <>
      <Banner />
      <HowToActive />
      <Coverages />
      <Recoveries />
      <Contact />
      <Footer />
    </>
  );
};

export default SafeByGama;
