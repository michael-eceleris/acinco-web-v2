import React from "react";
import Security from "../../assets/icons/security.svg";
import RepairPhone from "../../assets/icons/cellphone.svg";

const Plans = () => {
  return (
    <section className='bg-white'>
      <div className='container'>
        <div className='text-center mb--30'>
          <h2 className='font-weight-light mb-4 text-center'>
            Detalles del plan Samsung
          </h2>
          <h3 className='h3 ml-2 mt-2 text-center'>Planes</h3>
        </div>
        <div className='bg-white rounded overflow-hidden'>
          <div className='row col-border'>
            <div className='col-12 col-md-12 col-lg-12 mb-0 ml-sm-0 ml-md-0 ml-xl-12 border-0 pr-xl-23 pr-sm-0 pr-md-0'>
              <div className='card p-4 b-0 h-100 flex-lg-row flex-md-column'>
                <div className=' d-middle mb-3'>
                  <img
                    width='160'
                    src={RepairPhone}
                    alt='plan_basico_samsung_care_plus'
                  />
                </div>
                <div className='card-body pl-0 pr-0 text-gray-600 justify-content-between ml-2'>
                  <h5 style={{ color: "black" }}>Plan Básico:</h5>
                  <div className='h-75'>
                    <p className='lead fs--18 text-justify'>
                      Cuentas con una cobertura para:
                    </p>
                    <ul>
                      <li>
                        <p className='lead fs--18 text-justify'>
                          Daño físico: cualquier daño accidental del producto.
                        </p>
                      </li>
                      <li>
                        <p className='lead fs--18 text-justify'>
                          Falla mecánica o eléctrica fuera de garantía legal por
                          manipulación.
                        </p>
                      </li>
                      <li>
                        <p className='lead fs--18 text-justify'>
                          Reemplazo de batería.
                        </p>
                      </li>
                      <li>
                        <p className='lead fs--18 text-justify'>
                          Garantía básica extendida (A partir del mes 13 al 24).
                        </p>
                      </li>
                    </ul>
                    <p className='lead fs--18 text-justify'>
                      Cubre 2 reclamaciones anuales
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-12 mb-4 ml-sm-0 ml-md-0 ml-xl-12 border-0 pr-xl-23 pr-sm-0 pr-md-0'>
              <div className='card p-4 b-0 h-100 flex-lg-row flex-md-column'>
                <div className=' d-middle mb-3'>
                  <img
                    width='160'
                    src={Security}
                    alt='plan_gold_samsung_care_plus'
                  />
                </div>
                <div className='card-body pl-0 pr-0 text-gray-600 justify-content-between ml-2'>
                  <h5 style={{ color: "black" }}>Plan Gold:</h5>
                  <div className='h-75'>
                    <p className='lead fs--18 text-justify'>
                      Cuentas con una cobertura para:
                    </p>
                    <ul>
                      <li>
                        <p className='lead fs--18 text-justify'>
                          Hurto simple.
                        </p>
                      </li>
                      <li>
                        <p className='lead fs--18 text-justify'>
                          Hurto Calificado
                        </p>
                      </li>
                      <li>
                        <p className='lead fs--18 text-justify'>
                          Daño físico: cualquier daño accidental del producto.
                        </p>
                      </li>
                      <li>
                        <p className='lead fs--18 text-justify'>
                          Falla mecánica o eléctrica fuera de garantía legal por
                          manipulación.
                        </p>
                      </li>
                      <li>
                        <p className='lead fs--18 text-justify'>
                          Reemplazo de batería.
                        </p>
                      </li>
                      <li>
                        <p className='lead fs--18 text-justify'>
                          Garantía básica extendida (A partir del mes 13 al 24).
                        </p>
                      </li>
                    </ul>
                    <p className='lead fs--18 text-justify'>
                      Cubre 2 reclamaciones anuales
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

export default Plans;
