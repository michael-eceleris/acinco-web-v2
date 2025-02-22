import React from "react";
import PhoneRepair from "../../../assets/images/protect.png";

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
              className="col-12 col-md-6 order-2 order-md-1 pb-5 pl-md-5 pt-md-4"
              data-aos="fade-in"
              data-aos-delay="0"
            >
              <div className="mt-2 ml--10">
                <h1 className="font-weight-light mb-4 h3-md mb-lg-0 mb-xl-4 mb-md-4">
                  <span className="font-weight-medium">
                    Fractura de Pantalla
                  </span>
                </h1>
                <p className="lead mb--0 h6-md">
                  Este seguro aplica para clientes que adquieran los planes
                  Pospago 5.2, Bancolombia Crédito o Bussiness Combo B2B Voz y
                  SMS Nacional Ilimitado + 12GB o combos.
                </p>
                <p className="fs--14 mb-0">
                  * Beneficio otorgado por Tigo hasta el 07 de Enero de 2021.
                </p>
                <p className="fs--14">* Aplican términos y condiciones.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 order-2 order-md-1 d-middle show2">
              <img
                width="250"
                className="img-fluid lazy "
                src={PhoneRepair}
                alt="logo_fractura_de_pantalla"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
