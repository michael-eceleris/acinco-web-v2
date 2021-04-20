import React from "react";
import Banner from "../layout/layoutHome/Banner";
import SectionService from "../layout/layoutHome/SectionServices";
import ProductsHome from "../layout/layoutHome/ProductsHome";
import OurExperience from "../layout/layoutHome/OurExperience";
import OurClients from "../components/OurClients";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Acinco</title>
        <meta
          name="description"
          content="Aquí conocerás y podrás obtener información sobre los productos que tenemos disponibles para ti."
        />
      </Helmet>
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
