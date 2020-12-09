import React from "react";
import MobileSecure from "../../../assets/images/mobile-secure.png";

const Banner = () => {
  return (
    <section className="p-0">
      <div className="container min-h75vh d-middle pt-5">
        <div className="row text-center-xs">
          <div
            className="col-12 col-md-6 order-2 order-md-1 pb-5"
            data-aos="fade-in"
            data-aos-delay="0"
          >
            <div className="mt-5">
              <h1 className="font-weight-light mb-4">
                <span className="font-weight-medium">Protección Total</span>
              </h1>
              <p className="lead">
                Este producto cubre hurto calificado, hurto simple, daño total
                accidentaly fractura de pantalla. Este seguro aplica para
                clientes que adquieren los planes Pospago 5.3, plan Bussiness
                Combo B2B Voz y SMS Nacional ilimitado +35GB y/o Combo B2B Voz y
                SMS Nacional ilimitado +50GB, sin ningún costo adicional
              </p>
              <p>Aplican términos y condiciones.</p>
            </div>
          </div>
          <div
            className="col-12 col-md-6 order-2 order-md-1 pb-5 d-middle"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            <img
              width="400"
              className="img-fluid lazy "
              src={MobileSecure}
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
