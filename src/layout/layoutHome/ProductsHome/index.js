import React from "react";
import { Link } from "react-router-dom";
import SmartPhone from "../../../assets/icons/telefono-inteligente.svg";
import PhoneRepair from "../../../assets/images/phone-repair-icon.png";
import MobileSecure from "../../../assets/images/mobile-secure.png";
import LogoSamgung from "../../../assets/icons/samsung.svg";
import LogoAxaColpatria from "../../../assets/icons/logo-axa-colpatria.png";

const ProductsHome = () => {
  return (
    <section className="bg-theme-color-light">
      <div className="container">
        <div className="text-center mb--100">
          <h1 className="font-weight-light mb-4">
            <span className="font-weight-medium">Productos</span>
          </h1>
        </div>
        <div className="bg-white pt-4 rounded overflow-hidden">
          <div className="row col-border">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card p-4 b-0 h-100">
                <div className="mt-3 mb-5">
                  <img height="100px" src={MobileSecure} alt="mobile" />
                </div>
                <h2 className="fs--18">Protección Total</h2>
                <div className="card-body pl-0 pr-0 text-gray-500">
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
                  <Link className="btn btn-primary  btn-block">
                    Conocer más{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card p-4 b-0 h-100 mt-1">
                <div className="mt-3 mb-5">
                  <img height="100px" src={SmartPhone} alt="mobile_2" />
                </div>

                <h2 className="fs--18">Arma tu Plan - Smart App </h2>

                <div className="card-body pl-0 pr-0 text-gray-500">
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

                  <hr className="mt-7" />

                  <Link className="btn btn-primary  btn-block">
                    Conocer más
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4 mb-4">
              <div className="card p-4 b-0 h-100">
                <div className="mt-3 mb-5">
                  <img height="100px" src={LogoSamgung} alt="samsung" />
                </div>

                <h2 className="fs--18">Samsung</h2>

                <div className="card-body pl-0 pr-0 text-gray-500">
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

                  <hr className="mt-7" />
                  <Link className="btn btn-primary  btn-block">
                    Conocer más
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <Link className="btn btn-secondary btn-soft">Ver Más Productos</Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsHome;
