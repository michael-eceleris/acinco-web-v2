import React, { ReactElement, ReactNode } from "react";
import CardProduct from "./card.product";

import LogoAxa from "../../../assets/images/axa_colpatria.png";
import LogoSamsungCarePlus from "../../../assets/images/samsung_care.png";
import LogoCellya from "../../../assets/images/celya.png";
import LogoMotorola from "../../../assets/images/Motorola_Logo_White.png";
import LogoSBS from "../../../assets/images/sbs_white_black.png";
import LogoCardif from "../../../assets/images/logo_cardif.png";
import LogoItau from "../../../assets/images/itau.webp";
import LogoScotiabank from "../../../assets/images/scotiabank.png";

export interface Product {
  nameProduct: string;
  buttonTitle: string;
  buttonNavPath: string;
  secureImage: ReactElement | ReactNode;
  sponsorImage: ReactElement | ReactNode;
}

const ProductsComponent = () => {
  const products: Product[] = [
    {
      nameProduct: "axa-samsung",
      buttonTitle: "Conoce Más",
      buttonNavPath: "/",
      secureImage: (
        <img src={LogoAxa} alt="axa_colpatria" className="mx-auto max-h-20" />
      ),
      sponsorImage: (
        <img
          src={LogoSamsungCarePlus}
          alt="samsung_care_plus"
          className="mx-auto max-h-14"
        />
      ),
    },
    {
      nameProduct: "axa-cellya",
      buttonTitle: "Haz Tu Reclamación",
      buttonNavPath: "/",
      secureImage: (
        <img src={LogoAxa} alt="axa_colpatria" className="mx-auto max-h-20" />
      ),
      sponsorImage: (
        <img src={LogoCellya} alt="cellya" className="mx-auto max-h-16" />
      ),
    },
    {
      nameProduct: "axa-motorola",
      buttonTitle: "Haz Tu Reclamación",
      buttonNavPath: "/",
      secureImage: (
        <img src={LogoAxa} alt="axa_colpatria" className="mx-auto max-h-20" />
      ),
      sponsorImage: (
        <img src={LogoMotorola} alt="motorola" className="mx-auto max-h-20" />
      ),
    },
    {
      nameProduct: "cardif-scotiabank",
      buttonTitle: "Conoce Más",
      buttonNavPath: "/",
      secureImage: (
        <img src={LogoCardif} alt="cardif" className="mx-auto max-h-14" />
      ),
      sponsorImage: (
        <img
          src={LogoScotiabank}
          alt="scotiabank"
          className="mx-auto max-h-14"
        />
      ),
    },
    {
      nameProduct: "sbs-itau",
      buttonTitle: "Conoce Más",
      buttonNavPath: "/",
      secureImage: (
        <img src={LogoSBS} alt="sbs" className="mx-auto my-auto max-h-16" />
      ),
      sponsorImage: (
        <img src={LogoItau} alt="itau" className="mx-auto my-auto max-h-24" />
      ),
    },
  ];
  return (
    <section className="flex w-full justify-center p-0">
      <div className="container w-full px-20 py-24">
        <div className="grid grid-cols-2 gap-10">
          {products.map((product, index) => (
            <CardProduct key={`${product.nameProduct}_${index}`} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsComponent;
