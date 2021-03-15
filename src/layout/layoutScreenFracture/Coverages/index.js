import React from "react";
import RepairPhone from "../../../assets/icons/cellphone.svg";
import Claims from "../../../assets/icons/claim.svg";

const Coverages = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="text-center mb--100">
            <h2 className="font-weight-light mb-4 text-center">
              Detalles del plan Fractura de Pantalla
            </h2>
            <h3 className="h3 ml-2 mb-1 mt-2 text-center">Coberturas</h3>
          </div>
          <div className="bg-white pt-1 rounded overflow-hidden">
            <div className="row col-border">
              <div className="col-12 col-md-12 col-lg-6 mb-4">
                <div className="card p-4 b-0 h-100">
                  <div className="d-middle mb-3">
                    <img
                      width="140"
                      src={RepairPhone}
                      alt="reparacion_de_pantalla"
                    />
                  </div>
                  <h5 style={{ whiteSpace: "nowrap" }}>
                    Reparación de Pantalla
                  </h5>
                  <div className="card-body pl-0 pr-0 text-gray-600 justify-content-between">
                    <div className="h-75">
                      <p className="lead fs--18 text-justify">
                        Fractura o fisura de la pantalla de tu equipo móvil en
                        caso de accidente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-6 mb-4">
                <div className="card p-4 b-0 h-100">
                  <div className="d-middle mb-3">
                    <img
                      width="140"
                      src={Claims}
                      alt="reparacion_de_pantalla"
                    />
                  </div>
                  <h5>Reclamaciones</h5>
                  <div className="card-body pl-0 pr-0 text-gray-600 justify-content-between">
                    <div className="h-75">
                      <p className="lead fs--18 text-justify">
                        Cuenta con una (1) reclmación anual por fractura de
                        pantalla en caso de accidente.
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
