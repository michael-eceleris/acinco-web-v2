import React from "react";
import FraudLogo from "../../../assets/images/fraud_prevention_home.png";
import VerifyLogo from "../../../assets/images/chat_cellphone.png";
import SecureLogo from "../../../assets/images/conversation_cell.png";

const FraudelenceSection = () => {
  return (
    <section className="flex w-full justify-center p-0">
      <div className="container w-full py-20 xl:px-24 2xl:px-20">
        <h1 className="mb-20 text-center text-4xl font-bold">
          Construido para <span className="text-textSecondary">prevenir</span>{" "}
          el fraude
        </h1>
        <div className="mx-10 grid grid-cols-1 gap-10 md:mx-0 md:grid-cols-3">
          <div className="hidden md:block">
            <img src={FraudLogo} alt="fraud_logo_1" />
          </div>
          <div>
            <img
              className="hidden md:block"
              src={VerifyLogo}
              alt="fraud_logo_2"
            />
            <h2 className="my-5 text-2xl font-bold">
              <span className="text-textSecondary">Verificaciones</span> remotas
            </h2>
            <p className="text-xl font-normal text-textBlack">
              Protégeme V2 ® realiza 13 verificaciones remotamente que permiten
              determinar el estado del equipo celular usado para su activación
              de seguro o asistencia y, al momento de la reclamación, múltiples
              verificaciones que mitigan el fraude .
            </p>
          </div>
          <div>
            <img
              className="hidden md:block"
              src={SecureLogo}
              alt="fraud_logo_3"
            />
            <h2 className="my-5 text-2xl font-bold">
              <span className="text-textSecondary">Determinación</span> de
              asegurabilidad
            </h2>
            <p className="text-xl font-normal text-textBlack">
              Estas verificaciones para determinar el estado y asegurabilidad
              del equipo se pueden integrar al flujo de venta del seguro en la
              página del negocio que lo esté vendiendo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FraudelenceSection;
