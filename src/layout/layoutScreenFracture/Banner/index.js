import React from "react";
import PhoneRepair from "../../../assets/icons/phone-repair-icon.svg";

const Banner = () => {
  return (
    <>
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
              <div className="mt-5 ml--10">
                <h1 className="font-weight-light mb-4">
                  <span className="font-weight-medium">
                    Fractura de Pantalla
                  </span>
                </h1>
                <p className="lead mb--0">
                  Este producto cubre la reparación de la pantalla en caso de
                  rotura por acccidente. Este seguro aplica para clientes que
                  adquieran los planes Pospago 5.2, Bancolombia Crédito o
                  Bussiness Combo B2B Voz y SMS Nacional Ilimitado + 12GB o
                  combos.
                </p>
                <p className="fs--14">Aplican términos y condiciones.</p>
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
                src={PhoneRepair}
                alt="image"
              />
            </div>
          </div>
        </div>
        <i className="arrow arrow-lg arrow-bottom arrow-center border-primary pb-0 "></i>
      </section>
    </>
  );
};

export default Banner;
