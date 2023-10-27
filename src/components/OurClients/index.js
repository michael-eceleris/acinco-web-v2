import React from "react";
import styled from "styled-components";
import LogoMotorola from "../../assets/images/Motorola_Logo_White.png";
import LogoSamgung from "../../assets/icons/samsung.svg";
import LogoAxaColpatria from "../../assets/icons/logo-axa-colpatria.svg";
import LogoAxaService from "../../assets/icons/axa-assistance.svg";
import LogoItau from "../../assets/images/itau.webp";
import LogoScotiabank from "../../assets/images/scotiabank.png";
import LogoCelya from "../../assets/images/celya.png";
import LogoBancolombia from "../../assets/images/bancolombia.png";

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
                      className="max-h-50 img-fluid ml-3 mr-3 lazy max-h-25-xs"
                      src={LogoMotorola}
                      alt="logo_motorola"
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
                      className="img-fluid ml-3 mr-3 lazy max-h-60-xs max-h-100"
                      data-src="demo.files/svg/vendors/vendor_instagram.svg"
                      src={LogoItau}
                      alt="logo_itau"
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
                      className="max-h-40 img-fluid ml-3 r-3 lazy max-h-20-xs"
                      data-src="demo.files/svg/vendors/vendor_dribble.svg"
                      src={LogoScotiabank}
                      alt="logo_scotiabank"
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
                      className="max-h-40 img-fluid ml-3 mr-3 lazy max-h-20-xs"
                      src={LogoCelya}
                      alt="logo_celya"
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
                      src={LogoBancolombia}
                      alt="logo_bancolombia"
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
