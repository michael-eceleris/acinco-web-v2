import React from "react";
import { Link } from "react-router-dom";
import Dollar from "../../../assets/icons/dollar-sign-solid.svg";

const Recoveries = () => {
  return (
    <>
      <section className="pt-2 pb-2 bg-theme-color-light">
        <div className="container p-0">
          <div className="d-flex flex-wrap align-items-center my-7">
            <div className="col-12 col-lg-6 mb-5">
              <h2 className="h1 text-primary mb-4 text-center">Recobros</h2>
              <p className="lead mb-3">
                Si te ocurre un siniestro, o alguna circunstancia en la cual se
                vea aplicable alguna de las coberturas que trae el plan, ten en
                cuenta esta información.
              </p>
              <Link
                className="btn btn-link text-decoration-none"
                to="/arma-tu-plan-smart-app/terminos-condiciones"
              >
                Leer más
                <i className="fi fi-arrow-right-slim ml-2"></i>
              </Link>
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
                    <p className="text-justify hypens">
                      El porcentaje corresponde a los montos cubiertos por la
                      aseguradora, es decir, el recobro será calculado sobre el
                      precio de venta al momento de la indemnización.
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
          <div className="d-flex flex-wrap align-items-center my-7">
            <div className="order-lg-2 col-12 col-lg-6 mb-5">
              <h2 className="h1 text-success mb-4 text-center">Exclusiones</h2>
              <p className="lead mb-3">
                Existen algunas exclusiones en las cuales no son aplicables las
                coberturas de este plan, ten en cuenta esto antes de realizar su
                reclamación y recobro respectivo.
              </p>
              <a
                className="btn btn-link text-decoration-none"
                href="https://secureservercdn.net/104.238.68.130/j5f.49f.myftpupload.com/wp-content/uploads/2018/09/CLAUSULADO-POLIZA-34.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Leer más
                <i className="fi fi-arrow-right-slim ml-2"></i>
              </a>
            </div>
            <div className="order-lg-1 col-12 col-lg-6 mb-5">
              <div className="row gutters-md gutters-xs--xs">
                <div className="col-6 jarallax">
                  <div className="bg-white shadow-xs rounded-xl p-4 mb-4 mb-2-xs bg-primary-soft-hover transition-bg-ease-150 text-decoration-none text-gray-800 h-100">
                    <div className="text-center p-0 m-0">
                      <i className="fi fi-smartphone fs--45"></i>
                    </div>
                    <h3 className="h5 py-3 text-center">
                      Manipulación al equipo móvil
                    </h3>
                    <p className="text-justify">
                      Manipulación o reparaciones realizadas al equipo antes de
                      adquirir el seguro, de igual forma reparaciones realizadas
                      posteriormente en talleres no autorizados.
                    </p>
                  </div>
                </div>

                <div className="col-6 jarallax">
                  <div className="bg-white shadow-xs rounded-xl p-4 mb-4 mb-2-xs bg-success-soft-hover transition-bg-ease-150 text-decoration-none text-gray-800 h-100">
                    <div className="text-center p-0 m-0">
                      <i className="fi fi-round-info-full fs--45"></i>
                    </div>
                    <h3 className="h5 py-3 text-center">Abandono</h3>
                    <p className="text-justify">
                      Extravío, pérdida o abandono del celular por descuido del
                      propietario y/o usuario.
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
