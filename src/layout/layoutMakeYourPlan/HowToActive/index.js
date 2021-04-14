import React from "react";
import IconGooglePlayStore from "../../../assets/icons/google-play-brands.svg";
import IconApple from "../../../assets/icons/apple-brands.svg";
import IconProteccion from "../../../assets/images/proteccion-icon_v2020-01.png";
const HowToActive = () => {
  return (
    <>
      <section className="bg-gradient-light pt-2">
        <div className="container">
          <div className="text-center my-7">
            <h2 className="h1 font-weight-normal">
              Obtén este plan en 4 sencillos pasos
            </h2>
          </div>
          <div className="row">
            <div className="col-12 col-md-5 offset-md-1">
              <div className="d-flex mb-3">
                <div className="w--50 fi mdi-filter_1 fs--25 mt--n6 text-success"></div>
                <div className="ml-2 mr-4">
                  <h3 className="h5">Obtén primero un plan pospago.</h3>
                  <p className="mb-6 mb-md-8 text-justify">
                    Adquiere un Arma tu Plan en Tigo superior a $74.900.
                  </p>
                </div>
              </div>
              <div className="d-flex mb-3 mt-md-5 mt-xl-0">
                <div className="w--50 fi mdi-filter_2 fs--25 mt--n6 text-success pt-md-3 pt-xl-0"></div>
                <div className="d-flex row ml--1 pt-md-3 pt-xl-0">
                  <div className="ml-4 mr-4">
                    <h3 className="h5">Descarga la app.</h3>
                    <p className="mb-2 text-justify">
                      Descarga la app de Protección Móvil y realiza el proceso
                      de registro, está disponible en la App Store y Google Play
                      (Play Store).
                    </p>
                  </div>
                  <div className="ml-4 d-flex w-100 mt-2">
                    <img
                      src={IconProteccion}
                      alt="icon_proteccion_movil"
                      height="100"
                      className="imgcustom"
                    />
                    <div className="ml-auto mr-auto row align-content-center justify-content-around">
                      <a
                        href="https://itunes.apple.com/co/app/protecci%C3%B3n-m%C3%B3vil-seguro/id1116274602?mt=8"
                        className="btn btn-dark rounded-xl transition-hover-top d-flex btncustom"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img
                          src={IconApple}
                          height="35"
                          className="mr-2"
                          alt="logo_apple"
                        />
                        <span className="text-align-start w--100">
                          <span className="d-block line-height-1 fs--13">
                            Disponible en
                          </span>
                          <span className="d-block line-height-1 fs--18 pt-1">
                            App Store
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.hidesoft.tigo&amp;hl=es"
                        className="btn btn-dark rounded-xl transition-hover-top d-flex btncustom"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={IconGooglePlayStore}
                          height="30"
                          className=" mr-2"
                          alt="logo_play_store"
                        />
                        <span className="text-align-start w--100">
                          <span className="d-block line-height-1 fs--13">
                            Disponible en
                          </span>
                          <span className="d-block line-height-1 fs--18 pt-1">
                            Play Store
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-5">
              <div className="d-flex mb-3">
                <div className="w--50 fi mdi-filter_3 fs--25 mt--n6 text-success"></div>
                <div className="ml-4 mr-4">
                  <h3 className="h5">Activa Protección Móvil.</h3>
                  <p className="mb-6 mb-md-8 text-justify">
                    Ingresa a{" "}
                    <a
                      href="http://smart.tigo.com.co/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Smart App{" "}
                    </a>{" "}
                    desde tu télefono y activa Protección Móvil en la casilla de
                    Smart App.
                  </p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="w--50 fi mdi-filter_4 fs--25 mt--n6 text-success"></div>
                <div className="ml-4 mr-4">
                  <h3 className="h5">Confirmación y Validación.</h3>
                  <p className="mb-6 mb-md-8 text-justify">
                    Te enviaremos un mensaje de texto (SMS) al número que
                    registraste y confirma. Una vez validada la información te
                    enviaremos el certificado individual de seguros a tu correo
                    electrónico
                    <span className="font-weight-medium">
                      {" "}
                      ¡y listo, ya tienes asegurado tu dispositivo!
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowToActive;
