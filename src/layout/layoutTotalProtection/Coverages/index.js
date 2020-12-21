import React from "react";
const Coverages = () => {
  return (
    <>
      <section>
        <div className="container ">
          <h2 className="font-weight-light mb-4 text-center">
            Detalles del plan Protección Total
          </h2>
          <div className="table-responsive mx-auto w--700">
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
                      Cuenta con dos (2) reclamaciones por vigencia anual, de
                      las cuales una (1) es por hurto calificado, hurto simple o
                      daño total accidental, y una (1) por fractura de pantalla
                      en caso de accidente.
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
