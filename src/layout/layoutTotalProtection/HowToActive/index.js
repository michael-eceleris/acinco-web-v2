import React from "react";
import FirstStep from "../../../assets/images/comoactivarlo_1.png";
import SecondStep from "../../../assets/images/comoactivarlo_2.png";
import ThirdStep from "../../../assets/images/comoactivarlo_3.png";
import FourthStep from "../../../assets/images/comoactivarlo_4.png";
const HowToActive = () => {
  return (
    <section className="pt-3">
      <div className="container">
        <h2 className="h1 mb-5">¿Como activarlo?</h2>
        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="h-100 bg-white">
              <div className=" px-4 pb-5">
                <div className="row d-flex flex-wrap align-items-center">
                  <div className="col-6 col-md-3">
                    <div className="d-middle">
                      <img src={FirstStep} height="200px" />
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className=" bg-success text-white w--60 h--60 mb-1 border border-light rounded-circle d-inline-flex justify-content-center align-items-center">
                      <h1 className="font-weight-normal">
                        <span className="d-block-xs">1</span>
                      </h1>
                    </div>
                    <p className="lead text-justify">
                      Adquiere tu plan pospago 5.3 + equipo comprado en Tigo o
                      en otro operador y/o retail. Un asesor te informará los
                      beneficios del seguro.
                    </p>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="d-middle">
                      <img src={SecondStep} height="180px" />
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className=" bg-success text-white w--60 h--60 mb-1 border border-light rounded-circle d-inline-flex justify-content-center align-items-center">
                      <h1 className="font-weight-normal">
                        <span className="d-block-xs">2</span>
                      </h1>
                    </div>
                    <p className="lead text-justify mb-5">
                      Descarga el App de Protección Móvil y realiza el proceso
                      de registro diligenciando el formulario.
                    </p>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="d-middle ml-5">
                      <img src={ThirdStep} height="170px" />
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className=" bg-success text-white w--60 h--60 mb-1 border border-light rounded-circle d-inline-flex justify-content-center align-items-center">
                      <h1 className="font-weight-normal">
                        <span className="d-block-xs">3</span>
                      </h1>
                    </div>
                    <p className="lead text-justify mb-6">
                      Recibirás un SMS al número móvil confirmando el registro.
                    </p>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="d-middle">
                      <img src={FourthStep} height="150px" />
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className=" bg-success text-white w--60 h--60 mb-1 border border-light rounded-circle d-inline-flex justify-content-center align-items-center">
                      <h1 className="font-weight-normal">
                        <span className="d-block-xs">4</span>
                      </h1>
                    </div>
                    <p className="lead text-justify">
                      Una vez validada la información te enviaremos el
                      certificado individula de seguros a tu correo electrónico.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToActive;
