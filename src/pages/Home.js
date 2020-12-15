import React from "react";
import Banner from "../layout/layoutHome/Banner";
import SectionService from "../layout/layoutHome/SectionServices";
import ProductsHome from "../layout/layoutHome/ProductsHome";
import OurExperience from "../layout/layoutHome/OurExperience";
import OurClients from "../components/OurClients";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <SectionService />
      <ProductsHome />
      <OurExperience />
      <OurClients />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
