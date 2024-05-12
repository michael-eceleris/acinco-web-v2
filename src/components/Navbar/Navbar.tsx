import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

const Navbar = () => {
  const TOP_OFFSET = 50;
  const [showBackgroundNavbar, setShowBackgroundNavbar] =
    useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackgroundNavbar(true);
      } else {
        setShowBackgroundNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`w-full`}>
      <div className={`fixed z-50 w-full`}>
        <nav
          className={`flex w-full ${showBackgroundNavbar ? "bg-white" : "bg-transparent"}`}
        >
          <div className="flex w-3/6 justify-center ">
            <Link to="/">
              <div className="h-28 w-24 pt-2">
                <img alt="acinco_logo" src={Logo} />
              </div>
            </Link>
          </div>
          <div className="mb-5 mt-10 w-2/6">
            <ul className="flex flex-row justify-between">
              <li className="mt-1 hover:underline hover:underline-offset-4">
                <Link to="/">La Solución</Link>
              </li>
              <li className="mt-1 hover:underline hover:underline-offset-4">
                <Link to="/tramites-y-reclamaciones">Servicios</Link>
              </li>
              <li className="mt-1 hover:underline hover:underline-offset-4">
                <Link to="/tramites-y-reclamaciones">Nosotros</Link>
              </li>
              <li className="h-9 rounded-lg bg-buttonPrimary px-3 py-1 font-bold text-white">
                <Link to="/tramites-y-reclamaciones">Reclamaciones</Link>
              </li>
              {/* <li className="nav-item dropdown active">
                <Link
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  to="/productos"
                >
                  Nuestros Productos
                </Link>
                <div
                  aria-labelledby="mainNavHome"
                  className="dropdown-menu dropdown-menu-clean dropdown-menu-hover"
                >
                  <ul className="list-unstyled p-o m-0">
                    <li className="dropdown-item">
                      <Link className="dropdown-link" to="/motorola">
                        Motorola
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link
                        className="dropdown-link"
                        to="/motorola/beneficio-edge"
                      >
                        Motorola Edge
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link
                        className="dropdown-link"
                        to="/soat-asistencia-de-pantalla"
                      >
                        SOAT Asistencia de pantalla
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link className="dropdown-link" to="/samsung">
                        Samsung
                      </Link>
                      <ul>
                        <li className="dropdown-item">
                          <Link
                            className="dropdown-link"
                            to="/samsung-care-plus/reclamaciones"
                          >
                            Reclamaciones
                          </Link>
                        </li>
                        <li className="dropdown-item">
                          <Link
                            className="dropdown-link"
                            to="/samsung-care-plus/devices"
                          >
                            Samsung Care + Dispositivos Móviles
                          </Link>
                        </li>
                        <li className="dropdown-item">
                          <Link
                            className="dropdown-link"
                            to="/samsung-care-plus/electro"
                          >
                            Samsung Care + Electrodoméstico
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-item">
                      <Link className="dropdown-link" to="/colsubsidio">
                        Asistencia Colsubsidio -<br />
                        Axa Colpatria Seguros
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link className="dropdown-link" to="/camara-comercio">
                        Cámara de Comercio de Bogotá
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link className="dropdown-link" to="/protect-my-phone">
                        Protect My Phone
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-ajax"
                  href="https://files-statics-protegeme.s3.amazonaws.com/Politica+deprotecciondedatos-min.pdf"
                  target="_blank"
                  rel="noreferrer"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Política de Protección
                </a>
              </li>
              {pathname !== "/camara-comercio" && (
                <li>
                  <a
                    className="nav-link js-ajax"
                    href="https://files-statics-protegeme.s3.amazonaws.com/P1648+EQUIPOS+TELEFONIA+CELULAR_MAR+2022.pdf"
                    target="_blank"
                    rel="noreferrer"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Clausulado General
                  </a>
                </li>
              )} */}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
