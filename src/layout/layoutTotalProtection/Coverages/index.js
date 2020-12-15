import React from "react";
import { Link } from "react-router-dom";
import HurtoCalificado from "../../../assets/images/icon_hurtocalificado.png";
import HurtoSimple from "../../../assets/images/hurtosimple.png";
import TotalHurt from "../../../assets/images/icon_daniototal.png";
import ScreenRepair from "../../../assets/images/icon_reparaciondepantalla.png";

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
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td className="text-muted w-50">Hurto Calificado</td>
                  <td>Si</td>
                </tr>
                <tr>
                  <td className="text-muted w-50">Hurto Simple</td>
                  <td>Si</td>
                </tr>
                <tr>
                  <td className="text-muted w-50">Daño Total</td>
                  <td>Si</td>
                </tr>
                <tr>
                  <td className="text-muted w-50">Reparación de Pantalla</td>
                  <td>Si</td>
                </tr>
                <tr>
                  <td className="text-muted w-50">Reclamaciones</td>
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
