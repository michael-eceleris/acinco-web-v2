import React from "react";
const Coverages = () => {
  return (
    <>
      <section className="border-top">
        <div className="container">
          <h2 className="font-weight-light mb-4 text-center-xs">
            Detalles del plan Protección Total
          </h2>
          <div className="table-responsive">
            <h3 className="h5">Coberturas</h3>
            <table className="table table-hover">
              <tbody>
                <tr>
                  <td className="text-muted">Hurto Calificado</td>
                  <td>Si</td>
                </tr>
                <tr>
                  <td className="text-muted">Hurto Simple</td>
                  <td>Si</td>
                </tr>
                <tr>
                  <td className="text-muted">Daño Total</td>
                  <td>Si</td>
                </tr>
                <tr>
                  <td className="text-muted">Reparación de Pantalla</td>
                  <td>Si</td>
                </tr>
                <tr>
                  <td className="text-muted">Reclamaciones</td>
                  <td>&ndash;</td>
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
