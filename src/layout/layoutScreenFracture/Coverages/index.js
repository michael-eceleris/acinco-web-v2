import React from "react";
import { Link } from "react-router-dom";

const Coverages = () => {
  return (
    <>
      <section className="pt-5 pb-5">
        <div className="container p-0">
          <h2 className="font-weight-light mb-4 text-center-xs">
            Detalles del plan Protección Total
          </h2>
          <div className="table-responsive">
            <h3 className="h5">Coberturas</h3>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td className="text-muted w-50">Reparación de Pantalla</td>
                  <td>Si</td>
                </tr>
                <tr>
                  <td className="text-muted w-50">Reclamaciones</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td className="text-muted w-50">Hurto Calificado</td>
                  <td>&ndash;</td>
                </tr>
                <tr>
                  <td className="text-muted w-50">Hurto Simple</td>
                  <td>&ndash;</td>
                </tr>
                <tr>
                  <td className="text-muted w-50">Daño Total</td>
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
