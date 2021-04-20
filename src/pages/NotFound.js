import React from "react";
import Icon404 from "../assets/icons/page_not_found.svg";
import { Helmet } from "react-helmet";
const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Página no encontrada | Acinco </title>
        <meta name="description" content="Lo sentimos, esta página no existe" />
      </Helmet>
      <section>
        <div className="container text-center align-items-center justify-content-center d-flex  flex-column">
          <h2 className="mb--100 font-weight-normal">
            Lo sentimos, esta página no existe
          </h2>
          <div className="w-50 w-100-xs w-100-md">
            <img className="img-fluid" src={Icon404} alt="logo_404" />
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
