import React from "react";
import Searching from "../../../assets/icons/searching.svg";

const Banner = () => {
  return (
    <section className="p-0 bg-primary">
      <svg
        className="position-absolute top-0 start-0 end-0"
        viewBox="0 480.469 1000 39.062"
      >
        <polygon
          fill="#FFFFFF"
          points="0,519.531 0,480.469 1000,480.469 "
        ></polygon>
      </svg>
      <div className="container min-h75vh d-middle pt-5">
        <div className="row text-center-xs">
          <div
            className="col-12 col-md-6 order-2 order-md-1 pb-5"
            data-aos="fade-in"
            data-aos-delay="0"
          >
            <div className="mt-7">
              <h1 className="font-weight-light mb-4">
                <span className="font-weight-medium text-white">
                  Reclamaciones
                </span>
              </h1>
            </div>
            <p className=" lead mb-5 text-white">
              <span className="font-weight-medium "> ¡Es muy simple!</span> Con
              tan solo 5 sencillos pasos puedes realizar reclamaciones.
            </p>
          </div>
          <div
            className="col-12 col-md-6 order-2 order-md-1 pb-5"
            data-aos="fade-in"
            data-aos-delay="0"
          >
            <img width="600" height="400" src={Searching} alt="image" />
          </div>
        </div>
      </div>
      <i className="arrow arrow-lg arrow-bottom arrow-center border-primary"></i>
    </section>
  );
};

export default Banner;
