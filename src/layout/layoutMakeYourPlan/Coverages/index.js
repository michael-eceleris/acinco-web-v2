import React from "react";
const Coverages = () => {
  return (
    <>
      <section>
        <div className="container ">
          <h2 className="font-weight-light mb-5 text-center">
            Detalles del plan Arma tu Plan - Smart App
          </h2>
          <div className="tablecustom">
            <table className="table table-hover table-align-middle font-weight-medium text-center">
              <h3 className="h5 ml-2 text-align-start mb-3">Coberturas</h3>
              <tbody>
                <tr>
                  <td className="text-align-start">
                    Hurto Calificado
                    <small className="d-block text-muted">
                      Aplica para hurto calificado, el hurto calificado ocurre
                      cuando se apoderan de tu dispositivo con el uso de la
                      violencia.
                    </small>
                  </td>
                </tr>
                <tr>
                  <td className="text-align-start">
                    Hurto Simple
                    <small className="d-block text-muted">
                      Aplica para hurto simple, el hurto simple ocurre cuando se
                      apoderan de tu dispositivo sin el uso de la violencia.
                      Esta cobertura no aplica para perdida por parte del
                      usuario.
                    </small>
                  </td>
                </tr>
                <tr>
                  <td className="text-align-start">
                    Daño Total Accidental
                    <small className="d-block text-muted">
                      Daño fisico de tu dispositivo asegurado producto de un
                      accidente y causa de esto impida el funcionamiento del
                      mismo
                    </small>
                  </td>
                </tr>
                <tr>
                  <td className="text-align-start">
                    Reclamaciones
                    <small className="d-block text-muted">
                      Cuenta con una (1) reclamación anual por hurto calificado,
                      hurto simple o daño total accidental.
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
