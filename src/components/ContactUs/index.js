import React from "react";

const ContactUs = () => {
  return (
    <section className="mt-1">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mb-5">
            <h1 className="font-weight-light mb-5 fs--60">
              <span className="font-weight-medium"></span> Contáctanos
            </h1>
            <div>
              <h1 className="font-weight-light mb-4">Marca al</h1>
              <h1 className="m-0 link-muted">4898599</h1>
              <h1 className="font-weight-light mb-4">o Marcando al</h1>
              <h1 className="m-0 link-muted">01 8000 513 323</h1>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="rounded bg-white shadow-xs d-flex">
              <div className="m-5 m-4-xs">
                <h2 className="h3-xs font-weight-light mb-5">
                  Envia tu mensaje
                </h2>
                <form className="bs-validate js-ajax">
                  <input
                    type="hidden"
                    name="action"
                    value="contact_form_submit"
                    tabIndex="-1"
                  />
                  <input
                    type="text"
                    name="norobot"
                    value=""
                    className="hide"
                    tabIndex="-1"
                  />
                  <div id="ajax_dd_contact_response_container"></div>
                  <div className="form-label-group mb-3">
                    <input
                      required
                      placeholder="Name"
                      id="contact_name"
                      type="text"
                      className="form-control form-control-pill"
                    />
                    <label htmlFor="contact_name">Nombre</label>
                  </div>
                  <div className="form-label-group mb-3">
                    <input
                      required
                      placeholder="Phone"
                      id="contact_phone"
                      type="text"
                      className="form-control form-control-pill"
                    />
                    <label htmlFor="contact_phone">Número de teléfono</label>
                  </div>
                  <div className="form-label-group mb-3">
                    <input
                      required
                      placeholder="Email"
                      id="contact_email"
                      type="email"
                      className="form-control form-control-pill"
                    />
                    <label htmlFor="contact_email">Correo electrónico</label>
                  </div>
                  <div className="form-label-group mb-4">
                    <textarea
                      required
                      placeholder="Message"
                      id="contact_message"
                      className="form-control rounded-xl"
                      rows="3"
                    ></textarea>
                    <label htmlFor="contact_message">
                      Agrega tus comentarios
                    </label>
                  </div>
                  <div className="clearfix bg-light position-relative rounded p-4 mb-4">
                    <label className="form-checkbox form-checkbox-primary">
                      <input required type="checkbox" name="checkbox" />
                      <i></i>
                      <span>
                        Autorizo el uso de mis datos personales para recibir más
                        información
                        <a
                          href="page-terms-and-conditions.html"
                          target="_blank"
                        >
                          {" "}
                          Politica de privacidad
                        </a>
                        .
                      </span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-secondary btn-pill btn-block"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
