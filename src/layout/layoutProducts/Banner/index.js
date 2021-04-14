import React from "react";
import LogoBanner from "../../../assets/images/home.png";

const Banner = () => {
  return (
    <section className="p-0">
      <svg
        className="absolute-full z-index-0 w-100 show2"
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
      <div className="container">
        <div className="min-h75vh d-middle pt-5 ">
          <div className="row text-center-xs">
            <div
              className="col-12 col-md-6 order-2 order-md-1 pb-5"
              data-aos="fade-in"
              data-aos-delay="0"
            >
              <div className="mb-5 ml--20 mt-4">
                <h1 className="font-weight-light mb-2">
                  Bienvenido a <br />
                  <span className="text-primary font-weight-medium">
                    Asegura tu celular
                  </span>
                </h1>
                <p className="lead h6-md">
                  Aquí conocerás nuestros productos que tenemos disponibles para
                  ti. Podrás obtener información y hacer tu reclamación.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2 d-middle show2">
              <img
                width="300"
                className="img-fluid lazy"
                src={LogoBanner}
                alt="logo_home"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
