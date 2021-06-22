import React from "react";
import Shield from "../../assets/icons/shield.svg";
import RepairPhone from "../../assets/icons/cellphone.svg";
import Bandit from "../../assets/icons/bandit.svg";
import BanditSimple from "../../assets/icons/banditSimple.svg";
import BrokenPhone from "../../assets/icons/brokenphone.svg";

const Coverages = () => {
  return (
    <>
      <section className='bg-white'>
        <div className='container'>
          <div className='text-center mb--100'>
            <h3 className='h3 ml-2 mb-1 mt-2 text-center'>Coberturas</h3>
          </div>
          <div className='bg-white pt-1 rounded overflow-hidden'>
            <div className='row col-border'>
              <div className='col-12 col-md-6 col-lg-4 mb-4'>
                <div className='card p-4 b-0 h-100 mt-1'>
                  <div className='d-middle mb-3'>
                    <img width='140' src={Bandit} alt='hurto_calificado' />
                  </div>
                  <h5>Hurto Calificado</h5>
                  <div className='card-body pl-0 pr-0 text-gray-600 '>
                    <p className='lead fs--18 text-justify hypens'>
                      Apoderarse sin consentimiento de tu bien asegurado con
                      violencia, colocándote en condiciones de indefensión o
                      inferioridad.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-6 col-lg-4 mb-4'>
                <div className='card p-4 b-0 h-100 mt-1'>
                  <div className=' d-middle mb-3'>
                    <img width='140' src={BanditSimple} alt='hurto_simple' />
                  </div>
                  <h5>Hurto Simple</h5>
                  <div className='card-body pl-0 pr-0 text-gray-600 justify-content-between'>
                    <div className='h-75'>
                      <p className='lead fs--18 text-justify'>
                        Apoderamiento ilegítimo de tu bien asegurado realizado
                        sin fuerza, ni violencia e intimidación. No incluye
                        pérdida, extravío del producto en un descuido.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-6 col-lg-4 mb-4'>
                <div className='card p-4 b-0 h-100'>
                  <div className=' d-middle mb-3'>
                    <img
                      width='120'
                      src={BrokenPhone}
                      alt='daño_total_accidental'
                    />
                  </div>
                  <h5 style={{ whiteSpace: "nowrap" }}>
                    Daño Total Accidental
                  </h5>
                  <div className='card-body pl-0 pr-0 text-gray-600 justify-content-between'>
                    <div className='h-75'>
                      <p className='lead fs--18 text-justify'>
                        Daño físico de tu bien asegurado, producto de un
                        accidente y que este impida el funcionamiento de tu
                        equipo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=' row col-border justify-content-center'>
                <div className='col-12 col-md-12 col-lg-4 mb-4'>
                  <div className='card p-4 b-0 h-100 mt-1'>
                    <div className='d-middle mb-3'>
                      <img
                        width='140'
                        src={RepairPhone}
                        alt='hurto_calificado'
                      />
                    </div>
                    <h5>Reparación de Pantalla</h5>
                    <div className='card-body pl-0 pr-0 text-gray-600 '>
                      <p className='lead fs--18 text-justify'>
                        Fractura o fisura de la pantalla de tu equipo móvil en
                        caso de accidente.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-md-12 col-lg-4 mb-4'>
                  <div className='card p-4 b-0 h-100 mt-1'>
                    <div className=' d-middle mb-3'>
                      <img width='140' src={Shield} alt='hurto_simple' />
                    </div>
                    <h5>Garantía Extendida</h5>
                    <div className='card-body pl-0 pr-0 text-gray-600 justify-content-between'>
                      <div className='h-75'>
                        <p className='lead fs--18 text-justify'>
                          Servicio adicional que extiende el plazo de la
                          garantía original del fabricante del equipo movíl por
                          un período determinado.
                        </p>
                      </div>
                    </div>
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
