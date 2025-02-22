import React from "react";
import IconMap from "../../../assets/icons/mapa.svg";
import IconPadlock from "../../../assets/icons/candado.svg";

const OurExperience = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="text-center mb-6">
            <div className="mx-auto max-w-600">
              <h2 className="h3-xs">Nuestra experiencia </h2>

              <p className="lead">
                Contamos con experiencia amplia ofreciendo productos basados en
                seguros por más de 10 años, siendo así, una empresa con alta
                calidad de servicio.
              </p>
            </div>
          </div>

          <div className="row col-border text-center">
            <div
              className="col-12 col-md-6 py-5"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-offset="0"
            >
              <a
                href="fullajax-page-1.html"
                className="js-ajax d-block text-decoration-none text-dark transition-hover-top transition-all-ease-250"
              >
                <div className="bg-white w--120 h--120 mb-4 border border-light rounded-circle shadow-md d-inline-flex justify-content-center align-items-center">
                  <img src={IconMap} width="70" alt="logo_mapa_colombia" />
                </div>

                <h3 className="h4">Colombia</h3>

                <p className="max-w-250 mx-auto fs--16">
                  Más de 10 años de experiencia ofreciendo servicio de calidad
                  en Colombia.
                </p>
              </a>
            </div>

            <div
              className="col-12 col-md-6 py-5"
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-offset="0"
            >
              <a
                href="fullajax-page-2.html"
                className="js-ajax d-block text-decoration-none text-dark transition-hover-top transition-all-ease-250"
              >
                <div className="bg-white w--120 h--120 mb-4 border border-light rounded-circle shadow-md d-inline-flex justify-content-center align-items-center">
                  <img src={IconPadlock} width="70" alt="logo_candado" />
                </div>

                <h3 className="h4">AntiFraude</h3>

                <p className="max-w-250 mx-auto fs--16">
                  Desarrollamos un Software de calidad, antifraude y
                  correlacional en el cual hemos mejorado durante los más de 10
                  años de experiencia, garantizando un sistema con altísimo
                  control de fraude.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurExperience;
