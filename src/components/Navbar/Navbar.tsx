import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import clsx from "clsx";

const Navbar = () => {
  const TOP_OFFSET = 50;
  const [showBackgroundNavbar, setShowBackgroundNavbar] =
    useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const { pathname } = useLocation();
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

  const handleUnderlineNav = (path: string): string => {
    if (path === pathname) {
      return "underline underline-offset-4";
    } else {
      return "";
    }
  };

  return (
    <nav
      className={`fixed z-50 w-full ${showBackgroundNavbar ? "bg-white" : "bg-transparent"}`}
    >
      <div className="max-w-screen flex ">
        <div className="flex w-full items-center justify-between px-5 md:justify-center md:px-0 xl:w-2/6 2xl:w-2/6">
          <Link to="/">
            <div className="h-20 w-20 pt-2 md:h-20 md:w-20 xl:h-28 xl:w-24">
              <img alt="acinco_logo" src={Logo} />
            </div>
          </Link>
          <button
            type="button"
            className="text-gray-500 hover:bg-gray-100 focus:ring-gray-200  focus:ring-gray-200 h-12 w-12 items-center justify-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 md:hidden"
            onClick={() => setShowMobileMenu((prevState) => !prevState)}
          >
            <svg
              style={{ marginTop: 0, width: "100%" }}
              width="25"
              viewBox="0 0 20 20"
            >
              <path
                fill="#003272"
                d="M 19.9876 1.998 L -0.0108 1.998 L -0.0108 -0.0019 L 19.9876 -0.0019 L 19.9876 1.998 Z"
              ></path>
              <path
                fill="#003272"
                d="M 19.9876 7.9979 L -0.0108 7.9979 L -0.0108 5.9979 L 19.9876 5.9979 L 19.9876 7.9979 Z"
              ></path>
              <path
                fill="#003272"
                d="M 19.9876 13.9977 L -0.0108 13.9977 L -0.0108 11.9978 L 19.9876 11.9978 L 19.9876 13.9977 Z"
              ></path>
              <path
                fill="#003272"
                d="M 19.9876 19.9976 L -0.0108 19.9976 L -0.0108 17.9976 L 19.9876 17.9976 L 19.9876 19.9976 Z"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${showMobileMenu ? "absolute left-1/3 z-50 mb-5 mt-20 w-2/3 items-center justify-center rounded-md bg-white md:mt-10" : "hidden"}  mb-5 md:mt-10 md:block md:w-full md:justify-center xl:flex xl:w-4/6 2xl:w-4/6`}
        >
          <div className="md:w-1/2 ">
            <ul className="flex flex-col items-center justify-center px-10 md:flex-row md:justify-between 2xl:justify-evenly">
              <li
                className={clsx([
                  "my-5 mt-1 hover:underline hover:underline-offset-4 md:my-0",
                  handleUnderlineNav("/"),
                ])}
              >
                <Link to="/">La Solución</Link>
              </li>
              <li
                className={clsx([
                  "my-5 mt-1 hover:underline hover:underline-offset-4 md:my-0",
                  handleUnderlineNav("/productos"),
                ])}
              >
                <Link to="/productos">Servicios</Link>
              </li>
              <li
                className={clsx([
                  "my-5 mt-1 hover:underline hover:underline-offset-4 md:my-0",
                  handleUnderlineNav("/nosotros"),
                ])}
              >
                <Link to="/nosotros">Nosotros</Link>
              </li>
              <li className="h-9 rounded-lg bg-buttonPrimary px-3 py-1 font-bold text-white">
                <Link to="/tramites-y-reclamaciones">Reclamaciones</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
