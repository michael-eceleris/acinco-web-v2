import React from "react";
import IconRecobros from "../../../assets/images/recobros.png";

const Recoveries = () => {
  return (
    <section className="pt-0">
      <div className="container">
        <h2 className="h1 mb-5">Recobros</h2>
        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="h-100 bg-white">
              <div className="px-4 pb-5">
                <div className="row d-flex flex-wrap">
                  <div className="col-6 col-md-3">
                    <img src={IconRecobros} />
                  </div>
                  <div className="col-6 col-md-9">
                    <p className="fs--20 text-center">
                      En caso de siniestro, el seguro te cubre:
                    </p>
                    <div className="row">
                      <div className="col-6 col-md-1">
                        <div className="bg-success w--10 h--10 ml-5 mt-2 rounded-circle"></div>
                        <div className="bg-success w--10 h--10 ml-5 mt-5 rounded-circle"></div>
                      </div>
                      <div className="col-6 col-md-11">
                        <p className="lead">
                          70% por Hurto Simple, Hurto Calificado, Daño Total o
                          Fractura de Pantalla.
                        </p>
                        <p className="lead">
                          Los porcentajes descritos corresponde a los montos
                          cubiertos por la aseguradora. El cliente sólo pagará:
                          30% en caso de Hurto Simple, Hurto Calificado, Daño
                          Total o Fractura de Pantalla. El recobro será
                          calculado sobre el precio de venta del bien asegurado
                          al moemnto de su indemnización y en el caso de la
                          pantalla en el momento de su reparación.
                        </p>
                      </div>
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
};

export default Recoveries;
