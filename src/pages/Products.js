import React from "react";
import Banner from "../layout/layoutProducts/Banner";
import Product from "../layout/layoutProducts/Products";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
const Products = () => {
  return (
    <>
      <Helmet>
        <title>Asegura tu celular | Acinco </title>
        <meta
          name="description"
          content="Aquí conocerás nuestros productos que tenemos disponibles para ti. Podrás obtener información y hacer tu reclamación."
        />
      </Helmet>
      <Banner />
      <Product />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Products;
