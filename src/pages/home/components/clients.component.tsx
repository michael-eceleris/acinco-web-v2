import React from "react";

import LogoMotorola from "../../../assets/images/Motorola_Logo_White.png";
import LogoSamgung from "../../../assets/icons/samsung.svg";
import LogoItau from "../../../assets/images/itau.webp";
import LogoScotiabank from "../../../assets/images/scotiabank.png";
import LogoCelya from "../../../assets/images/celya.png";
import LogoBancolombia from "../../../assets/images/bancolombia.png";
import LogoTigo from "../../../assets/icons/Logo_Tigo.svg";

const ClientsSection = () => {
  return (
    <section className="flex w-full justify-center p-0">
      <div className="container w-full px-12 py-10">
        <div className="w-full text-center">
          <p className="text-2xl font-light">
            Hemos potencializado programas de seguros y asistencias para marcas
            como:
          </p>
        </div>
        <div className="grid grid-cols-7  items-center gap-4">
          <div className="flex justify-center">
            <img
              className="img-fluid lazy ml-3 mr-3 max-h-16"
              src={LogoTigo}
              alt="logo_tigo"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="img-fluid lazy ml-3 mr-3 max-h-36"
              src={LogoSamgung}
              alt="logo_samsung"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="img-fluid lazy ml-3 mr-3 max-h-14"
              src={LogoMotorola}
              alt="logo_motorola"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="img-fluid lazy ml-3 mr-3 max-h-14"
              src={LogoCelya}
              alt="logo_celya"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="img-fluid lazy ml-3 mr-3 max-h-16"
              src={LogoItau}
              alt="logo_itau"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="img-fluid lazy ml-3 mr-3 max-h-16"
              src={LogoScotiabank}
              alt="logo_scotiabank"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="img-fluid lazy ml-3 mr-3 max-h-48"
              src={LogoBancolombia}
              alt="logo_bancolombia"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
