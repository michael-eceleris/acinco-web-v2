import React from "react";
import { Link } from "react-router-dom";
import HurtoCalificado from "../../../assets/images/icon_hurtocalificado.png";
import HurtoSimple from "../../../assets/images/hurtosimple.png";
import TotalHurt from "../../../assets/images/icon_daniototal.png";
import ScreenRepair from "../../../assets/images/icon_reparaciondepantalla.png";

const Coverages = () => {
  return (
    <section className="pt-3">
      <div className="container">
        <h2 className="h1 mb-5">¿Qué coberturas tiene?</h2>
        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="h-100 bg-white">
              <div className="px-4 pb-5">
                <div className="row d-flex flex-wrap">
                  <div className="col-6 col-md-3">
                    <div className="d-middle mb-2">
                      <img src={HurtoCalificado} height="200px" />
                    </div>
                    <h3 className="font-weight-normal text-center">
                      <span className="d-block-xs">Hurto Calificado</span>
                    </h3>
                    <p className="lead text-center">
                      Apoderarse sin consentimiento de tu bien asegurado con
                      violencia, colocandole en condiciones de indefensión o
                      inferioridad.
                    </p>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="d-middle mb-2">
                      <img src={HurtoSimple} height="200px" />
                    </div>
                    <h3 className="font-weight-normal text-center">
                      <span className="d-block-xs">Hurto Simple</span>
                    </h3>
                    <p className="lead text-center">
                      Apoderamiento ilegitimo de tu bien asegurado realizado sin
                      fuerza, ni violencia e intimidación. No incluye pérdida,
                      estravío del producto en un descuido.
                    </p>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="d-middle mb-2">
                      <img src={TotalHurt} height="200px" />
                    </div>
                    <h3 className="font-weight-normal text-center">
                      <span className="d-block-xs">Daño Total</span>
                    </h3>
                    <p className="lead text-center">
                      Daño físico de tu bien asegurado producto de un accidente
                      y que este impida el funcionamiento de tu equipo.
                    </p>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="d-middle mb-2">
                      <img src={ScreenRepair} height="190px" />
                    </div>
                    <h3 className="font-weight-normal text-center">
                      <span className="d-block-xs">
                        Reparación de la Pantalla
                      </span>
                    </h3>
                    <p className="lead text-center">
                      Fractura de pantalla de tu equipo móvil en caso de
                      accidente.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-2 mr-auto ml-auto d-middle">
                <Link className="btn  btn-success btn-pill btn-soft fs--20 w-50">
                  Trámites y Reclamaciones
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverages;
