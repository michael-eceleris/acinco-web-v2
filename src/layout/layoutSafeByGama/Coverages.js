import React from "react";
import Bandit from "../../assets/icons/bandit.svg";
import BanditSimple from "../../assets/icons/banditSimple.svg";
import BrokenPhone from "../../assets/icons/brokenphone.svg";

const Coverages = () => {
  return (
    <>
      <section className="bg-theme-color-light pt-6">
        <div className="container">
          <h2 className="font-weight-light mb-4 text-center">
            Detalles del plan Seguro por Gama
          </h2>
          <div className="tablecustom">
            <h3 className="h3 ml-2 text-center mb-4 mt-3">Tarifa Seguro</h3>
            <table className="table table-hover table-align-middle font-weight-medium text-center">
              <tbody>
                <tr className="bg-primary text-gray-100">
                  <td className="text-align-start ">Gama</td>
                  <td>Rango(Valor Equipo sin IVA)</td>
                  <td>Tarifa seguro IVA INCLUIDO</td>
                </tr>
                <tr>
                  <td className="text-align-start font-weight-light">Baja</td>
                  <td className="font-weight-light">$0 a $150.000 </td>
                  <td className="font-weight-light">$6.361</td>
                </tr>
                <tr>
                  <td className="text-align-start font-weight-light">Media</td>
                  <td className="font-weight-light">$150.001 a $450.000</td>
                  <td className="font-weight-light">$9.438</td>
                </tr>
                <tr>
                  <td className="text-align-start font-weight-light">Alta</td>
                  <td className="font-weight-light">$450.001 a $1.000.000</td>
                  <td className="font-weight-light">$20.927</td>
                </tr>
                <tr>
                  <td className="text-align-start font-weight-light">
                    Premium
                  </td>
                  <td className="font-weight-light">$1.000.001 a $1.999.999</td>
                  <td className="font-weight-light">$32.725</td>
                </tr>
                <tr>
                  <td className="text-align-start font-weight-light">Black</td>
                  <td className="font-weight-light">$2.000.000 a $3.400.000</td>
                  <td className="font-weight-light">$45.138</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="pt-2">
        <div className="container">
          <div className="text-center mb-5 tablecustom pt-5">
            <h3 className="h3 ml-2 mb-1 mt-2 ">Coberturas</h3>
          </div>
          <div className="bg-white pt-1 rounded overflow-hidden">
            <div className="row col-border">
              <div className="col-12 col-md-12 col-lg-4 mb-4">
                <div className="card p-4 b-0 h-100 mt-1">
                  <div className="d-middle mb-3">
                    <img width="170" src={Bandit} alt="hurto_calificado" />
                  </div>
                  <h5>Hurto Calificado</h5>
                  <div className="card-body pl-0 pr-0 text-gray-600 ">
                    <p className="lead fs--18 text-justify">
                      Apoderarse sin consentimiento de tu bien asegurado con
                      violencia, colocándote en condiciones de indefensión o
                      inferioridad.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-4 mb-4">
                <div className="card p-4 b-0 h-100 mt-1">
                  <div className=" d-middle mb-3">
                    <img width="140" src={BanditSimple} alt="hurto_simple" />
                  </div>
                  <h5>Hurto Simple</h5>
                  <div className="card-body pl-0 pr-0 text-gray-600 justify-content-between">
                    <div className="h-75">
                      <p className="lead fs--18 text-justify">
                        Apoderamiento ilegitimo de tu bien asegurado realizado
                        sin fuerza, ni violencia e intimidación. No incluye
                        perdida, extravío del producto en un descuido.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-4 mb-4">
                <div className="card p-4 b-0 h-100">
                  <div className=" d-middle mb-3">
                    <img
                      width="120"
                      src={BrokenPhone}
                      alt="daño_total_accidental"
                    />
                  </div>
                  <h5 style={{ whiteSpace: "nowrap" }}>
                    Daño Total Accidental
                  </h5>
                  <div className="card-body pl-0 pr-0 text-gray-600 justify-content-between">
                    <div className="h-75">
                      <p className="lead fs--18 text-justify">
                        Daño físico de tu bien asegurado producto de un
                        accidente y que este impida el funcionamiento de tu
                        equipo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Coverages;
