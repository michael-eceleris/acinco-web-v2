import React from "react";
import { Link } from "react-router-dom";

import LogoAcincoWhite from "../../assets/images/logo_acinco_white.png";
import { ReactComponent as LogoFacebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as LogoTwitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as LogoLinkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as LogoInstagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as LogoYoutube } from "../../assets/icons/youtube.svg";
import { ReactComponent as LogoCall } from "../../assets/icons/call-calling.svg";
import { ReactComponent as LogoSend } from "../../assets/icons/send_newletter.svg";
import Input from "../inputs/Input";

const Footer = () => {
  return (
    <section className="flex w-full justify-center bg-backgroundSecondary p-0 2xl:h-80">
      <div className="container w-full justify-center py-20 text-whiteSoft xl:px-24 2xl:px-20">
        <div className="mx-10 grid pb-10  md:mx-0 xl:grid-cols-7 2xl:grid-cols-8">
          <div className="col-span-1 flex align-top ">
            <img src={LogoAcincoWhite} alt="logo_acinco" className="max-h-20" />
          </div>
          <div className="xl:col-span-2 2xl:col-span-3">
            <p>Conéctese con nostros a través de nuestras redes sociales</p>
            <div className="mt-2 flex">
              <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-full border border-whiteSoft bg-transparent ">
                <LogoFacebook />
              </div>
              <div className="mx-2 flex h-10 w-10 items-center justify-center rounded-full border border-whiteSoft bg-transparent ">
                <LogoLinkedin />
              </div>
              <div className="mx-2 flex h-10 w-10 items-center justify-center rounded-full border border-whiteSoft bg-transparent ">
                <LogoTwitter />
              </div>
              <div className="mx-2 flex h-10 w-10 items-center justify-center rounded-full border border-whiteSoft bg-transparent ">
                <LogoInstagram />
              </div>
              <div className="mx-2 flex h-10 w-10 items-center justify-center rounded-full border border-whiteSoft bg-transparent ">
                <LogoYoutube />
              </div>
            </div>
          </div>
          <div className="xl:col-span-2 2xl:col-span-2">
            <div className="grid grid-cols-2">
              <div>
                <p className="text-md font-semibold">Enlaces</p>
                <ul>
                  <li className="my-1 text-sm font-light">
                    <Link to="/">Inicio</Link>
                  </li>
                  <li className="my-1 text-sm font-light">
                    <Link to="/productos">Productos</Link>
                  </li>
                  <li className="my-1 text-sm font-light">
                    <Link to="/nosotros">Nosotros</Link>
                  </li>
                  <li className="my-1 text-sm font-light">
                    {" "}
                    <Link to="/tramites-y-reclamaciones">Reclamaciones</Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-md font-semibold">Legal</p>

                <ul>
                  <li className="my-1 text-sm font-light">
                    Términos y condiciones
                  </li>
                  <li className="my-1 text-sm font-light">
                    Política de privacidad
                  </li>
                  <li className="my-1 text-sm font-light">Cookies</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="xl:col-span-2 2xl:col-span-2">
            <div className="mb-2 flex">
              <LogoCall className="mt-3 w-10" />
              <div className="ml-3">
                <p className="text-md font-medium">Necesita ayuda?</p>
                <p className="text-md font-medium">
                  (601)4898599 - 01 8000 513 323
                </p>
              </div>
            </div>
            <p className="text-md font-medium">Newletter</p>
            <Input
              placeholder="Su correo electrónico"
              classNameContainer="w-full mt-2"
              classNameInput="w-full pr-20"
              classNameIcon="bg-blueFinance w-10 flex justify-center items-center"
              icon={<LogoSend />}
            />
          </div>
        </div>
        <div className="w-full border-t pt-2 text-center">
          <p>©2023 Acinco S.A.S. Todos los derechos reservados</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
