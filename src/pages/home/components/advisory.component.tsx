import React from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import Input from "../../../components/inputs/Input";

const AdvisorySection = () => {
  return (
    <section className="flex w-full  justify-center p-0">
      <div className="container w-full py-10 xl:px-24 2xl:px-20">
        <div className="border-gray grid gap-4 border-t-2 py-10 xl:grid-cols-7 2xl:grid-cols-9">
          <div className="mb-5 xl:col-span-4 2xl:col-span-5">
            <h2 className="text-left text-4xl font-bold">
              Solicita una asesoría para crear la solución adecuada para tus
              clientes
            </h2>
          </div>
          <div className="ml-auto xl:col-span-3 2xl:col-span-4 ">
            <p className="text-left text-lg font-normal text-secondary">
              Construimos productos y servicios a su medida con nuestra flexible
              plataforma tecnológica y de servicios.
            </p>
          </div>
          <Input
            placeholder="Nombre"
            classNameContainer="2xl:col-span-4 xl:col-span-3"
            classNameInput="w-full text-textBlack"
          />
          <Input
            placeholder="Email"
            classNameContainer="2xl:col-span-4 xl:col-span-3"
            classNameInput="w-full text-textBlack"
          />
          <PrimaryButton
            title="Pedir asesoría"
            className="bg-buttonBlack rounded-3xl font-normal text-white xl:col-span-1 2xl:col-span-1"
          />
        </div>
      </div>
    </section>
  );
};
export default AdvisorySection;
