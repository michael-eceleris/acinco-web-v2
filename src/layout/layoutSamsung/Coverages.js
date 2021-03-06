import React from "react";
const Coverages = () => {
  return (
    <>
      <section>
        <div className="container ">
          <h2 className="font-weight-light mb-4 text-center">
            Detalles del plan Samsung
          </h2>
          <div className="tablecustom">
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
                    Garantía Extendida
                    <small className="d-block text-muted">
                      Una vez terminada la grantía dada por SAMSUNG ELECTRONICS
                      COLOMBIA, comienza la garantía extendida, la cual tiene
                      las mismas coberturas que ofrece la de SAMSUNG, daño
                      cámara, auricular, micrófono, etc.
                    </small>
                  </td>
                </tr>
                <tr>
                  <td className="text-align-start">
                    Reclamaciones
                    <small className="d-block text-muted">
                      Cuenta con una (1) reclamación por seis (6) meses, desde
                      la fecha de expedición de la factura de compra.
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
