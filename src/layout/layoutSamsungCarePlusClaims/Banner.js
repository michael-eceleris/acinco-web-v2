import React from "react";
import Samsung from "../../assets/images/samsung_care_plus_banner.png";

const Banner = () => {
  return (
    <>
      <section className="p-0 bg-white ">
        <svg
          className="absolute-full z-index-0 show2 "
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
              className="col-12 col-md-6 order-2 order-md-1 pb-5 pl-md-5"
              data-aos="fade-in"
              data-aos-delay="0"
            >
              <div className="mt-4 ml--10">
                <h1 className="font-weight-light mb-4">
                  <span className="font-weight-medium">
                    Samsung Care + Reclamaciones
                  </span>
                </h1>
                <p className=" lead mb-5">
                  <span className="font-weight-medium "> ¡Es muy simple!</span>{" "}
                  Con tan solo 5 sencillos pasos puedes realizar tu reclamación.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 order-2 order-md-1 d-middle show2">
              <img
                width="250"
                className="img-fluid lazy"
                src={Samsung}
                alt="logo_samsung"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
