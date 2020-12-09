import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/componentsHome/Banner";
import SectionService from "../components/componentsHome/SectionServices";
import ProductsHome from "../components/componentsHome/ProductsHome";
import OurExperience from "../components/componentsHome/OurExperience";
import OurClients from "../components/OurClients";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer"
import TeamWork from '../assets/icons/teamwork.svg';
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
}
 
export default Home;