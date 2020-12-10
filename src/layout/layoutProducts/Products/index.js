import React from 'react';
import { Link } from "react-router-dom";
import SmartPhone from "../../../assets/icons/telefono-inteligente.svg";
import PhoneRepair from "../../../assets/images/phone-repair-icon.png";
import MobileSecure from "../../../assets/images/mobile-secure.png";
import LogoSamgung from "../../../assets/icons/samsung.svg";
import LogoAxaColpatria from "../../../assets/icons/logo-axa-colpatria.png";

const Products = () => {
  return ( 
    <section>
        <div className="container">
          <h2 className="h1 text-center mb-2">Nuestros Productos</h2>
          <div className="row mt-4">
            <div className="col-12 col-lg-12 my-5">
              <div className="h-100 bg-white shadow-md rounded">
                <div className=" px-4 pb-5 pt-4">
                  <div className="row d-flex flex-wrap align-items-center">
                    <div className="col-4 col-md-3">
                      <div className="d-middle">
                        <img src={LogoSamgung} width="250px"/>
                      </div>
                    </div>
                    <div className="col-4 col-md-6">
                      <h1 className="mb-4 font-weight-normal">
                        <span className="d-block-xs">Samsung</span>
                      </h1>
                      <p className="lead text-justify">
                        Este producto cubre la reparación de la pantalla en caso de fractura/rotura por accidente. Está dirigido a todos los usuarios que adquieran su equipo en tiendas especializadas de Samsung, estos contaran con una (1) reclamación por vigencia por fractura de pantalla por 6 meses, para el caso del Samsung Galaxy Fold cuenta adicionalmente con 1 ano de Garatia Extendida y una (1) reclamación por vigencia por fractura de pantalla por 12 meses.
                      </p>
                      <p>Aplican términos y condiciones.</p>
                    </div>
                    <div className="col-4 col-md-3">
                      <div className="mt-4 mr-auto ml-auto d-middle row">
                        <Link className="btn btn-block btn-success btn-pill btn-soft mb-4" to="/samsung">
                          Ver Más
                        </Link>
                        <Link className="btn btn-block btn-pill btn-soft btn-outline-success">
                          Trámite-Reclamación
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-12 my-5">
              <div className="h-100 bg-white shadow-md rounded">
                <div className=" px-4 pb-5 pt-4">
                  <div className="row d-flex flex-wrap align-items-center">
                    <div className="col-4 col-md-3">
                      <div className="d-middle">
                        <img src={MobileSecure} width="250px"/>
                      </div>
                    </div>
                    <div className="col-4 col-md-6">
                      <h1 className="mb-4 font-weight-normal">
                        <span className="d-block-xs">Protección Total</span>
                      </h1>
                      <p className="lead text-justify">
                        Este producto cubre hurto calificado, hurto simple, daño total accidental y fractura de pantalla. Este seguro aplica para clientes que adquieren los planes Pospago 5.3, plan Bussiness Combo B2B Voz y SMS Nacional ilimitado + 35GB y/o Combo B2B Voz y SMS Nacional ilimitado + 50GB, sin ningún costo adicional.
                      </p>
                      <p>Aplican términos y condiciones.</p>
                    </div>
                    <div className="col-4 col-md-3">
                      <div className="mt-4 mr-auto ml-auto d-middle row">
                        <Link className="btn btn-block btn-success btn-pill btn-soft mb-4" to="/pospago-5-3">
                          Ver Más
                        </Link>
                        <Link className="btn btn-block btn-pill btn-soft btn-outline-success">
                          Trámite-Reclamación
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-12 my-5">
              <div className="h-100 bg-white shadow-md rounded">
                <div className=" px-4 pb-5 pt-4">
                  <div className="row d-flex flex-wrap align-items-center">
                    <div className="col-4 col-md-3">
                      <div className="d-middle">
                        <img src={PhoneRepair} width="250px"/>
                      </div>
                    </div>
                    <div className="col-4 col-md-6">
                      <h1 className="mb-4 font-weight-normal">
                        <span className="d-block-xs">Fractura de Pantalla</span>
                      </h1>
                      <p className="lead text-justify">
                        Este producto cubre la reparación de la pantalla en caso de rotura por accidente. Este seguro aplica para clientes que adquieran los planes Pospago 5.2, Bancolombia Credito o Bussiness Combo B2B Voz y SMS Nacional Ilimitado + 12GB o combos, estos contaran con una (1) reclamación por año por fractura de pantalla.
                      </p>
                      <p>Aplican términos y condiciones.</p>
                    </div>
                    <div className="col-4 col-md-3">
                      <div className="mt-4 mr-auto ml-auto d-middle row">
                        <Link className="btn btn-block btn-success btn-pill btn-soft mb-4" to="/pospago-5-2">
                          Ver Más
                        </Link>
                        <Link className="btn btn-block btn-pill btn-soft btn-outline-success">
                          Trámite-Reclamación
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-12 my-5">
              <div className="h-100 bg-white shadow-md rounded">
                <div className=" px-4 pb-5 pt-4">
                  <div className="row d-flex flex-wrap align-items-center">
                    <div className="col-4 col-md-3">
                      <div className="d-middle">
                        <img src={SmartPhone} width="250px"/>
                      </div>
                    </div>
                    <div className="col-4 col-md-6">
                      <h1 className="mb-4 font-weight-normal">
                        <span className="d-block-xs">Arma tu Plan - Smart App</span>
                      </h1>
                      <p className="lead text-justify">
                        Este producto cubre Hurto Calificado, Hurto Simple y Daño Total Accidental. Este seguro va dirigido a los usuarios Tigo que tengan activo un Arma tu plan superior a $74.900 y activen la casilla de Protección Móvil en Smart App, estos contarán con 2 reclamaciones al año, una (1) reclamación por Hurto Calificado o Simple y una (1) reclamación por Daño Total Accidental.
                      </p>
                      <p>Aplican términos y condiciones.</p>
                    </div>
                    <div className="col-4 col-md-3">
                      <div className="mt-4 mr-auto ml-auto d-middle row">
                        <Link className="btn btn-block btn-success btn-pill btn-soft mb-4" to="/arma-tu-plan-smart-app">
                          Ver Más
                        </Link>
                        <Link className="btn btn-block btn-pill btn-soft btn-outline-success">
                          Trámite-Reclamación
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-12 my-5">
              <div className="h-100 bg-white shadow-md rounded">
                <div className=" px-4 pb-5 pt-4">
                  <div className="row d-flex flex-wrap align-items-center">
                    <div className="col-4 col-md-3">
                      <div className="d-middle">
                        <img src={LogoAxaColpatria} width="250px"/>
                      </div>
                    </div>
                    <div className="col-4 col-md-6">
                      <h1 className="mb-4 font-weight-normal">
                        <span className="d-block-xs">Seguro por Gama</span>
                      </h1>
                      <p className="lead text-justify">
                        Este producto cubre Hurto Calificado, Hurto Simple y Daño Total Accidental. Este seguro va dirigido a cualquier cliente con un plan pospago Tigo, estos contarán con 2 reclamaciones al año, una (1) reclamación por hurto Calificado o simple y una (1) reclamación por Daño Total Accidental.
                      </p>
                      <p>Aplican términos y condiciones.</p>
                    </div>
                    <div className="col-4 col-md-3">
                      <div className="mt-4 mr-auto ml-auto d-middle row">
                        <Link className="btn btn-block btn-success btn-pill btn-soft mb-4" to="/seguro-gamas">
                          Ver Más
                        </Link>
                        <Link className="btn btn-block btn-pill btn-soft btn-outline-success">
                          Trámite-Reclamación
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-12 my-5">
              <div className="h-100 bg-white shadow-md rounded">
                <div className=" px-4 pb-5 pt-4">
                  <div className="row d-flex flex-wrap align-items-center">
                    <div className="col-4 col-md-3">
                      <div className="d-middle">
                        <img src={LogoSamgung} width="250px"/>
                      </div>
                    </div>
                    <div className="col-4 col-md-6">
                      <h1 className="mb-4 font-weight-normal">
                        <span className="d-block-xs">SOAT Asistencia de Pantalla</span>
                      </h1>
                      <p className="lead text-justify">
                        Esta asistencia cubre la reparación de la pantalla en caso de fractura/rotura por accidente. Está dirigido a todos los usuarios que adquieran su Soat con Axa Colpatria Seguro, estos contaran con una (1) reclamación por vigencia por fractura de pantalla por 3 meses.
                      </p>
                      <p>Aplican términos y condiciones.</p>
                    </div>
                    <div className="col-4 col-md-3">
                      <div className="mt-4 mr-auto ml-auto d-middle row">
                        <Link className="btn btn-block btn-success btn-pill btn-soft mb-4" to="/detalle-soat">
                          Ver Más
                        </Link>
                        <Link className="btn btn-block btn-pill btn-soft btn-outline-success">
                          Trámite-Reclamación
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
 
export default Products;