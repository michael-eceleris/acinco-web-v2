import React from "react";
const Coverages = () => {
  return (
    <>
      <section className="border-top">
        <div className="container ">
          <h2 className="font-weight-light mb-4 text-center-xs">
            Detalles del plan Protección Total
          </h2>
          <div className="table-responsive">
            <table className="table table-hover table-align-middle font-weight-medium text-center">
              <h3 className="h5 ml-2 text-align-start">Coberturas</h3>
              <tbody>
                <tr>
                  <td className="text-align-start">
                    Hurto Calificado
                    <small className="d-block text-muted">
                      Apoderarse sin consentimiento de tu dispositivo asegurado
                      mediante el uso de la violencia, dejandote en condición de
                      inferioridad
                    </small>
                  </td>
                  <td>Si</td>
                </tr>
                <tr>
                  <td className="text-align-start">
                    Hurto Simple
                    <small className="d-block text-muted">
                      Apoderarse ilegitimo de tu dispostivo asegurado, sin el
                      uso de la violencia, no incluye extravío ni perdida del
                      dispositivo
                    </small>
                  </td>
                  <td>Si</td>
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
                  <td>Si</td>
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
                  <td>Si</td>
                </tr>
                <tr>
                  <td className="text-align-start">
                    Reclamaciones
                    <small className="d-block text-muted">
                      Cuenta con dos (2) reclamaciones por vigencia anual
                    </small>
                  </td>
                  <td>Si</td>
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
