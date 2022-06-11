import React from "react";

import { ReactComponent as User } from "../../assets/icons/user.svg";
import RepairPhone from "../../assets/icons/cellphone.svg";
import Logo from "../../assets/images/Logo.png";

const Coverages = () => {
  return (
    <>
      <section className='bg-white'>
        <div className='container'>
          <div className='text-center mb--100'>
            <h2 className='font-weight-light mb-4 text-center'>
              Detalles del plan Asistencia De Fractura de Pantalla
            </h2>
            <h3 className='h3 ml-2 mb-1 mt-2 text-center'>
              BENEFICIOS EXCLUSIVOS
            </h3>
          </div>
          <div className='bg-white pt-1 rounded overflow-hidden'>
            <div className='row justify-content-center'>
              <div className='col-12 col-md-12 col-lg-8 mb-4'>
                <div className='card p-4 b-0 h-100 flex-lg-row flex-md-column-reverse'>
                  <div className='card-body pl-0 pr-0 text-gray-600 justify-content-between'>
                    <div className='h-75'>
                      <p className='lead fs--18 text-justify'>
                        Cobertura de un (1) evento por doce (12) meses de
                        vigencia desde la compra de PROTECT MY PHONE GARANTÍA
                        EXTENDIDA
                      </p>
                    </div>
                  </div>
                  <div className='d-middle mb-3 mr-4 ml-4'>
                    <User
                      fill='#003272'
                      className='m--0'
                      style={{ width: "130px", height: "130px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-12 col-md-12 col-lg-8 mb-4'>
                <div className='card p-4 b-0 h-100 flex-lg-row flex-md-column'>
                  <div className=' d-middle mb-3 mr-4'>
                    <img width='140' src={RepairPhone} alt='hurto_simple' />
                  </div>
                  <div className='card-body pl-0 pr-0 text-gray-600 justify-content-between'>
                    <div className='h-75'>
                      <p className='lead fs--18 text-justify'>
                        Cubre fisura o quiebre de cristal o display del equipo
                        de telefonía móvil del usuario de PROTECT MY PHONE,
                        siempre que dichos daños ocurran durante la vigencia de
                        la asistencia y se generen de forma accidental.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-12 col-md-12 col-lg-8 mb-4'>
                <div className='card p-4 b-0 h-100 flex-lg-row flex-md-column-reverse'>
                  <div className='card-body pl-0 pr-0 text-gray-600 justify-content-between'>
                    <div className='h-75'>
                      <p className='lead fs--18 text-justify'>
                        Asistencia en la fractura de pantalla de equipos de
                        telefonía móvil provista por ACINCO S.A.S.
                      </p>
                    </div>
                  </div>
                  <div className='d-middle mb-3 mr-4 ml-4'>
                    <img
                      width='140'
                      height='120'
                      alt='logo_acinco'
                      src={Logo}
                    />
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

export default Coverages;
