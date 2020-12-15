import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <section className="bg-theme-color-light">
        <div className="container">
          <div className="table-responsive">
            <h3 className="fs--50  mb-2 lead">Nuestros Productos</h3>
            <p className="lead fs--20">
              Puedes observar la diferentes coberturas que tenemos en cada uno
              de nuestros planes, para que asi mismo escogas el que más se
              adecue a tus necesidades. En la parte superior encontrarás
              nuestros planes, y en el costado izquierdo las coberturas con una
              descripción de lo que significa cada una
            </p>
            <table className="table table-hover table-align-middle font-weight-medium text-center">
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th
                    colSpan="4"
                    className="font-weight-medium text-center text-primary fs--20 w--100"
                  >
                    PLANES
                  </th>
                </tr>
                <tr>
                  <th className="text-align-start">
                    Coberturas
                    <small className="d-block fs--13 text-muted">
                      * Aplicán términos y condiciones.
                    </small>
                  </th>
                  <th className="font-weight-medium text-center text-primary fs--20 w--100">
                    <span className="d-block w--120 fs--17">
                      FRACTURA DE PANTALLA
                    </span>
                  </th>
                  <th className="font-weight-medium text-center text-primary fs--20 w--100">
                    <span className="d-block w--120 fs--17">
                      SEGURO POR GAMA
                    </span>
                  </th>
                  <th className="font-weight-medium text-center text-primary fs--20 w--100">
                    <span className="d-block w--120 fs--17">ARMA TU PLAN</span>
                  </th>
                  <th className="font-weight-medium text-center text-primary fs--20 w--100">
                    <span className="d-block w--120 fs--17">
                      PROTECCION TOTAL
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-align-start">
                    Reparación de pantalla
                    <small className="d-block text-muted">
                      Fractura de pantalla causada por un accidente
                    </small>
                  </td>
                  <td>
                    <i className="fi mdi-check fs--25 text-primary"></i>
                  </td>
                  <td>
                    <i className="fi mdi-check fs--25 text-primary"></i>
                  </td>
                  <td>
                    <i className="fi mdi-check fs--25 text-primary"></i>
                  </td>
                  <td>
                    <i className="fi mdi-check fs--25 text-primary"></i>
                  </td>
                </tr>
                <tr>
                  <td className="text-align-start">
                    Hurto Calificado
                    <small className="d-block text-muted">
                      Apoderarse sin consentimiento de tu bien asegurado con
                      violencia
                    </small>
                  </td>
                  <td>
                    <i className="fi mdi-close fs--25 text-danger"></i>
                  </td>
                  <td>
                    <i className="fi mdi-check fs--25 text-primary"></i>
                  </td>
                  <td>
                    <i className="fi mdi-check fs--25 text-primary"></i>
                  </td>
                  <td>
                    <i className="fi mdi-check fs--25 text-primary"></i>
                  </td>
                </tr>
                <tr>
                  <td className="text-align-start">
                    Hurto Simple
                    <small className="d-block text-muted">
                      Apoderarse sin consentimiento de tu bien asegurado sin
                      violencia
                    </small>
                  </td>
                  <td>
                    <i className="fi mdi-close fs--25 text-danger"></i>
                  </td>
                  <td>
                    <i className="fi mdi-check fs--25 text-primary"></i>
                  </td>
                  <td>
                    <i className="fi mdi-check fs--25 text-primary"></i>
                  </td>
                  <td>
                    <i className="fi mdi-check fs--25 text-primary"></i>
                  </td>
                </tr>
                <tr>
                  <td className="text-align-start">
                    Daño Total Accidental
                    <small className="d-block text-muted">
                      Daño fisico causado por un accidente impidiendo el
                      funcionamiento del equipo
                    </small>
                  </td>
                  <td>
                    <i className="fi mdi-close fs--25 text-danger"></i>
                  </td>
                  <td>
                    <i className="fi mdi-check fs--25 text-primary"></i>
                  </td>
                  <td>
                    <i className="fi mdi-check fs--25 text-primary"></i>
                  </td>
                  <td>
                    <i className="fi mdi-check fs--25 text-primary"></i>
                  </td>
                </tr>
                <tr>
                  <td className="text-align-start">
                    No cuenta con cantidad de reclamaciones
                    <small className="d-block text-muted">
                      No tiene un límite de reclamaciones que puedas realizar
                    </small>
                  </td>
                  <td>
                    <i className="fi mdi-close fs--25 text-danger"></i>
                  </td>
                  <td>
                    <i className="fi mdi-close fs--25 text-danger"></i>
                  </td>
                  <td>
                    <i className="fi mdi-close fs--25 text-danger"></i>
                  </td>
                  <td>
                    <i className="fi mdi-check fs--25 text-primary"></i>
                  </td>
                </tr>
                <tr class="font-weight-normal">
                  <td>&nbsp;</td>
                  <td class="text-gray-500 font-weight-normal fs--13">
                    <Link
                      className="btn btn-primary btn-pill mb-1"
                      to="/pospago-5-2"
                    >
                      Ver Más
                    </Link>
                  </td>
                  <td class="text-gray-500 font-weight-normal fs--13">
                    <Link
                      className="btn btn-primary btn-pill mb-1"
                      to="/seguro-gamas"
                    >
                      Ver Más
                    </Link>
                  </td>
                  <td class="text-gray-500 font-weight-normal fs--13">
                    <Link
                      className="btn btn-primary btn-pill mb-1"
                      to="/arma-tu-plan-smart-app"
                    >
                      Ver Más
                    </Link>
                  </td>
                  <td class="text-gray-500 font-weight-normal fs--13">
                    <Link
                      className="btn btn-primary btn-pill mb-1"
                      to="/pospago-5-3"
                    >
                      Ver Más
                    </Link>
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

export default Products;
