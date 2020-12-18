import React from "react";
const HowToActive = () => {
  return (
    <>
      <section className="bg-gradient-light pt-2">
        <div className="container">
          <div className="text-center my-7">
            <h2 className="h1 font-weight-normal">
              Obtén este plan en 2 sencillos pasos
            </h2>
          </div>
          <div className="row">
            <div className="col-12 col-md-5 offset-md-1">
              <div className="d-flex mb-3">
                <div className="w--50 fi mdi-filter_1 fs--25 mt--n6 text-success"></div>
                <div className="ml-4 mr-4">
                  <h3 className="h5">
                    Obtén primero un plan pospago y un dispositivo.
                  </h3>
                  <p className="mb-6 mb-md-8">
                    Adquiere tu plan y tu dispositivo en una tienda Tigo, ten en
                    cuenta que te dispositivo debe estar asociado a tu línea
                    principal.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="d-flex mb-3">
                <div className="w--50 fi mdi-filter_2 fs--25 mt--n6 text-success"></div>
                <div className="d-flex row ml--1">
                  <div className="ml-4 mr-4">
                    <h3 className="h5">Solicita la activación.</h3>
                    <p className="mb-2">
                      Solicita la activación del seguro por gama, para tu
                      dispositivo ten en cuenta que a partir de la fecha que
                      adquieras tu dispositivo tienes un periodo maximo de tres
                      (3) meses para contratar este seguro.
                    </p>
                  </div>
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
