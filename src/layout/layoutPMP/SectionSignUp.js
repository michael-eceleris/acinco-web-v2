import React from "react";
import { Link } from "react-router-dom";
import CellUse from "../../assets/icons/cell_use.svg";

const SectionSignUp = () => {
  return (
    <section className='pt-2 pb-2 '>
      <div className='container p-0'>
        <div className='d-flex flex-wrap align-items-center my-7 '>
          <div className='col-12 col-lg-6 mb-5'>
            <h2 className='h1 text-black mb-2 text-center'>
              ¿Necesitas utilizar tu asistencia?
            </h2>
            <div className='d-flex align-items-center justify-center'>
              <div className='text-center pt-3 m-0 show2'>
                <img src={CellUse} height='220' alt='cell_use' />
              </div>
              <div>
                <p className='lead mb-3 text-center'>
                  ¡Es muy fácil!, Solo debes registrarte con el siguiente botón.
                </p>
                <div className='mt-4 d-flex justify-content-center'>
                  <Link
                    className='btn btn-sm btn-primary'
                    to='/protect-my-phone/signup'
                  >
                    Registrate
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-6 mb-5 show2'>
            <div className='row'>
              <div className='col-12 '>
                <div className='bg-white p-4 mb-4 mb-2-xs h-100'>
                  <p className='lead'>
                    Esta asistencia de fractura de pantalla está dirigida a
                    todos los usuarios que adquieran su PROTECT MY PHONE
                    GARANTIA EXTENDIDA en tiendas autorizadas.
                  </p>
                  <p className='lead'>
                    El equipo del usuario debe tener instalado PROTECT MY PHONE.
                  </p>
                  <p className='lead'>Dispositivos adquiridos en Colombia.</p>
                  <p className='lead'>
                    Contar con el código único de activación que viene dentro
                    del empaque en el momento de la compra.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSignUp;
