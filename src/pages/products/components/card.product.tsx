import React from "react";

import { Product } from "./products.component";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

const CardProduct = ({ buttonTitle, secureImage, sponsorImage }: Product) => {
  return (
    <div className="my-4 flex flex-col items-center justify-center rounded-2xl bg-white p-10 py-20 shadow-xl">
      <div className="mb-10 grid grid-cols-2 gap-4 ">
        {secureImage}
        {sponsorImage}
      </div>
      <PrimaryButton
        title={buttonTitle}
        className="rounded-xl bg-buttonPrimary text-white"
      />
    </div>
  );
};

export default CardProduct;
