import React from 'react';
import { Link } from "react-router-dom";
import SmartPhone from "../../../assets/icons/telefono-inteligente.svg";
import PhoneRepair from "../../../assets/images/phone-repair-icon.png";
import MobileSecure from "../../../assets/images/mobile-secure.png";
import LogoSamgung from "../../../assets/icons/samsung.svg";
import LogoAxaColpatria from "../../../assets/icons/logo-axa-colpatria.png";

const ProductsHome = () => {
  return ( 
    <section>
        <div className="container">
          <h2 className="h1 text-center mb-2">Nuestro Productos</h2>
          <div className="row mt-4">
            <div className="col-12 col-lg-6 my-5">
              <div className="h-100 bg-white shadow-md rounded">
                <div className=" px-4 pb-5 pt-4">
                  <div className="row d-flex flex-wrap align-items-center">
                    <div className="order-2 order-md-1 col-12 col-md-6">
                      <h2 className="h3 mb-4 font-weight-normal text-center">
                        <span className="d-block-xs">Pospago 5.3 - Protección Total</span>
                      </h2>
                      <p className="lead text-justify">
                        Este plan te cubre en caso de Hurto Calificado, Hurto Simple, Daño Total Accidental y Fractura de Pantalla en caso de accidente.
                      </p>
                    </div>
                    <div className="order-1 order-md-2 col-12 col-md-6">
                      <div className="d-middle">
                        <img src={MobileSecure} width="250px"/>
                      </div>
                      <div className="mt-4 mr-auto ml-auto d-middle">
                        <Link className="btn btn-success btn-pill btn-soft">
                          Ver Más
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 my-5">
              <div className="h-100 bg-white shadow-md rounded">
                <div className=" px-4 pb-5 pt-4">
                  <div className="row d-flex flex-wrap align-items-center">
                    <div className="order-2 order-md-1 col-12 col-md-6">
                      <h2 className="h3 mb-4 font-weight-normal text-center">
                        <span className="d-block-xs">Postpago 5.2 - Fractura de Pantalla</span>
                      </h2>
                      <p className="lead text-justify">
                        Este plan te cubre la reparación de tu pantalla en caso de accidente.
                      </p>
                    </div>
                    <div className="order-1 order-md-2 col-12 col-md-6">
                      <div className="d-middle">
                        <img src={PhoneRepair} width="250px"/>
                      </div>
                      <div className="mt-4 mr-auto ml-auto d-middle">
                        <Link className="btn btn-success btn-pill btn-soft">
                          Ver Más
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 my-5">
              <div className="h-100 bg-white shadow-md rounded">
                <div className=" px-4 pb-5 pt-4">
                  <div className="row d-flex flex-wrap align-items-center">
                    <div className="order-2 order-md-1 col-12 col-md-6 mt-7">
                      <h2 className="h3 mb-4 font-weight-normal text-center">
                        <span className="d-block-xs">Arma tu plan - Smart APP</span>
                      </h2>
                      <p className="lead text-justify">
                        Este plan te cubre en caso de hurto calificado, hurto simple y daño total accidental.
                      </p>
                    </div>
                    <div className="order-1 order-md-2 col-12 col-md-6 mt-4">
                      <img src={SmartPhone} />
                      <div className=" mt-4 mr-auto ml-auto d-middle">
                        <Link className="btn btn-success btn-pill btn-soft">
                          Ver Más
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 my-5">
              <div className="h-100 bg-white shadow-md rounded">
                <div className=" px-4 pb-5 pt-4">
                  <div className="row d-flex flex-wrap align-items-center">
                    <div className="order-2 order-md-1 col-12 col-md-6">
                      <h2 className="h3 mb-4 font-weight-normal text-center">
                        <span className="d-block-xs">Seguro por Gama</span>
                      </h2>
                      <p className="lead text-justify">
                        Proteja su telefono celular en caso de hurto y daño total accidental, con nuestro producto de seguros por gamas a nivel nacional en Tigo. El producto de seguro más competitivo del mercado, indemnizando al usuario con equipos totalmente nuevos.
                      </p>
                    </div>
                    <div className="order-1 order-md-2 col-12 col-md-6">
                      <div className="d-middle">
                        <img src={LogoAxaColpatria} width="250px"/>
                      </div>
                      <div className="mt-4 mr-auto ml-auto d-middle">
                        <Link className="btn btn-success btn-pill btn-soft">
                          Ver Más
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 my-5">
              <div className="h-100 bg-white shadow-md rounded">
                <div className=" px-4 pb-5 pt-4">
                  <div className="row d-flex flex-wrap align-items-center">
                    <div className="order-2 order-md-1 col-12 col-md-6">
                      <h2 className="h3 mb-4 font-weight-normal text-center">
                        <span className="d-block-xs">Samsung</span>
                      </h2>
                      <p className="lead text-justify">
                        Este producto cubre la reparación de la pantalla en caso de fractura/rotura por accidente. Esta dirigido a todos los usuarios que adquieren su equipo en tiendas especializadas de Samsung, para el caso de Samsung Galaxy Fold cuenta adicionalmente con 1 año de Garantía Extendida.
                      </p>
                    </div>
                    <div className="order-1 order-md-2 col-12 col-md-6 " >
                      <img src={LogoSamgung} />
                      <div className="mt-4 mr-auto ml-auto d-middle">
                        <Link className="btn btn-success btn-pill btn-soft">
                          Ver Más
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
   );
}
 
export default ProductsHome;