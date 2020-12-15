import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
const Navbar = () => {
  return (
    <header className="shadow-xs">
      <div className="container position-relative">
        <nav className="navbar navbar-expand-lg navbar-light justify-content-lg-between justify-content-md-inherent">
          <div className="align-items-start">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarMainNav"
              aria-controls="navbarMainNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg width="25" viewBox="0 0 20 20">
                <path d="M 19.9876 1.998 L -0.0108 1.998 L -0.0108 -0.0019 L 19.9876 -0.0019 L 19.9876 1.998 Z"></path>
                <path d="M 19.9876 7.9979 L -0.0108 7.9979 L -0.0108 5.9979 L 19.9876 5.9979 L 19.9876 7.9979 Z"></path>
                <path d="M 19.9876 13.9977 L -0.0108 13.9977 L -0.0108 11.9978 L 19.9876 11.9978 L 19.9876 13.9977 Z"></path>
                <path d="M 19.9876 19.9976 L -0.0108 19.9976 L -0.0108 17.9976 L 19.9876 17.9976 L 19.9876 19.9976 Z"></path>
              </svg>
            </button>
            <Link className="navbar-brand" to="/">
              <img
                width="100"
                height="100"
                alt="Logo de la empresa"
                src={Logo}
              />
            </Link>
          </div>
          <div className="collapse navbar-collapse navbar-animate-fadein justify-content-end">
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
                <Link
                  to="/nuestros-productos"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Nuestros Productos
                </Link>
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
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
