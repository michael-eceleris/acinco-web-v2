import React from "react";
import TeamWork from "../../../assets/icons/teamwork.svg";
import ProductToure from "../../../assets/icons/product_tour.svg";

const Banner = () => {
  return (
    <section className="p-0 ">
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
      <div className="container min-h-75vh d-middle pt-5 ">
        <div className="row text-center-xs">
          <div
            className="col-12 col-md-6 order-2 order-md-1 pb-5"
            data-aos="fade-in"
            data-aos-delay="0"
          >
            <div className="mb-5 mt-7 ">
              <h1 className="font-weight-medium mb-4">Nuestros Productos</h1>
              <p className="lead">
                Aquí conoceras nuestros productos que tenemos disponibles para
                ti como usuario de Colombia Móvil/Tigo.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 order-1 order-md-2 pb-5">
            <img
              height="600"
              width="600"
              className="img-fluid "
              src={TeamWork}
              alt="logo_productos"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
