import React from "react";
import { Link } from "react-router-dom";
import PhoneRepair from "../../../assets/icons/phone-repair-icon.svg";
import MobileSecure from "../../../assets/icons/mobile-secure.svg";
import LogoSamgung from "../../../assets/icons/samsung.svg";
import LogoAxaColpatria from "../../../assets/icons/logo-axa-colpatria.svg";
import SmartPhoneGamaAlta from "../../../assets/icons/mobile-payment.svg";
import MotorolaIcon from "../../../assets/images/Motorola_Logo_White.png";

const ProductsHome = () => {
  return (
    <section className="bg-theme-color-light">
      <div className="container">
        <div className="text-center mb--100">
          <h1 className="font-weight-light mb-4">
            <span className="font-weight-medium">Nuestros Productos</span>
          </h1>
          <p className="lead">
            Te ofrecemos productos adecuados a lo que necesitas
          </p>
        </div>
        <div className="bg-white pt-4 rounded overflow-hidden mt--30 pl-lg-5 pr-lg-5 ml-lg-5 mr-lg-5">
          <div className="row col-border">
            <div className="col-12 col-md-12 col-lg-4 mb-4">
              <div className="card p-4 b-0 h-100">
                <div className="mt-3 mb-5 d-middle">
                  <img height="120" src={MobileSecure} alt="mobile" />
                </div>
                <h4>Protección Total</h4>
                <div className="card-body pl-0 pr-0 text-gray-600 justify-content-between d-flex flex-column">
                  <div className="h-75 mt-lg-3 mb-lg-5">
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
                      <Link className="btn btn-lg btn-primary mb-2" to="/">
                        Conocer más{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4 mb-4">
              <div className="card p-4 b-0 h-100">
                <div className="mt-3 mb-5 d-middle">
                  <img height="120" src={PhoneRepair} alt="samsung" />
                </div>
                <h4 style={{ whiteSpace: "nowrap" }}>Fractura de Pantalla</h4>
                <div className="card-body pl-0 pr-0 text-gray-600 justify-content-between d-flex flex-column">
                  <div className="h-75 mt-lg-2">
                    <p className="lead fs--18">
                      Protege la pantalla de tu celular, mira estas coberturas:
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
                    <hr className="mt-lg-4" />
                    <div className="d-flex justify-content-center">
                      <Link className="btn btn-primary btn-lg" to="/">
                        Conocer más
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4 mb-4">
              <div className="card p-4 b-0 h-100">
                <div className="mt-5 mb-6 d-middle">
                  <img width="200" src={MotorolaIcon} alt="motorola" />
                </div>
                <h4>Motorola</h4>
                <div className="card-body pl-0 pr-0 text-gray-600 justify-content-between d-flex flex-column">
                  <div className="h-75 mt-lg-2">
                    <p className="lead fs--18">
                      Si adquieres un equipo en la página web de Motorola,
                      tendrás la posibilidad de proteger tu equipo:
                    </p>
                    <div className="clearfix mb-2 d-flex">
                      <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                        <i className="fi fi-check"></i>
                      </div>
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
                      Garantía Extendida
                    </div>

                    <div className="clearfix mb-2 d-flex">
                      <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                        <i className="fi fi-check"></i>
                      </div>{" "}
                      Cobertura hasta del 65% de tu equipo
                    </div>
                  </div>
                  <div className="h-25">
                    <hr className="mt-lg-4" />
                    <div className="d-flex justify-content-center">
                      <Link className="btn btn-primary btn-lg" to="/motorola">
                        Conocer más
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white pt-4 rounded overflow-hidden mt--30 pl-lg-5 pr-lg-5 ml-lg-5 mr-lg-5">
          <div className="row col-border">
            <div className="col-12 col-md-12 col-lg-4 mb-4">
              <div className="card p-4 b-0 h-100">
                <div className="mt-3 mb-5 d-middle">
                  <img height="120" src={LogoAxaColpatria} alt="samsung" />
                </div>
                <h4>SOAT Asistencia de Pantalla</h4>
                <div className="card-body pl-0 pr-0 text-gray-600 justify-content-between d-flex flex-column">
                  <div className="h-75">
                    <p className="lead fs--18">
                      Si adquiriste el SOAT con AXA Colpatria Seguros, este plan
                      es ideal para ti, mira las coberturas que tiene:
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
                    <hr className="mt-lg-3" />
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
            <div className="col-12 col-md-12 col-lg-4 mb-4">
              <div className="card p-4 b-0 h-100">
                <div className="mt-3 mb-3 d-middle">
                  <img height="150" src={LogoSamgung} alt="samsung" />
                </div>
                <h4>Samsung</h4>
                <div className="card-body pl-0 pr-0 text-gray-600 justify-content-between d-flex flex-column">
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

            <div className="col-12 col-md-12 col-lg-4 mb-4">
              <div className="card p-4 b-0 h-100">
                <div className="mt-3 mb-5 d-middle">
                  <img height="120" src={SmartPhoneGamaAlta} alt="samsung" />
                </div>
                <h4>Seguro por Gama</h4>
                <div className="card-body pl-0 pr-0 text-gray-600 justify-content-between d-flex flex-column">
                  <div className="h-75">
                    <p className="lead fs--18">
                      Se ajusta a la gama de tu celular, mira las coberturas que
                      trae:
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
                      <Link className="btn btn-primary btn-lg" to="/">
                        Conocer más
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  <div className="text-center mt-5">
          <Link className="btn btn-secondary btn-soft" to="/nuestros-productos">
            Conoce más detalles
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default ProductsHome;
