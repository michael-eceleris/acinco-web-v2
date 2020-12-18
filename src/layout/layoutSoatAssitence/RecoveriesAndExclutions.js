import React from "react";
import Dollar from "../../assets/icons/dollar-sign-solid.svg";
const Recoveries = () => {
  return (
    <>
      <section className="pt-2 pb-2 bg-theme-color-light ">
        <div className="container p-0">
          <div className="row d-flex flex-wrap align-items-center my-7 ">
            <div className="col-12 col-lg-6 mb-5">
              <h2 className="h1 text-primary mb-4 text-center">Recobros</h2>
              <p className="lead mb-5">
                Si te ocurre alguna circunstancia en la que la pantalla del
                dispositivo se vea afectaba, ten en cuenta esto esta
                información.
              </p>
            </div>
            <div className="col-12 col-lg-6 mb-5">
              <div className="row gutters-md gutters-xs--xs">
                <div className="col-6 jarallax">
                  <div className="bg-white shadow-xs rounded-xl p-4 mb-4 mb-2-xs bg-primary-soft-hover transition-bg-ease-150 text-decoration-none text-gray-800 h-100">
                    <div className="text-center pt-3 m-0">
                      <img src={Dollar} height="50" alt="signo_pesos" />
                    </div>
                    <h3 className="h5 py-3 mt-3 text-center ">
                      ¿Cuánto pagarás?
                    </h3>
                    <p className="pt-3 text-justify">
                      El seguro te cubre el 65% del valor del dispositivo, por
                      lo tanto solo pagas el 35% del mismo.
                    </p>
                  </div>
                </div>

                <div className="col-6 jarallax">
                  <div className="bg-white shadow-xs rounded-xl p-4 mb-4 mb-2-xs bg-success-soft-hover transition-bg-ease-150 text-decoration-none text-gray-800 h-100">
                    <div className="text-center m-0 p-0">
                      <i className="fi fi-emoji-shocked fs--45"></i>
                    </div>
                    <h3 className="h5 py-3 text-center">
                      ¿A qué equivale ese porcentaje?
                    </h3>
                    <p className="text-justify">
                      El porcentaje corresponde a los montos cubiertos por la
                      aseguradora, es decir, el recobro será calculado sobre el
                      precio de reparación de la pantalla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-2 pb-2 bg-theme-color-custom-purple">
        <div className="container p-0">
          <div className="row d-flex flex-wrap align-items-center my-7">
            <div className="order-lg-2 col-12 col-lg-6 mb-5">
              <h2 className="h1 text-success mb-4 text-center">Exclusiones</h2>
              <p className="lead mb-5">
                Existen algunas exclusiones en las cuales no son aplicables a
                las coberturas de este plan, ten en cuenta esto antes de
                realizar su reclamación y recobro respectivo.
              </p>
            </div>
            <div className="order-lg-1 col-12 col-lg-6 mb-5">
              <div className="row gutters-md gutters-xs--xs">
                <div className="col-6 jarallax">
                  <div className="bg-white shadow-xs rounded-xl p-4 mb-4 mb-2-xs bg-primary-soft-hover transition-bg-ease-150 text-decoration-none text-gray-800 h-100">
                    <div className="text-center p-0 m-0">
                      <i className="fi fi-smartphone fs--45"></i>
                    </div>
                    <h3 className="h5 py-3 text-center">
                      Daño al equipo móvil
                    </h3>
                    <p className="text-justify">
                      Daño al equipo móvil por consecuencia de terceros, debido
                      a la mala manipulación del mismo, y al desgaste natural
                      que tiene este debido al uso.
                    </p>
                  </div>
                </div>

                <div className="col-6 jarallax">
                  <div className="bg-white shadow-xs rounded-xl p-4 mb-4 mb-2-xs bg-success-soft-hover transition-bg-ease-150 text-decoration-none text-gray-800 h-100">
                    <div className="text-center p-0 m-0">
                      <i className="fi fi-round-info-full fs--45"></i>
                    </div>
                    <h3 className="h5 py-3 text-center">Fraude</h3>
                    <p className="text-justify">
                      Pérdidas por fraudes o actos deshonestos de terceros,
                      tales como clonación o similares, entre otras.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recoveries;
