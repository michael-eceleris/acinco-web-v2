import React from "react";
import Shield from "../../assets/icons/shield.svg";
import Claims from "../../assets/icons/claim.svg";
import RepairPhone from "../../assets/icons/cellphone.svg";

const Coverages = () => {
  return (
    <>
      <section className="bg-white">
        <div className="container">
          <div className="text-center mb--100">
            <h2 className="font-weight-light mb-4 text-center">
              Detalles del plan Samsung
            </h2>
            <h3 className="h3 ml-2 mb-1 mt-2 text-center">Coberturas</h3>
          </div>
          <div className="bg-white pt-1 rounded overflow-hidden">
            <div className="row col-border">
              <div className=" row col-border justify-content-center">
                <div className="col-12 col-md-12 col-lg-4 mb-4">
                  <div className="card p-4 b-0 h-100 mt-1">
                    <div className="d-middle mb-3">
                      <img
                        width="140"
                        src={RepairPhone}
                        alt="hurto_calificado"
                      />
                    </div>
                    <h5>Reparación de Pantalla</h5>
                    <div className="card-body pl-0 pr-0 text-gray-600 ">
                      <p className="lead fs--18 text-justify">
                        Fractura o fisura de la pantalla de tu equipo móvil en
                        caso de accidente.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-4 mb-4">
                  <div className="card p-4 b-0 h-100 mt-1">
                    <div className=" d-middle mb-3">
                      <img width="140" src={Shield} alt="hurto_simple" />
                    </div>
                    <h5>Garantía Extendida</h5>
                    <div className="card-body pl-0 pr-0 text-gray-600 justify-content-between">
                      <div className="h-75">
                        <p className="lead fs--18 text-justify">
                          Esta garantía se extiende por 1 año, la cual empieza
                          una vez terminado el periodo de la garantía dada por
                          SAMSUNG ELECTRONICS COLOMBIA S.A. Dicha garantía tiene
                          las mismas coberturas que la garantía dada por SAMSUNG
                          ELECTRONICS COLOMBIA S.A.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-12 mb-4 ml-sm-0 ml-md-0 ml-xl-12 border-0 pr-xl-23 pr-sm-0 pr-md-0">
                <div className="card p-4 b-0 h-100 flex-lg-row flex-md-column">
                  <div className=" d-middle mb-3">
                    <img width="160" src={Claims} alt="daño_total_accidental" />
                  </div>
                  <div className="card-body pl-0 pr-0 text-gray-600 justify-content-between">
                    <h5 style={{ color: "black" }}>Reclamaciones</h5>
                    <div className="h-75">
                      <p className="lead fs--18 text-justify">
                        Cuenta con una (1) reclamación por un (1) año, desde la
                        fecha de expedición de la factura de compra.
                      </p>
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

export default Coverages;
