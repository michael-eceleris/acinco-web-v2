import React from "react";
import Security from "../../assets/icons/security.svg";
import Shield from "../../assets/icons/shield.svg";
import RepairPhone from "../../assets/icons/cellphone.svg";

const Plans = () => {
  return (
    <>
      <section className='bg-gradient-light '>
        <div className='container'>
          <div className='text-center mb--100'>
            <h2 className='font-weight-light mb-4 text-center'>
              Detalles del plan Motorola
            </h2>
            <h3 className='h2 ml-2 mb-1 mt-1 text-center'>Planes</h3>
          </div>
          <div className='p-2 rounded overflow-hidden'>
            <div className='row col-border'>
              <div className='col-12 col-md-12 col-lg-12 mb-4'>
                <div className='card p-4 b-0 h-100 mt-1 d-lg-flex flex-lg-row d-md-flex flex-md-row'>
                  <div className='mb-3 mr-4 d-flex align-items-center justify-content-center'>
                    <img
                      width='160'
                      src={Shield}
                      alt='plan-garantia-extendida'
                    />
                  </div>
                  <div>
                    <h5>Plan Garantía Extendida </h5>
                    <div className='card-body pl-0 pr-0 text-gray-600 '>
                      <h6>Condiciones:</h6>
                      <p className='lead fs--18 text-justify hypens'>
                        Servicio preferencial para clientes Motorola, todos los
                        teléfonos inteligentes de Motorola nuevos pueden optar
                        por este plan.
                      </p>
                      <h6>Vigencia:</h6>
                      <p className='lead fs--18 text-justify hypens'>
                        Doce (12) meses
                      </p>
                      <h6>Cobertura:</h6>
                      <p className='lead fs--18 text-justify hypens'>
                        Esta garantía se extiende por 1 año la cual empieza una
                        vez terminado el periodo de la garantía dada por
                        MOTOROLA. Dicha garantía tiene las mismas coberturas que
                        la garantía dada por MOTOROLA.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-12 col-lg-12 mb-4 border-0'>
                <div className='card p-4 b-0 h-100 mt-1 d-lg-flex flex-lg-row d-md-flex flex-md-row'>
                  <div className='mb-3 mr-4 d-flex align-items-center justify-content-center'>
                    <img width='160' src={Security} alt='plan-todo-riesgo' />
                  </div>
                  <div>
                    <h5>Plan Seguro Todo Riesgo</h5>
                    <div className='card-body pl-0 pr-0 text-gray-600 '>
                      <h6>Condiciones:</h6>
                      <p className='lead fs--18 text-justify hypens'>
                        Protección total para equipo Motorola nuevos,
                        protegiéndolo en caso de hurto calificado, hurto simple,
                        daño total accidental y fractura de pantalla
                      </p>
                      <h6>Vigencia:</h6>
                      <p className='lead fs--18 text-justify hypens'>
                        Doce (12) meses desde el momento en que le llega el
                        equipo al cliente.
                      </p>
                      <h6>Cobertura:</h6>
                      <p className='lead fs--18 text-justify hypens'>
                        Estos contaran con una (1) reclamación al año por hurto
                        calificado, hurto simple o daño total accidental y una
                        (1) reclamación por fractura de pantalla en caso de
                        accidente.
                      </p>
                      <h6>Deducible:</h6>
                      <p className='lead fs--18 text-justify hypens'>
                        35% del valor asegurado y en caso de pantalla del valor
                        de la reparación de esta.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-12 col-lg-12 mb-4 border-0'>
                <div className='card p-4 b-0 h-100 d-lg-flex flex-lg-row d-md-flex flex-md-row'>
                  <div className='mb-3 mr-3 d-flex align-items-center justify-content-center'>
                    <img
                      width='180'
                      src={RepairPhone}
                      alt='plan-asistencia-pantalla'
                    />
                  </div>
                  <div>
                    <h5 style={{ whiteSpace: "nowrap" }}>
                      Plan Asistencia de Pantalla
                    </h5>
                    <div className='card-body pl-0 pr-0 text-gray-600 '>
                      <h6>Condiciones:</h6>
                      <p className='lead fs--18 text-justify hypens'>
                        Esta asistencia está dirigido a todos los usuarios que
                        compren su equipo en tiendas propias Motorola y solo
                        quieran proteger la pantalla de su equipo.
                      </p>
                      <h6>Vigencia:</h6>
                      <p className='lead fs--18 text-justify hypens'>
                        Doce (12) meses desde el momento en que le llega el
                        equipo al cliente.
                      </p>
                      <h6>Cobertura:</h6>
                      <p className='lead fs--18 text-justify hypens'>
                        Estos contaran con una (1) reclamación por vigencia por
                        la fractura o fisura de su pantalla en caso de
                        accidente.
                      </p>
                      <h6>Deducible:</h6>
                      <p className='lead fs--18 text-justify hypens'>
                        35% del valor de la reparación de la pantalla.
                      </p>
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

export default Plans;
