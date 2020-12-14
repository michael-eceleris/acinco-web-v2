import React from "react";
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
                <div className="ml-4 mr-4">
                  <h3 className="h5">Obtén primero un plan pospago.</h3>
                  <p className="mb-6 mb-md-8">
                    Obtén un plan pospago en Tigo o en otro operador, y con
                    gusto te informaremos los beneficios que adquieres
                  </p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="w--50 fi mdi-filter_2 fs--25 mt--n6 text-success"></div>
                <div className="d-flex row ml--1">
                  <div className="ml-4 mr-4">
                    <h3 className="h5">Descarga la app.</h3>
                    <p className="mb-2">
                      Descarga la app de Protección Móvil y realiza el proceso
                      de registro, esta disponible en la App Store y Google Play
                      (Play Store)
                    </p>
                  </div>
                  <div class="row ml--350">
                    <a
                      href="https://itunes.apple.com/co/app/protecci%C3%B3n-m%C3%B3vil-seguro/id1116274602?mt=8"
                      target="_blank"
                      className="btn btn-sm transition-hover-top mb-2 rounded-circle"
                      rel="noreferrer"
                    >
                      <i className="fi fi-brand-apple fs--30 "></i>
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.hidesoft.tigo&amp;hl=es"
                      target="_blank"
                      className=" btn btn-sm transition-hover-top mb-2 rounded-circle"
                      rel="noreferrer"
                    >
                      <i className="fi fi-brand-android fs--30"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="d-flex mb-3">
                <div className="w--50 fi mdi-filter_3 fs--25 mt--n6 text-success"></div>

                <div className="ml-4 mr-4">
                  <h3 className="h5">Confirmación.</h3>
                  <p className="mb-6 mb-md-8">
                    Te enviaremos un mensaje de texto (SMS) al número de
                    télefono que registraste, y realiza la confirmación
                    respectiva
                  </p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="w--50 fi mdi-filter_4 fs--25 mt--n6 text-success"></div>

                <div className="ml-4 mr-4">
                  <h3 className="h5">Validación</h3>
                  <p className="mb-6 mb-md-8">
                    Cuando validemos tu información te enviaremos el certificado
                    del seguro a tu correo electrónico, y
                    <span className="font-weight-medium">
                      {" "}
                      ¡Listo ya tienes asegurado tu dispositivo!
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
