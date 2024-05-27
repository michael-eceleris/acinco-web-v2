import React from "react";
import LogoAutogestion from "../../../assets/images/autogestion_image.png";
import LogoReparaciones from "../../../assets/images/repair_cellphone.png";
import LogoCallCenter from "../../../assets/images/call_center.png";
import LogoLogistica from "../../../assets/images/logistic_home.png";

const OperationSection = () => {
  return (
    <section className="flex w-full justify-center p-0">
      <div className="container w-full px-20 py-20">
        <h2 className="mb-14 text-center text-4xl font-semibold">
          OPERATIVIDAD
        </h2>
        <div className="my-5 grid grid-cols-1 gap-20 md:grid-cols-2">
          <div className="flex">
            <div className="mx-2 hidden md:block">
              <img
                src={LogoAutogestion}
                className="img-fluid max-h-20 w-24"
                alt="autogestion_imagen"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">
                <span className="text-textSecondary">Autogestión</span> de
                reclamaciones
              </h3>
              <p className="my-2 text-base font-normal">
                Con nuestra tecnología, generar una reclamación es tan sencillo
                como entrar a nuestra página y proveer una corta información.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mx-2 hidden md:block">
              <img
                src={LogoReparaciones}
                className="img-fluid max-h-20 w-24"
                alt="reparaciones_imagen"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">
                <span className="text-textSecondary">Reparaciones</span>{" "}
                avaladas
              </h3>
              <p className="my-2 text-base font-normal">
                Todos nuestros proveedores de reparaciones y diagnósticos son
                autorizados por las principales marcas tecnológicas.
              </p>
            </div>
          </div>
        </div>
        <div className="my-5 grid grid-cols-1 gap-20 md:grid-cols-2">
          <div className="flex ">
            <div className="mx-2 hidden md:block">
              <img
                src={LogoCallCenter}
                className="img-fluid w-40  md:max-h-20 md:w-24"
                alt="callcenter_imagen"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">
                <span className="text-textSecondary">Call</span> center
              </h3>
              <p className="my-2 text-base font-normal">
                Contamos con un equipo especializado y con conocimiento técnico
                para prestar el servicio al cliente, con más de 32 posiciones de
                soporte.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mx-2 hidden md:block">
              <img
                src={LogoLogistica}
                className="img-fluid max-h-20 w-24"
                alt="logistica_imagen"
              />
            </div>
            <div>
              <h3 className=" text-2xl font-semibold">Logística</h3>
              <p className="my-2 text-base font-normal">
                Garantizamos los mejores tiempos del mercado para la atención al
                asegurado sin importar su ubicación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationSection;
