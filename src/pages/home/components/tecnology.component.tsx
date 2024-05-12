import React from "react";
import { ReactComponent as Logo } from "../../../assets/icons/check-square.svg";
import ImgCode from "../../../assets/images/code_home.png";
import ImgPtgmv2 from "../../../assets/images/ptgmv2_home.png";

const TecnologySection = () => {
  return (
    <section className="flex w-full  justify-center p-0">
      <div className="container w-full px-20 py-20 xl:ml-16 2xl:ml-36 ">
        <div className="ml-10 w-11/12 rounded-2xl bg-white p-10 py-28 shadow-2xl">
          <div className="grid grid-cols-2 gap-10">
            <div className="relative h-full w-full">
              <div className="absolute -left-36 -top-10">
                <img src={ImgCode} alt="code_img" className="max-w-md" />
              </div>
              <div className="absolute -left-10 -top-40">
                <img
                  className="max-w-md rounded-2xl shadow-lg"
                  src={ImgPtgmv2}
                  alt="software_img"
                />
              </div>
            </div>
            <div className="">
              <h3 className="my-2 text-2xl font-bold">
                Tecnología: PROTÉGEME V2 ®
              </h3>
              <p className="my-2 text-base font-normal">
                Este es el software que impulsa a A5
              </p>
              <h3 className="my-2 text-2xl font-bold">
                Reúne la información y permite gestionar:{" "}
              </h3>
              <ul>
                <li className="flex">
                  <Logo className="mr-2" />
                  Las pólizas creadas
                </li>
                <li className="flex">
                  <Logo className="mr-2" />
                  La información de los asegurados{" "}
                </li>
                <li className="flex">
                  <Logo className="mr-2" />
                  Las reclamaciones{" "}
                </li>
                <li className="flex">
                  <Logo className="mr-2" />
                  Las peticiones para verificar la asegurabilidad de un celular
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TecnologySection;
