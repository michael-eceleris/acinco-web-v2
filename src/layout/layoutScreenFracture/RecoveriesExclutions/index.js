import React from "react";

const Recoveries = () => {
  return (
    <>
      <section className="pt-2 pb-2 bg-theme-color-light">
        <div className="container p-0">
          <div className="row d-flex flex-wrap align-items-center my-7">
            <div className="col-12 col-lg-6 mb-5">
              <hr className="h--1 bg-primary w--50" />
              <h2 className="h1 text-primary mb-4">Recobros</h2>
              <p className="lead mb-5">
                Si te ocurre alguna circunstancia en la que la pantalla del
                dispositivo se vea afectaba, ten en cuenta esto esta
                información.
              </p>
            </div>
            <div className="col-12 col-lg-6 mb-5">
              <div className="row gutters-md gutters-xs--xs">
                <div className="col-6 jarallax">
                  <div className="bg-white shadow-xs rounded-xl p-4 mb-4 mb-2-xs bg-primary-soft-hover transition-bg-ease-150 text-decoration-none text-gray-800">
                    <i className="fas fa-dollar-sign fs--45"></i>
                    <h3 className="h5 py-3 ">¿Cuánto pagarás?</h3>
                    <p>
                      El seguro te cubre el 70% del valor del arreglo, por lo
                      tanto solo pagas el 30% del mismo.
                    </p>
                  </div>
                </div>

                <div className="col-6 jarallax">
                  <div className="bg-white shadow-xs rounded-xl p-4 mb-4 mb-2-xs bg-success-soft-hover transition-bg-ease-150 text-decoration-none text-gray-800">
                    <i className="fi fi-emoji-shocked fs--45"></i>
                    <h3 className="h5 py-3">¿A qué equivale ese porcentaje?</h3>
                    <p>
                      El porcentaje corresponde a los montos cubiertos por la
                      aseguradora, es decir, el recobro será calculado sobre el
                      precio de reparación de la pantalla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row d-flex flex-wrap align-items-center my-7">
            <div className="order-lg-2 col-12 col-lg-6 mb-5">
              <hr className="h--1 bg-success w--50" />
              <h2 className="h1 text-success mb-4">Exclusiones</h2>
              <p className="lead mb-5">
                Existen algunas exclusiones en las cuales no son aplicables a
                las coberturas de este plan, ten en cuenta esto antes de
                realizar su reclamación y recobro respectivo.
              </p>
            </div>
            <div className="order-lg-1 col-12 col-lg-6 mb-5">
              <div className="row gutters-md gutters-xs--xs">
                <div className="col-6 jarallax">
                  <div className="bg-white shadow-xs rounded-xl p-4 mb-4 mb-2-xs bg-primary-soft-hover transition-bg-ease-150 text-decoration-none text-gray-800">
                    <i className="fi fi-smartphone fs--45"></i>
                    <h3 className="h5 py-3">Daño al equipo móvil</h3>
                    <p>
                      Daño ocasianado intencionalmente por el usuario, y mala
                      manipulación en puntos no autorizados.
                    </p>
                  </div>
                </div>

                <div className="col-6 jarallax">
                  <div className="bg-white shadow-xs rounded-xl p-4 mb-4 mb-2-xs bg-success-soft-hover transition-bg-ease-150 text-decoration-none text-gray-800">
                    <i className="fi fi-round-info-full fs--45"></i>
                    <h3 className="h5 py-3">Daños</h3>
                    <p>
                      Este plan no cubre daños en la tarjeta principal, módulos
                      de pantalla, daños por humedad, además de esto no se
                      repara ni se cambia baterías, memorias, cargadores, etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg
          class="absolute-full z-index-0"
          width="100%"
          height="100%"
          viewBox="0 0 1920 90"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(0,0,0,.01)"
            d="M1920,0C1217,0,120.574,155.567,0,0v90h1920V0z"
          ></path>
        </svg>
      </section>
    </>
  );
};

export default Recoveries;
