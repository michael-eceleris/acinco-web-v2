import React from "react";
const Coverages = () => {
  return (
    <>
      <section className="border-top">
        <div className="container ">
          <h2 className="font-weight-light mb-4 text-center">
            Detalles del plan Seguro por Gama
          </h2>
          <div className="table-responsive mx-auto w--700">
            <table className="table table-hover table-align-middle font-weight-medium text-center">
              <tbody>
                <h3 className="h5 ml-2 text-align-start mb-3 mt-3">
                  Tarifa Seguro
                </h3>
                <tr>
                  <td className="text-align-start">
                    Gama Baja
                    <small className="d-block text-muted">
                      Dispositivo que se encuentre entre el rango de{" "}
                      <span className="font-weight-medium">$0 a $150.000</span>{" "}
                      valor sin IVA, el seguro tiene un costo de{" "}
                      <span className="font-weight-medium">$6.361</span>
                    </small>
                  </td>
                </tr>
                <tr>
                  <td className="text-align-start">
                    Gama Media
                    <small className="d-block text-muted">
                      Dispositivo que se encuentre entre el rango de{" "}
                      <span className="font-weight-medium">
                        $150.001 a $450.000
                      </span>{" "}
                      valor sin IVA, el seguro tiene un costo de{" "}
                      <span className="font-weight-medium">$9.438</span>
                    </small>
                  </td>
                </tr>
                <tr>
                  <td className="text-align-start">
                    Gama Alta
                    <small className="d-block text-muted">
                      Dispositivo que se encuentre entre el rango de{" "}
                      <span className="font-weight-medium">
                        $450.001 a $1.000.000
                      </span>{" "}
                      valor sin IVA, el seguro tiene un costo de{" "}
                      <span className="font-weight-medium">$20.927</span>
                    </small>
                  </td>
                </tr>
                <tr>
                  <td className="text-align-start">
                    Gama Premium
                    <small className="d-block text-muted">
                      Dispositivo que se encuentre entre el rango de{" "}
                      <span className="font-weight-medium">
                        $1.000.001 a $1.999.999
                      </span>{" "}
                      valor sin IVA, el seguro tiene un costo de{" "}
                      <span className="font-weight-medium">$32.725</span>
                    </small>
                  </td>
                </tr>
                <tr>
                  <td className="text-align-start">
                    Gama Black
                    <small className="d-block text-muted">
                      Dispositivo que se encuentre entre el rango de{" "}
                      <span className="font-weight-medium">
                        $2.000.000 a $3.400.000
                      </span>{" "}
                      valor sin IVA, el seguro tiene un costo de{" "}
                      <span className="font-weight-medium">$45.138</span>
                    </small>
                  </td>
                </tr>
                <h3 className="h5 ml-2 text-align-start mb-3 mt-3">
                  Coberturas
                </h3>
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
                {/* <tr>
                  <td className="text-align-start">
                    Reclamaciones
                    <small className="d-block text-muted">
                      Cuenta con dos (2) reclamaciones por vigencia anual, de
                      las cuales una (1) es por hurto calificado, hurto simple o
                      daño total accidental, y una (1) por fractura de pantalla
                      en caso de accidente.
                    </small>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Coverages;
