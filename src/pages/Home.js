import React from "react";
import { Link } from "react-router-dom";
import Banner from "../layout/layoutHome/Banner";
import SectionService from "../layout/layoutHome/SectionServices";
import ProductsHome from "../layout/layoutHome/ProductsHome";
import OurExperience from "../layout/layoutHome/OurExperience";
import OurClients from "../components/OurClients";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import TeamWork from "../assets/icons/teamwork.svg";
import SuperHeroWork from "../assets/icons/superheroteamwork.svg";

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
