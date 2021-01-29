import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
const Navbar = ({ hideMessage }) => {
  const hide = hideMessage ? "mt--30" : "top-0";
  const hideM = hideMessage ? " " : "mb-5";
  return (
    <header className={`shadow-xs ${hideM}`}>
      <div className={`z-index-99 position-fixed w-100 bg-white ${hide}`}>
        <nav className="navbar navbar-expand-lg navbar-light justify-content-lg-between justify-content-md-inherent">
          <div className="w-25 justify-content-end d-flex">
            <Link className="navbar-brand mr-0" to="/">
              <img
                width="100"
                height="100"
                alt="Logo de la empresa"
                src={Logo}
              />
            </Link>
          </div>
          <div className="collapse navbar-collapse navbar-animate-fadein justify-content-center w-75">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link js-ajax" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link js-ajax "
                  to="/tramites-y-reclamaciones"
                >
                  Reclamaciones
                </Link>
              </li>
              <li className="nav-item dropdown active">
                <p
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Nuestros Productos
                </p>
                <div
                  aria-labelledby="mainNavHome"
                  className="dropdown-menu dropdown-menu-clean dropdown-menu-hover"
                >
                  <ul className="list-unstyled m-0 p-o">
                    <li className="dropdown-item">
                      <Link className="dropdown-link" to="/pospago-5-3">
                        Proteccion total
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link className="dropdown-link" to="/pospago-5-2">
                        Fractura de pantalla
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link
                        className="dropdown-link"
                        to="/arma-tu-plan-smart-app"
                      >
                        Arma tu plan - Smart App
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link className="dropdown-link" to="/seguro-gamas">
                        Seguro por Gama
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link className="dropdown-link" to="/samsung">
                        Samsung
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link
                        className="dropdown-link"
                        to="/soat-asistencia-de-pantalla"
                      >
                        SOAT Asitencia de pantallla
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link className="dropdown-link" to="/colsubsidio">
                        Asistencia Colsubsidio -<br />
                        Axa Colpatria Seguros
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-ajax"
                  href="https://www.acinco.com.co/wp-content/uploads/2018/09/Politica-deprotecciondedatos-min.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Politica de Proteccion
                </a>
              </li>
              <li>
                <a
                  className="nav-link js-ajax"
                  href="https://secureservercdn.net/104.238.68.130/j5f.49f.myftpupload.com/wp-content/uploads/2018/09/CLAUSULADO-POLIZA-34.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Clausulado Poliza 34
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
