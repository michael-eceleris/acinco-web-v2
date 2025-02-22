import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

const NavbarSamsungCarePlus = ({ hideMessage }) => {
  const hide = hideMessage ? "mt--30" : "top-0";
  const hideM = hideMessage ? " " : "mb-5";
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setShow(false);
    //eslint-disable-next-line
  }, [pathname]);
  return (
    <header className={`shadow-xs ${hideM}`}>
      <div className={`z-index-99 position-fixed w-100 bg-white ${hide}`}>
        <nav className='navbar navbar-expand-lg navbar-light justify-content-lg-between justify-content-md-inherent'>
          <div className='navcustom'>
            <button
              className='navbar-toggler ml-1'
              type='button'
              data-toggle='collapse'
              data-target='#navbarMainNav'
              aria-controls='navbarMainNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShow(true)}
            >
              <svg
                style={{ marginTop: 0, width: "70%" }}
                width='25'
                viewBox='0 0 20 20'
              >
                <path
                  fill='#003272'
                  d='M 19.9876 1.998 L -0.0108 1.998 L -0.0108 -0.0019 L 19.9876 -0.0019 L 19.9876 1.998 Z'
                ></path>
                <path
                  fill='#003272'
                  d='M 19.9876 7.9979 L -0.0108 7.9979 L -0.0108 5.9979 L 19.9876 5.9979 L 19.9876 7.9979 Z'
                ></path>
                <path
                  fill='#003272'
                  d='M 19.9876 13.9977 L -0.0108 13.9977 L -0.0108 11.9978 L 19.9876 11.9978 L 19.9876 13.9977 Z'
                ></path>
                <path
                  fill='#003272'
                  d='M 19.9876 19.9976 L -0.0108 19.9976 L -0.0108 17.9976 L 19.9876 17.9976 L 19.9876 19.9976 Z'
                ></path>
              </svg>
            </button>
            <Link className='navbar-brand' to='/samsung-care-plus/devices'>
              <img
                width='100'
                height='100'
                alt='Logo de la empresa'
                src={Logo}
              />
            </Link>
          </div>
          <div
            className={`navbar-collapse navbar-animate-fadein collapse justify-content-center w-75  ${
              show ? "show w-100" : ""
            }`}
          >
            <div className='navbar-xs d-none'>
              <button
                className='navbar-toggler pt-0'
                type='button'
                data-toggle='collapse'
                data-target='#navbarMainNav'
                aria-controls='navbarMainNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => setShow(false)}
              >
                <svg
                  width='20'
                  style={{ width: "30%", margin: 0, marginRight: 20 }}
                  viewBox='0 0 20 20'
                >
                  <path d='M 20.7895 0.977 L 19.3752 -0.4364 L 10.081 8.8522 L 0.7869 -0.4364 L -0.6274 0.977 L 8.6668 10.2656 L -0.6274 19.5542 L 0.7869 20.9676 L 10.081 11.679 L 19.3752 20.9676 L 20.7895 19.5542 L 11.4953 10.2656 L 20.7895 0.977 Z'></path>
                </svg>
              </button>
              <Link className='navbar-brand' to='/samsung-care-plus/devices'>
                <img
                  width='90'
                  height='100'
                  alt='Logo de la empresa'
                  src={Logo}
                />
              </Link>
            </div>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link
                  className='nav-link js-ajax'
                  to='/samsung-care-plus/devices'
                >
                  Inicio
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link js-ajax '
                  to='/samsung-care-plus/tramites-y-reclamaciones'
                >
                  Reclamaciones
                </Link>
              </li>
              <li className='nav-item dropdown active'>
                <Link
                  className='nav-link dropdown-toggle'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                  to='/samsung-care-plus/devices'
                >
                  Nuestros Productos
                </Link>
                <div
                  aria-labelledby='mainNavHome'
                  className='dropdown-menu dropdown-menu-clean dropdown-menu-hover'
                >
                  <ul className='list-unstyled m-0 p-o'>
                    <li className='dropdown-item'>
                      <Link
                        className='dropdown-link'
                        to='/samsung-care-plus/devices'
                      >
                        Samsung Care + Dispositivos Móviles
                      </Link>
                    </li>
                    <li className='dropdown-item'>
                      <Link
                        className='dropdown-link'
                        to='/samsung-care-plus/electro'
                      >
                        Samsung Care + Electrodoméstico
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link js-ajax'
                  href='https://files-statics-protegeme.s3.amazonaws.com/Politica+deprotecciondedatos-min.pdf'
                  target='_blank'
                  rel='noreferrer'
                  style={{ whiteSpace: "nowrap" }}
                >
                  Política de Protección
                </a>
              </li>
              <li className='nav-item dropdown active'>
                <div
                  className='nav-link dropdown-toggle'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Clausulado General
                </div>
                <div
                  aria-labelledby='mainNavHome'
                  className='dropdown-menu dropdown-menu-clean dropdown-menu-hover'
                >
                  <ul className='list-unstyled m-0 p-o'>
                    <li className='dropdown-item'>
                      <a
                        className='nav-link js-ajax'
                        href='https://files-statics-protegeme.s3.amazonaws.com/SAMSUNG/SEGURO+EQUIPO+TELEFONIA+MOVIL-+SAMSUNG+CARE+%2B+CAMPA%C3%91A2.pdf'
                        target='_blank'
                        rel='noreferrer'
                        style={{ whiteSpace: "nowrap" }}
                      >
                        Dispositivos Móviles
                      </a>
                    </li>
                    <li className='dropdown-item'>
                      <a
                        className='nav-link js-ajax'
                        href='https://files-statics-protegeme.s3.amazonaws.com/SAMSUNG/SEGURO+HOGAR+PLUS+CONTENIDOS+-+ELECTRODOMESTICOS+-+SAMSUNG+CARE+%2B+CAMPA%C3%91A2.pdf'
                        target='_blank'
                        rel='noreferrer'
                        style={{ whiteSpace: "nowrap" }}
                      >
                        Electrodoméstico
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default NavbarSamsungCarePlus;
