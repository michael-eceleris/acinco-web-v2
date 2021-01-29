import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [emaileError, setEmaileError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [error, setError] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (!e.target.validity.valid) {
      setEmaileError(true);
    } else {
      setEmaileError(false);
    }
  };

  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
    if (!e.target.validity.valid) {
      setNumberError(true);
    } else {
      setNumberError(false);
    }
  };
  const handleChangeMenssage = (e) => {
    setMessage(e.target.value);
    if (e.target.value.length > 350) {
      setMessageError(true);
    } else {
      setMessageError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      number === "" ||
      message === "" ||
      confirmed === false ||
      number.length < 7
    ) {
      setError(true);
    } else {
      setError(false);
      console.log(name + email + number + message);
    }
  };

  return (
    <>
      <section>
        <div className="container">
          <h2 className="font-weight-light mb-5">
            Tienes alguna duda, contáctanos
          </h2>

          <div className="row">
            <div className="col-12 col-lg-8 mb-4">
              <form className="bs-validate" onSubmit={handleSubmit}>
                <div className="form-label-group ">
                  <input
                    placeholder="Nombre"
                    id="contact_name"
                    name="contact_name"
                    type="text"
                    className="form-control"
                    onChange={handleName}
                  />
                  <label htmlFor="contact_name">Nombre</label>
                </div>
                {error && !name ? (
                  <p className="text-danger">* Requerido</p>
                ) : null}
                <div className="form-label-group mt-3">
                  <input
                    placeholder="Email"
                    id="contact_email"
                    name="contact_email"
                    type="email"
                    className="form-control"
                    onChange={handleEmail}
                  />
                  <label htmlFor="contact_email">Correo Electrónico</label>
                </div>
                {error && !email ? (
                  <p className="text-danger">* Requerido</p>
                ) : emaileError ? (
                  <p className="text-danger">* Correo electronico invalido</p>
                ) : null}

                <div className="form-label-group mt-3">
                  <input
                    placeholder="Phone"
                    id="contact_phone"
                    name="contact_phone"
                    type="text"
                    className="form-control"
                    onChange={handleChangeNumber}
                    value={number}
                    pattern="[0-9]{0,10}"
                  />
                  <label htmlFor="contact_phone">Número de teléfono</label>
                </div>
                <div className="mb-4 d-flex justify-content-between">
                  <div>
                    {(error && !number) || (error && number.length === 0) ? (
                      <p className="text-danger">* Campo requerido</p>
                    ) : number.length > 10 ? (
                      <p className="text-danger">
                        * Excediste la cantidad de números
                      </p>
                    ) : numberError ? (
                      number.length === 0 ? (
                        <p className="text-danger">* Campo requerido</p>
                      ) : (
                        <p className="text-danger">
                          * Solo se permiten números
                        </p>
                      )
                    ) : error && number.length < 7 ? (
                      <p className="text-danger">* Es muy corto el número</p>
                    ) : null}
                  </div>
                  <div>
                    <p className="text-left p-0 m-0">{number.length}/10</p>
                  </div>
                </div>

                <div className="form-label-group">
                  <textarea
                    placeholder="Message"
                    id="contact_message"
                    name="contact_message"
                    className="form-control"
                    rows="3"
                    onChange={handleChangeMenssage}
                  ></textarea>
                  <label htmlFor="contact_message">Mensaje</label>
                </div>
                <div className="mb-4 d-flex justify-content-between">
                  <div>
                    {error && !message ? (
                      <p className="text-danger">* Campo requerido</p>
                    ) : messageError ? (
                      <p className="text-danger">
                        * Accediste el número máximo de caracteres
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <p className="text-left p-0 m-0">
                      {message ? message.length : 0}/350
                    </p>
                  </div>
                </div>
                <div className="clearfix bg-light position-relative rounded p-4">
                  <label className="form-checkbox form-checkbox-primary">
                    <input
                      type="checkbox"
                      checked={confirmed}
                      onChange={() => setConfirmed(!confirmed)}
                    />
                    <i></i>
                    <span>
                      Doy mi consentimiento para que mis datos se almacenen.
                    </span>
                  </label>
                </div>
                {error && !confirmed ? (
                  <p className="text-danger">* Requerido</p>
                ) : null}
                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="col-12 col-lg-4 mb-4">
              <div className="d-flex">
                <div className="w--40">
                  <i className="fi fi-shape-abstract-dots text-gray-500 float-start fs--20"></i>
                </div>

                <div>
                  <h2 className="fs--25 font-weight-light">ACINCO S.A.S.</h2>
                </div>
              </div>

              <div className="d-flex mt-4">
                <div className="w--40">
                  <i className="fi fi-time text-gray-500 float-start fs--20"></i>
                </div>

                <div>
                  <h3 className="h4 font-weight-normal">
                    Horarios de Atención
                  </h3>
                  <ul className="list-unstyled m-0 fs--15">
                    <li className="list-item text-muted">
                      Lunes &ndash; Sabado: 08:00 am – 6:00 pm
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex mt-4">
                <div className="w--40">
                  <i className="fi fi-phone text-gray-500 float-start fs--20"></i>
                </div>
                <div>
                  <h3 className="h4 font-weight-normal">Números de contácto</h3>
                  <ul className="list-unstyled m-0">
                    <li className="list-item mb-2 text-gray-500">
                      <p>En Bogotá 4898599</p>
                    </li>
                    <li className="list-item mb-2 text-gray-500">
                      <p>Para el resto de Colombia 01 8000 513 323</p>
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

export default ContactUs;
