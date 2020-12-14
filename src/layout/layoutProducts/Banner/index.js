import React from "react";
import TeamWork from "../../../assets/icons/teamwork.svg";

const Banner = () => {
  return (
    <section className="p-0 bg-white">
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
            <div className="mt-1 ml--10">
              <h1 className="font-weight-light mb-4 fs--60">
                <span className="font-weight-medium ">Bienvenido</span>
              </h1>
              <p className="lead mb--0">
                PORQUE TENERLO TE COSTO ESFUERZO, ASEGURARLO TE CUESTA POCO!
              </p>
              <p className="lead">
                Aquí puedes conocer los productos de seguros que tenemos
                disponibles para ti como usuario de Colombia Móvil/Tigo. Podrás
                obtener información, hacer tu reclamación o consultar el estado
                de la misma.
              </p>
            </div>
          </div>
          <div
            className="col-12 col-md-6 order-2 order-md-1 pb-5"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            <img
              width="600"
              height="400"
              className="img-fluid lazy "
              src={TeamWork}
              alt="logo_productos"
            />
          </div>
        </div>
      </div>
      <i className="arrow arrow-lg arrow-bottom arrow-center border-primary"></i>
    </section>
  );
};

export default Banner;
