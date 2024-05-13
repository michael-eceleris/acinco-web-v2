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
    <section className="bg-backgroundSecondary flex w-full justify-center p-0 2xl:h-80">
      <div className="text-whiteSoft container w-full justify-center py-20 xl:px-24 2xl:px-20">
        <div className="grid pb-10 xl:grid-cols-7  2xl:grid-cols-8">
          <div className="col-span-1 flex align-top ">
            <img src={LogoAcincoWhite} alt="logo_acinco" className="max-h-20" />
          </div>
          <div className="xl:col-span-2 2xl:col-span-3">
            <p>Conéctese con nostros a través de nuestras redes sociales</p>
            <div className="mt-2 flex">
              <div className="border-whiteSoft mr-2 flex h-10 w-10 items-center justify-center rounded-full border bg-transparent ">
                <LogoFacebook />
              </div>
              <div className="border-whiteSoft mx-2 flex h-10 w-10 items-center justify-center rounded-full border bg-transparent ">
                <LogoLinkedin />
              </div>
              <div className="border-whiteSoft mx-2 flex h-10 w-10 items-center justify-center rounded-full border bg-transparent ">
                <LogoTwitter />
              </div>
              <div className="border-whiteSoft mx-2 flex h-10 w-10 items-center justify-center rounded-full border bg-transparent ">
                <LogoInstagram />
              </div>
              <div className="border-whiteSoft mx-2 flex h-10 w-10 items-center justify-center rounded-full border bg-transparent ">
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
                    <Link to="/">Inicio</Link>{" "}
                  </li>
                  <li className="my-1 text-sm font-light">Productos</li>
                  <li className="my-1 text-sm font-light">
                    <Link to="/aboutus">Nosotros</Link>
                  </li>
                  <li className="my-1 text-sm font-light">Reclamaciones</li>
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
          <p>©2023 ACincoSAS. Todos los derechos reservados</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
