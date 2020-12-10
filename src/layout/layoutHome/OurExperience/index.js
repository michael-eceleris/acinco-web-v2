import React from "react";
import IconMap from "../../../assets/icons/mapa.svg";
import IconPadlock from "../../../assets/icons/candado.svg";
import IconTigo from "../../../assets/icons/Logo_Tigo_blanco.svg";

const OurExperience = () => {
  return (
    <section className="bg-gradient-success opacity-7 pb--300">
      <div className="container">
        <h2 className="h1 text-center text-white mb-4">Nuestra Experiencia</h2>
        <div className="row col-border text-center">
          <div
            className="col-6 col-md-4 py-5"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-offset="0"
          >
            <div className="text-white w--180 h--180 mb-4 border border-light rounded-circle shadow-md d-inline-flex justify-content-center align-items-center">
              <img src={IconMap} />
            </div>
            <p className="max-w-250 mx-auto fs--20 text-white">
              En Colombia contamos con una experiencia exitosa a través de
              productos de seguros por más de 10 años.
            </p>
          </div>
          <div
            className="col-6 col-md-4 py-5"
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-offset="0"
          >
            <div className="text-white w--180 h--180 mb-4 border border-light rounded-circle shadow-md d-inline-flex justify-content-center align-items-center">
              <img src={IconPadlock} width="130" height="130" />
            </div>
            <p className="max-w-250 mx-auto fs--20 text-white">
              Desarrollamos un Software anti fraude y correlacional, el cual se
              ha perfeccionado con una curva de aprendizaje de más de 10 años
              que ha permitido su evolución a SEGURO + ASISTENCIA + PRIVILEGIOS
              garantizando un sistema de reposición con altísimo control de
              fraude.
            </p>
          </div>
          <div
            className="col-12 col-md-4 py-5 border-top-xs br-0-xs bl-0-xs"
            data-aos="fade-up"
            data-aos-delay="450"
            data-aos-offset="0"
          >
            <div className="text-white w--180 h--180 mb-4 border border-light rounded-circle shadow-md d-inline-flex justify-content-center align-items-center">
              <img
                src={IconTigo}
                width="130"
                height="140"
                style={{ fill: "white" }}
              />
            </div>
            <p className="max-w-250 mx-auto fs--20 text-white">
              Trabajamos actualmente con Colombia Móvil diferentes productos de
              seguros, dando cobertura a más de 200.000 usuarios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExperience;
