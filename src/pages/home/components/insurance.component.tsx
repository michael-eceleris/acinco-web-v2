import React from "react";

import LogoPartner1 from "../../../assets/images/axa_white_black.png";
import LogoPartner2 from "../../../assets/images/cardif_white_black.png";
import LogoPartner3 from "../../../assets/images/sbs_white_black.png";
const InsurranceSection = () => {
  return (
    <>
      <section className="flex w-full justify-center p-0">
        <div className="container w-full px-2 py-20 md:px-20">
          <div className="rounded-xl bg-gray py-14">
            <h1 className="mb-10 text-center text-4xl font-bold">
              <span className="text-textSecondary">Acompañamos</span> el cuidado
              de tus dispositivos
            </h1>
            <div className="grid grid-cols-1 items-center justify-center gap-10 md:grid-cols-3">
              <div className="mx-auto w-2/3 ">
                <h4 className="text-center text-5xl font-medium md:text-6xl">
                  1,3M+
                </h4>
                <p className="text-center text-lg font-normal">
                  Reclamaciones atendidas
                </p>
              </div>
              <div className="mx-auto w-2/3 ">
                <h4 className="text-center text-5xl font-medium md:text-6xl">
                  80K+
                </h4>
                <p className="text-center text-lg font-normal">
                  Órdenes de verficación de estado de celulares
                </p>
              </div>
              <div className="mx-auto w-2/3 ">
                <h4 className="text-center text-5xl font-medium md:text-6xl">
                  20+
                </h4>
                <p className="text-center text-lg font-normal">
                  Años acompañando clientes privados y públicos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full justify-center p-0">
        <div className="container w-full px-20 py-20">
          <h2 className="mb-20 text-center text-4xl font-bold md:mx-40 2xl:mx-56">
            Gestionamos seguros respaldados por las aseguradoras{" "}
            <span className="text-textSecondary">
              más destacadas del mercado
            </span>
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center justify-center">
              <img src={LogoPartner1} alt="partner_logo_1" />
            </div>
            <div className="flex items-center justify-center">
              <img src={LogoPartner2} alt="partner_logo_2" />
            </div>
            <div className="flex items-center justify-center">
              <img src={LogoPartner3} alt="partner_logo_3" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InsurranceSection;
