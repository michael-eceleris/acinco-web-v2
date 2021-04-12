import React from "react";
import { Link } from "react-router-dom";
import SmartPhone from "../../../assets/icons/telefono-inteligente.svg";
import PhoneRepair from "../../../assets/icons/phone-repair-icon.svg";
import MobileSecure from "../../../assets/icons/mobile-secure.svg";
import LogoSamgung from "../../../assets/icons/samsung.svg";
import LogoAxaColpatria from "../../../assets/icons/logo-axa-colpatria.svg";
import SmartPhoneGamaAlta from "../../../assets/icons/mobile-payment.svg";

const Products = () => {
  return (
    <>
      <section className=" bg-gray-100">
        <div className="container">
          <h3 className="fs--50  mb-2 lead text-center mb-4">
            Nuestros Productos
          </h3>
          <p className="lead fs--20 mb-5">
            Puedes observar la diferentes coberturas que tenemos en cada uno de
            nuestros planes, para que asi mismo escogas el que más se adecue a
            tus necesidades.
          </p>
          <div className="bg-white pt-4 rounded overflow-hidden">
            <div className="row col-border">
              <div className="col-12 col-md-12 col-lg-4 mb-4">
                <div className="card p-4 b-0 h-100">
                  <div className="mt-3 mb-5 d-middle">
                    <img height="120" src={MobileSecure} alt="mobile" />
                  </div>
                  <h4>Protección Total</h4>
                  <div className="card-body pl-0 pr-0 text-gray-600 justify-content-between">
                    <div className="h-75">
                      <p className="lead fs--18">
                        Esta es la cobertura que te ofrece el plan Protección
                        Total:
                      </p>
                      <div className="clearfix mb-2">
                        <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                          <i className="fi fi-check"></i>
                        </div>{" "}
                        Hurto Calificado
                      </div>

                      <div className="clearfix mb-2">
                        <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                          <i className="fi fi-check"></i>
                        </div>{" "}
                        Hurto Simple
                      </div>

                      <div className="clearfix mb-2">
                        <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                          <i className="fi fi-check"></i>
                        </div>{" "}
                        Daño Total
                      </div>

                      <div className="clearfix mb-2">
                        <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                          <i className="fi fi-check"></i>
                        </div>{" "}
                        Reparación de Pantalla
                      </div>
                      <div className="clearfix mb-2 d-flex">
                        <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                          <i className="fi fi-check"></i>
                        </div>
                        Cobertura hasta del 70% de tu equipo
                      </div>
                    </div>
                    <div className="h-25">
                      <hr />
                      <div className="d-flex justify-content-center">
                        <Link
                          className="btn btn-lg btn-primary mb-2"
                          to="/pospago-5-3"
                        >
                          Conocer más{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-12 col-lg-4 mb-4">
                <div className="card p-4 b-0 h-100 mt-1">
                  <div className="mt-3 mb-5 d-middle">
                    <img height="120" src={SmartPhone} alt="mobile_2" />
                  </div>
                  <h4>Arma tu Plan - Smart App </h4>

                  <div className="card-body pl-0 pr-0 text-gray-600 justify-content-between">
                    <div className="h-75">
                      <p className="lead fs--18">
                        El plan Smart App, dirigido a clientes Tigo, te ofrece
                        las siguientes coberturas:
                      </p>
                      <div className="clearfix mb-2">
                        <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                          <i className="fi fi-check"></i>
                        </div>{" "}
                        Hurto Calificado
                      </div>

                      <div className="clearfix mb-2">
                        <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                          <i className="fi fi-check"></i>
                        </div>{" "}
                        Hurto Simple
                      </div>

                      <div className="clearfix mb-2">
                        <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                          <i className="fi fi-check"></i>
                        </div>{" "}
                        Daño Total Accidental
                      </div>

                      <div className="clearfix mb-2 d-flex">
                        <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                          <i className="fi fi-check"></i>
                        </div>{" "}
                        Cobertura hasta del 65% de tu equipo
                      </div>
                    </div>
                    <div className="h-25">
                      <hr />
                      <div className="d-flex justify-content-center">
                        <Link
                          className="btn btn-primary btn-lg"
                          to="/arma-tu-plan-smart-app"
                        >
                          Conocer más
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-12 col-lg-4 mb-4">
                <div className="card p-4 b-0 h-100">
                  <div className="mt-3 mb-3 d-middle">
                    <img height="150" src={LogoSamgung} alt="samsung" />
                  </div>
                  <h4>Samsung</h4>
                  <div className="card-body pl-0 pr-0 text-gray-600 justify-content-between">
                    <div className="h-75">
                      <p className="lead fs--18">
                        Tienes un celular Samsung (referencias seleccionadas),
                        mira estas coberturas que te pueden ayudar:
                      </p>
                      <div className="clearfix mb-2">
                        <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                          <i className="fi fi-check"></i>
                        </div>{" "}
                        Fractura de Pantalla
                      </div>

                      <div className="clearfix mb-2">
                        <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                          <i className="fi fi-check"></i>
                        </div>{" "}
                        Garantía Extendida
                      </div>

                      <div className="clearfix mb-2 d-flex">
                        <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                          <i className="fi fi-check"></i>
                        </div>{" "}
                        Cobertura hasta del 80% de tu equipo
                      </div>
                    </div>
                    <div className="h-25">
                      <hr />
                      <div className="d-flex justify-content-center">
                        <Link className="btn btn-primary btn-lg" to="/samsung">
                          Conocer más
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white pt-4 rounded overflow-hidden mt--30">
            <div className="row col-border">
              <div className="col-12 col-md-12 col-lg-4 mb-4">
                <div className="card p-4 b-0 h-100">
                  <div className="mt-3 mb-5 d-middle">
                    <img height="120" src={PhoneRepair} alt="samsung" />
                  </div>
                  <h4>Fractura de Pantalla</h4>
                  <div className="card-body pl-0 pr-0 text-gray-600 justify-content-between">
                    <div className="h-75">
                      <p className="lead fs--18">
                        Protege la pantalla de tu celular, mira estas
                        coberturas:
                      </p>
                      <div className="clearfix mb-2 d-flex">
                        <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                          <i className="fi fi-check"></i>
                        </div>
                        Reparación de Pantalla en caso de accidente
                      </div>
                      <div className="clearfix mb-2 d-flex">
                        <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                          <i className="fi fi-check"></i>
                        </div>{" "}
                        Cobertura hasta del 70% de tu equipo
                      </div>
                    </div>
                    <div className="h-25">
                      <hr />
                      <div className="d-flex justify-content-center">
                        <Link
                          className="btn btn-primary btn-lg"
                          to="/pospago-5-2"
                        >
                          Conocer más
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-4 mb-4">
                <div className="card p-4 b-0 h-100">
                  <div className="mt-3 mb-5 d-middle">
                    <img height="120" src={SmartPhoneGamaAlta} alt="samsung" />
                  </div>
                  <h4>Seguro por Gama</h4>
                  <div className="card-body pl-0 pr-0 text-gray-600 justify-content-between">
                    <div className="h-75">
                      <p className="lead fs--18">
                        Se ajusta a la gama de tu celular, mira las coberturas
                        que trae:
                      </p>
                      <div className="clearfix mb-2">
                        <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                          <i className="fi fi-check"></i>
                        </div>{" "}
                        Hurto Calificado
                      </div>

                      <div className="clearfix mb-2">
                        <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                          <i className="fi fi-check"></i>
                        </div>{" "}
                        Hurto Simple
                      </div>

                      <div className="clearfix mb-2">
                        <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                          <i className="fi fi-check"></i>
                        </div>{" "}
                        Daño Total Accidental
                      </div>

                      <div className="clearfix mb-2 d-flex">
                        <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                          <i className="fi fi-check"></i>
                        </div>{" "}
                        Cobertura hasta del 65% de tu equipo
                      </div>
                    </div>
                    <div className="h-25">
                      <hr />
                      <div className="d-flex justify-content-center">
                        <Link
                          className="btn btn-primary btn-lg"
                          to="/seguro-gamas"
                        >
                          Conocer más
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-4 mb-4">
                <div className="card p-4 b-0 h-100">
                  <div className="mt-3 mb-5 d-middle">
                    <img height="120" src={LogoAxaColpatria} alt="samsung" />
                  </div>

                  <h4>SOAT Asistencia de Pantalla</h4>

                  <div className="card-body pl-0 pr-0 text-gray-600 justify-content-between">
                    <div className="h-75">
                      <p className="lead fs--18">
                        Si adquiriste el SOAT con AXA Colpatria Seguros, este
                        plan es ideal para ti, mira las coberturas que tiene:
                      </p>
                      <div className="clearfix mb-2">
                        <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                          <i className="fi fi-check"></i>
                        </div>{" "}
                        Fractura de pantalla
                      </div>
                      <div className="clearfix mb-2 d-flex">
                        <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                          <i className="fi fi-check"></i>
                        </div>{" "}
                        Solo pagarás el 35% del arreglo
                      </div>
                    </div>
                    <div className="h-25">
                      <hr />
                      <div className="d-flex justify-content-center">
                        <Link
                          className="btn btn-primary btn-lg"
                          to="/soat-asistencia-de-pantalla"
                        >
                          Conocer más
                        </Link>
                      </div>
                    </div>
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

export default Products;
