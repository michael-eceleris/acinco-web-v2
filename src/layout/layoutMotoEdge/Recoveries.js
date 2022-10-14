import React from "react";
import { Link } from "react-router-dom";
import Dollar from "../../assets/icons/dollar-sign-solid.svg";
const Recoveries = () => {
  return (
    <>
      <section className='pt-2 pb-2 bg-theme-color-light '>
        <div className='container p-0'>
          <div className=' d-flex flex-wrap align-items-center my-7 '>
            <div className='col-12 col-lg-6 mb-5'>
              <h2 className='h1 text-primary mb-4 text-center'>Recobros</h2>
              <p className='lead mb-3'>
                Si te ocurre un siniestro, o alguna circunstancia en la cual se
                vea aplicable alguna de las coberturas que trae el plan, ten en
                cuenta esta información.
              </p>
              <Link
                className='btn btn-link text-decoration-none'
                to='/motorola/terminos-condiciones'
              >
                Leer más
                <i className='fi fi-arrow-right-slim ml-2'></i>
              </Link>
            </div>
            <div className='col-12 col-lg-6 mb-5 '>
              <div className='row gutters-md gutters-xs--xs'>
                <div className='col-3 jarallax'></div>
                <div className='col-6 jarallax'>
                  <div className='bg-white shadow-xs rounded-xl p-4 mb-4 mb-2-xs bg-primary-soft-hover transition-bg-ease-150 text-decoration-none text-gray-800 h-100'>
                    <div className='text-center pt-3 m-0'>
                      <img src={Dollar} height='50' alt='signo_pesos' />
                    </div>
                    <h3 className='h5 py-3 mt-3 text-center '>
                      ¿Cuánto pagarás?
                    </h3>
                    <p className='pt-3 text-justify'>
                      La asistencia te cubre el 65% del costo de la reparación
                      de la pantalla, por lo tanto solo pagas el 35% del mismo.
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

export default Recoveries;
