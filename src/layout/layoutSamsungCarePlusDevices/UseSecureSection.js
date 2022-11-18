import React from "react";
import { Link } from "react-router-dom";
import CellUse from "../../assets/icons/cell_use.svg";

const UseSecureSection = () => {
  return (
    <section className='pt-2 pb-2 '>
      <div className='container p-0'>
        <div className='d-flex flex-wrap align-items-center my-7 '>
          <div className='col-12 col-lg-6 mb-5'>
            <div className='d-flex align-items-center justify-center'>
              <div className='text-center mx-auto show2'>
                <img src={CellUse} height='280' alt='cell_use' />
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-6 mb-5 show2'>
            <div className='row'>
              <div className='col-12 '>
                <div className='bg-white p-4 mb-4 mb-2-xs h-100'>
                  <h2 className='h1 text-black mb-2 text-center'>
                    ¿Necesitas utilizar tu seguro?
                  </h2>
                  <p className='lead mb-3 text-center'>
                    ¡Es muy fácil!, Solo debes ingresar con el siguiente botón.
                  </p>
                  <div className='mt-4 d-flex justify-content-center'>
                    <Link
                      className='btn btn-sm btn-primary'
                      to='/protect-my-phone/signup'
                    >
                      Ingresar
                    </Link>
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

export default UseSecureSection;
