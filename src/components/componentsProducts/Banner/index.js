import React from "react";
import TeamWork from '../../../assets/icons/teamwork.svg';

const Banner = () => {
  return ( 
    <section className="p-0">
        <div className="container min-h75vh d-middle pt-5">
          <div className="row text-center-xs">
            <div className="col-12 col-md-6 order-2 order-md-1 pb-5" data-aos="fade-in" data-aos-delay="0">
              <div className="mt-7">
                <h1 className="font-weight-light mb-4 fs--60">
                  <span className="font-weight-medium">Bienvenido</span>
                </h1>
                <p className="lead">
                  PORQUE TENERLO TE COSTO ESFUERZO, ASEGURARLO TE CUESTA POCO!
                </p>
                <p className="lead">
                  Aquí puedes conocer los productos de seguros que tenemos disponibles para ti como usuario de Colombia Móvil/Tigo. Podrás obtener información, hacer tu reclamación o consultar el estado de la misma.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 order-2 order-md-1 pb-5" data-aos="fade-in" data-aos-delay="200">
              <img width="600" height="400" className="img-fluid lazy " src={TeamWork} alt="image" />
            </div>
          </div>
        </div>
      </section>
   );
}
 
export default Banner;