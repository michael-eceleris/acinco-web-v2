import React from "react";
import { Link } from "react-router-dom";
import SmartPhone from "../../../assets/icons/telefono-inteligente.svg";
import PhoneRepair from "../../../assets/icons/phone-repair-icon.svg";
import MobileSecure from "../../../assets/icons/mobile-secure.svg";
import LogoSamgung from "../../../assets/icons/samsung.svg";
import LogoAxaColpatria from "../../../assets/icons/logo-axa-colpatria.svg";
import SmartPhoneGamaAlta from "../../../assets/icons/mobile-payment.svg";

const ProductsHome = () => {
  return (
    <section className="bg-gray-200">
      <div className="container">
        <div className="text-center mb--100">
          <h1 className="font-weight-light mb-4">
            <span className="font-weight-medium">Nuestros Productos</span>
          </h1>
          <p className="lead">
            Te ofrecemos productos adecuados a lo que necesitas
          </p>
        </div>
        <div className="bg-white pt-4 rounded overflow-hidden">
          <div className="row col-border">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card p-4 b-0 h-100">
                <div className="mt-3 mb-5 d-middle">
                  <img height="120" src={MobileSecure} alt="mobile" />
                </div>
                <h4>Protección Total</h4>
                <div className="card-body pl-0 pr-0 text-gray-600">
                  <p className="lead fs--18">
                    Esta es la cobertura que te ofrece el plan Protección Total:
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
                  <div className="clearfix mb-2">
                    <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                      <i className="fi fi-check"></i>
                    </div>{" "}
                    Recobro hasta del 70%
                  </div>
                  <hr className="mt-6" />
                  <Link
                    className="btn btn-lg btn-primary mb-2"
                    to="/pospago-5-3"
                  >
                    Conocer más{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card p-4 b-0 h-100 mt-1">
                <div className="mt-3 mb-5 d-middle">
                  <img height="120" src={SmartPhone} alt="mobile_2" />
                </div>
                <h4>Arma tu Plan - Smart App </h4>

                <div className="card-body pl-0 pr-0 text-gray-600">
                  <p className="lead fs--18">
                    Puedes armar tu plan de acuerdo a tus necesidades, ten en
                    cuenta estas coberturas:
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

                  <div className="clearfix mb-2">
                    <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                      <i className="fi fi-check"></i>
                    </div>{" "}
                    Recobro hasta del 65%
                  </div>

                  <hr className="mt-6" />
                  <Link
                    className="btn btn-primary btn-lg "
                    to="/arma-tu-plan-smart-app"
                  >
                    Conocer más
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4 mb-4">
              <div className="card p-4 b-0 h-100">
                <div className="mt-3 mb-3 d-middle">
                  <img height="150" src={LogoSamgung} alt="samsung" />
                </div>
                <h4>Samsung</h4>
                <div className="card-body pl-0 pr-0 text-gray-600">
                  <p className="lead fs--18">
                    Tienes un celular samgung, mira estas coberturas que te
                    pueden ayudar:
                  </p>
                  <div className="clearfix mb-2">
                    <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                      <i className="fi fi-check"></i>
                    </div>{" "}
                    Te cubre Samsung Galaxy Fold
                  </div>

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

                  <div className="clearfix mb-2">
                    <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                      <i className="fi fi-check"></i>
                    </div>{" "}
                    Recobro hasta del 80%
                  </div>
                  <div className="clearfix mb-2">&nbsp;</div>

                  <hr className="mt-6" />
                  <Link className="btn btn-primary btn-lg" to="/samsung">
                    Conocer más
                  </Link>
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
                <div className="card-body pl-0 pr-0 text-gray-600">
                  <p className="lead fs--18">
                    Protege la pantalla de tu celular, mira estas coberturas:
                  </p>
                  <div className="clearfix mb-2">
                    <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                      <i className="fi fi-check"></i>
                    </div>{" "}
                    Reparación de Pantalla
                  </div>
                  <div className="clearfix mb-2">
                    <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                      <i className="fi fi-check"></i>
                    </div>{" "}
                    Te cubre solamente la pantalla
                  </div>
                  <div className="clearfix mb-2">
                    <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                      <i className="fi fi-check"></i>
                    </div>{" "}
                    Recobro hasta del 70%
                  </div>
                  <div className="clearfix mb-2">&nbsp;</div>

                  <hr className="mt-6" />
                  <Link className="btn btn-primary  btn-lg" to="/pospago-5-2">
                    Conocer más
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4 mb-4">
              <div className="card p-4 b-0 h-100">
                <div className="mt-3 mb-5 d-middle">
                  <img height="120" src={SmartPhoneGamaAlta} alt="samsung" />
                </div>
                <h4>Seguro por Gama</h4>
                <div className="card-body pl-0 pr-0 text-gray-600">
                  <p className="lead fs--18">
                    Se ajusta a las gama de tu celular, mira las cobertura que
                    trae
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

                  <div className="clearfix mb-2">
                    <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                      <i className="fi fi-check"></i>
                    </div>{" "}
                    Solo pagarás el 35% del evaluo
                  </div>

                  <hr className="mt-6" />
                  <Link className="btn btn-primary btn-lg" to="/seguro-gamas">
                    Conocer más
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4 mb-4">
              <div className="card p-4 b-0 h-100">
                <div className="mt-3 mb-5 d-middle">
                  <img height="120" src={LogoAxaColpatria} alt="samsung" />
                </div>

                <h4>SOAT Asistencia de Pantalla</h4>

                <div className="card-body pl-0 pr-0 text-gray-600">
                  <p className="lead fs--18">
                    Adquiriste el SOAT con AXA Colpatria Seguros, este plan es
                    ideal para ti, mira las coberturas que tiene
                  </p>
                  <div className="clearfix mb-2">
                    <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                      <i className="fi fi-check"></i>
                    </div>{" "}
                    Fractura de pantalla
                  </div>

                  <div className="clearfix mb-2">
                    <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                      <i className="fi fi-check"></i>
                    </div>{" "}
                    Te cubre solamente la pantalla
                  </div>

                  <div className="clearfix mb-2">
                    <div className="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start">
                      <i className="fi fi-check"></i>
                    </div>{" "}
                    Solo pagarás el 35% del arreglo
                  </div>

                  <hr className="mt-6" />
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
        <div className="text-center mt-5">
          <Link className="btn btn-secondary btn-soft" to="/nuestros-productos">
            Conoce más detalles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsHome;
