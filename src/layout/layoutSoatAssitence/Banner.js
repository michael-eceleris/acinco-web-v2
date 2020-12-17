import React from "react";
import LogoAxaColpatria from "../../assets/icons/logo-axa-colpatria.svg";

const Banner = () => {
  return (
    <section className="p-0 bg-white ">
      <svg
        className="absolute-full z-index-0 "
        width="100%"
        height="100%"
        viewBox="0 0 1920 90"
        preserveAspectRatio="none"
      >
        <path
          fill="rgba(0,50,114,1)"
          d="M1920,0C1217,0,120.574,155.567,0,0v90h1920V0z"
        ></path>
      </svg>
      <div className="container min-h75vh d-middle pt-5">
        <div className="row text-center-xs">
          <div
            className="col-12 col-md-6 order-2 order-md-1 pb-5"
            data-aos="fade-in"
            data-aos-delay="0"
          >
            <div className="mt-2 ml--10">
              <h1 className="font-weight-light mb-4">
                <span className="font-weight-medium">
                  SOAT Asistencia Pantalla
                </span>
              </h1>
              <p className="lead mb--0">
                Esta dirigido a todos los usuarios que adquieran su Soat con Axa
                Colpatria Seguro
              </p>
              <p className="fs--14">* Aplican términos y condiciones.</p>
            </div>
          </div>
          <div
            className="col-12 col-md-6 order-2 order-md-1 pb-5 d-middle"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            <img
              width="400"
              className="img-fluid lazy "
              src={LogoAxaColpatria}
              alt="logo_total_proteccion"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
