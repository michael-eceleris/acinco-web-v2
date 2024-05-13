import React from "react";

import Img1 from "../../../assets/images/independence_about_us.png";
import Img2 from "../../../assets/images/leads_about_us.png";
import Img3 from "../../../assets/images/alliance_about_us.png";

const InfoSection = () => {
  return (
    <section className="flex w-full justify-center p-0">
      <div className="container my-32 w-full py-10 xl:px-32 2xl:px-20">
        <div className="grid grid-cols-3 gap-10">
          <div>
            <img src={Img1} alt="independence_img" />
            <h2 className="my-5 text-3xl font-bold text-textSecondary">
              Independencia
            </h2>
            <p className="mb-5 text-xl text-textBlack">
              Desarrollamos uno de los primeros sistemas independientes para la
              suscripción e indemnización de dispositivos móviles en Colombia.
            </p>
            <p className="text-xl text-textBlack">
              Este hito nos ha permitido establecer exitosos programas de
              seguros con nuestras aseguradoras aliadas.
            </p>
          </div>
          <div>
            <img src={Img2} alt="alliance_img" />
            <h2 className="my-5 text-3xl font-bold text-textSecondary">
              Alianzas
            </h2>
            <p className="text-xl text-textBlack">
              Ofrecemos, a través de nuestras aliadas, productos directos de
              seguros y asistencias para propietarios de dispositivos móviles,
              incluyendo dispositivos usados, algo innovador en el país.
            </p>
          </div>
          <div>
            <img src={Img3} alt="leads_img" />
            <h2 className="my-5 text-3xl font-bold text-textSecondary">
              Liderazgo
            </h2>
            <p className="mb-5 text-xl text-textBlack">
              Lideramos la gestión de seguros para celulares y garantías
              extendidas para OEMs en Colombia.
            </p>
            <p className="text-xl text-textBlack">
              Facilitamos la venta de estos seguros a través de diferentes
              canales como plataformas digitales de bancos y puntos de venta
              físicos de financiadoras de dispositivos móviles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
