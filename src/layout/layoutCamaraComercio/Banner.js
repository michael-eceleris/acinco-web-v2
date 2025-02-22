import React from "react";
import LogoAfiliados from "../../assets/images/logo_afiliados.png";
import PhoneRepair from "../../assets/images/protect.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className='p-0 bg-white'>
      <svg
        className='absolute-full z-index-0 show2'
        width='100%'
        height='100%'
        viewBox='0 0 1920 90'
        preserveAspectRatio='none'
      >
        <path
          fill='rgba(0,50,114,1)'
          d='M1920,0C1217,0,120.574,155.567,0,0v90h1920V0z'
        ></path>
      </svg>
      <div className='container min-h75vh d-middle pt-5'>
        <div className='row text-center-xs'>
          <div
            className='col-12 col-md-6 order-2 order-md-1 pb--180 pl-md-3'
            data-aos='fade-in'
            data-aos-delay='0'
          >
            <div className='mt-2 ml-4'>
              <img
                height='90'
                className='ml-0 mt-1 mb-3'
                src={LogoAfiliados}
                alt='logo_afiliados'
              />
              <p className='lead mb-3 fs--17'>
                Gracias por seguir siendo parte del Círculo de Afiliados CCB.
                <br />
                ¡Ser Afiliado te brinda beneficios exclusivos que solo los
                mejores tienen!
              </p>
              <p className='lead mb--5 fs--17'>
                Al cumplir con la renovación de tu matrícula mercantil y
                membresía oportunamente, te regalamos el 80% de la reparación de
                la pantalla de tu celular. Regístrate y protege tu celular por 9
                meses. Este servicio es ofrecido por Acinco SAS.
              </p>
              <Link
                className='btn-link text-decoration-none'
                to='/camara-comercio/terminos-condiciones'
              >
                <p className='fs--14 text-gray-800'>
                  * Aplican términos y condiciones.
                </p>
              </Link>
            </div>
          </div>
          <div className='col-12 col-md-6 order-2 order-md-1 d-middle show2'>
            <img
              width='300'
              className='img-fluid lazy '
              src={PhoneRepair}
              alt='logo_camara_comercio'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
