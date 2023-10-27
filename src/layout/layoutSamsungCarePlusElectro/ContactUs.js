import React from "react";

const ContactUsElectro = () => {
  return (
    <>
      <section>
        <div className='container'>
          <h2 className='font-weight-light mb-5'>
            Si tienes alguna duda, contáctanos
          </h2>
          <div className='row'>
            <div className='col-12 col-lg-6 mb-4'>
              <div className='d-flex'>
                <div className='w--40'>
                  <i className='fi fi-time text-gray-500 float-start fs--20'></i>
                </div>

                <div>
                  <h3 className='h4 font-weight-normal'>Correo electrónico</h3>
                  <ul className='list-unstyled m-0 fs--15'>
                    <li className='list-item text-muted'>
                      siniestros.axaseguros@crawfordaffinity.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-6 mb-4'>
              <div className='d-flex'>
                <div className='w--40'>
                  <i className='fi fi-phone text-gray-500 float-start fs--20'></i>
                </div>
                <div>
                  <h3 className='h4 font-weight-normal'>Línea de atención</h3>
                  <ul className='list-unstyled m-0'>
                    <li className='list-item mb-2 text-gray-500'>
                      <p>601 742 1638</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsElectro;
