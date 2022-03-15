import React from "react";
import { useState } from "react";
import Navbar from "../layout/layoutBlankClaims/Navbar";
import { Helmet } from "react-helmet";

const NotFound = ({ client }) => {
  const {
    clientName,
    message,
    titleMessage,
    logo,
    icon,
    bannerNotFound,
  } = client;
  const [iconTab, setIconTab] = useState(null);
  const [ banner, setBanner ] = useState(null);

  import(`../assets/images/${icon}`).then((icon) => setIconTab(icon.default));
  import(`../assets/${bannerNotFound}`).then((banner)=> setBanner(banner.default));

  return (
    <>
      <Helmet>
        <title>{titleMessage} | {clientName} </title>
        <meta name="description" content={message} />
        <link rel="icon" href={iconTab} />
      </Helmet>
      <Navbar clientName={clientName} logo={logo} />
      <section>
        <div className="container text-center align-items-center justify-content-center d-flex  flex-column">
          <h2 className="mb--100 font-weight-normal">
            {message}
          </h2>
          <div className="w-50 w-100-xs w-100-md">
            <img className="img-fluid" src={banner} alt="logo_404" />
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;