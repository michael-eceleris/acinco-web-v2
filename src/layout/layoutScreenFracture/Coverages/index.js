import React from "react";
const Coverages = () => {
  return (
    <>
      <section>
        <div className="container ">
          <h2 className="font-weight-light mb-5 text-center">
            Detalles del plan Fractura de Pantalla
          </h2>
          <div className="table-responsive mx-auto w--700">
            <table className="table table-hover table-align-middle font-weight-medium text-center">
              <h3 className="h5 ml-2 text-align-start mb-3">Coberturas</h3>
              <tbody>
                <tr>
                  <td className="text-align-start">
                    Reparación de Pantalla
                    <small className="d-block text-muted">
                      cubre costos de reparación en la pantalla, no cubre daños
                      en la tarjeta principal, ni baterías ni daños por humedad
                      del equipo
                    </small>
                  </td>
                </tr>
                <tr>
                  <td className="text-align-start">
                    Reclamaciones
                    <small className="d-block text-muted">
                      Cuenta con una (1) reclmación anual por fractura de
                      pantalla en caso de accidente.
                    </small>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Coverages;
