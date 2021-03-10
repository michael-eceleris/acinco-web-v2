import React from "react";
import styled from "styled-components";
import LogoHuawei from "../../assets/icons/huawei.svg";
import LogoSamgung from "../../assets/icons/samsung.svg";
import LogoTigo from "../../assets/icons/Logo_Tigo.svg";
import LogoAxaColpatria from "../../assets/icons/logo-axa-colpatria.svg";
import LogoTelefonicaTelecom from "../../assets/icons/telefonica_telecom_logo.svg";
import LogoTelefonicaData from "../../assets/icons/telefonica-data.svg";
import LogoEricsson from "../../assets/icons/ericsson-logo.svg";
import LogoAxaService from "../../assets/icons/axa-assistance.svg";

const H2 = styled.h2`
  display: inline-block;
  position: relative;
  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 80px;
    height: 0.2px;
    background-color: currentColor;
    top: 0.7em;
  }

  &::before {
    left: -95px;
  }

  &::after {
    right: -95px;
  }
  @media (max-width: 766px) {
    &::after,
    &::before {
      width: 0px;
    }
  }
`;

const OurClients = () => {
  return (
    <section className="bg-theme-color-light">
      <div className="container">
        <div className="mx-auto max-w-600 text-center">
          <H2 className="h3-xs lead fs--35 font-italic">Nuestros clientes</H2>
        </div>
        <div className="container z-index-1">
          <div className="mt-5 p-3 bg-white shadow-md rounded overflow-hidden">
            <div className="bg-white overflow-hidden">
              <div className="row row-grid mt--n1 ml--n1 mr--n1 mb--n1">
                <div className="h--150 col-6 col-md-3 d-flex align-items-center text-center">
                  <a href="#!" className="w-100">
                    <img
                      className="max-h-80 img-fluid ml-3 mr-3  lazy"
                      src={LogoHuawei}
                      alt="logo_huawei"
                    />
                  </a>
                </div>

                <div
                  className="h--150 col-6 col-md-3 d-flex align-items-center text-center"
                  data-aos="fade-in"
                  data-aos-delay="200"
                  data-aos-offset="0"
                >
                  <a href="#!" className="w-100">
                    <img
                      className="max-h-600 img-fluid ml-3 mr-3 max-w-180 lazy"
                      src={LogoSamgung}
                      alt="logo_samsung"
                    />
                  </a>
                </div>

                <div
                  className="h--150 col-6 col-md-3 d-flex align-items-center text-center"
                  data-aos="fade-in"
                  data-aos-delay="250"
                  data-aos-offset="0"
                >
                  <a href="#!" className="w-100">
                    <img
                      className="max-h-700 img-fluid pl-4 pr-4 lazy"
                      data-src="demo.files/svg/vendors/vendor_coinbase.svg"
                      src={LogoAxaColpatria}
                      alt="logo_axa_colpatria"
                    />
                  </a>
                </div>

                <div
                  className="h--150 col-6 col-md-3 d-flex align-items-center text-center"
                  data-aos="fade-in"
                  data-aos-delay="300"
                  data-aos-offset="0"
                >
                  <a href="#!" className="w-100">
                    <img
                      className="max-h-80 img-fluid ml-3 mr-3 max-w-120 lazy"
                      data-src="demo.files/svg/vendors/vendor_instagram.svg"
                      src={LogoTigo}
                      alt="logo_tigo"
                    />
                  </a>
                </div>

                <div
                  className="h--150 col-6 col-md-3 d-flex align-items-center text-center"
                  data-aos="fade-in"
                  data-aos-delay="350"
                  data-aos-offset="0"
                >
                  <a href="#!" className="w-100">
                    <img
                      className="max-h-120 img-fluid pl-4 pr-4 lazy"
                      data-src="demo.files/svg/vendors/vendor_pinterest.svg"
                      src={LogoAxaService}
                      alt="logo_axa_service"
                    />
                  </a>
                </div>

                <div
                  className="h--150 col-6 col-md-3 d-flex align-items-center text-center"
                  data-aos="fade-in"
                  data-aos-delay="400"
                  data-aos-offset="0"
                >
                  <a href="#!" className="w-100">
                    <img
                      className="max-h-600 img-fluid ml-3 r-3 max-w-180 lazy"
                      data-src="demo.files/svg/vendors/vendor_dribble.svg"
                      src={LogoTelefonicaTelecom}
                      alt="logo_telefonica_telecom"
                    />
                  </a>
                </div>

                <div
                  className="h--150 col-6 col-md-3 d-flex align-items-center text-center"
                  data-aos="fade-in"
                  data-aos-delay="450"
                  data-aos-offset="0"
                >
                  <a href="#!" className="w-100">
                    <img
                      className="max-h-600 img-fluid ml-3 mr-3 max-w-180 lazy"
                      src={LogoTelefonicaData}
                      alt="logo_telefonica_data"
                    />
                  </a>
                </div>

                <div
                  className="h--150 col-6 col-md-3 d-flex align-items-center text-center"
                  data-aos="fade-in"
                  data-aos-delay="500"
                  data-aos-offset="0"
                >
                  <a href="#!" className="w-100">
                    <img
                      className="max-h-600 img-fluid pl-4 pr-4 lazy"
                      src={LogoEricsson}
                      alt="logo_ericsson"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
