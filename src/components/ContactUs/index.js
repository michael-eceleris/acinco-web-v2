import React, { useState, useContext } from "react";
import FormContext from "../../context/form/formContext";
import Modal from "../Modal";
//import ReCAPTCHA from "react-google-recaptcha";
//import axios from "axios";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const formContext = useContext(FormContext);
  const { contactUs, isLoading, loading, showModal } = formContext;
  const { register, handleSubmit, errors, setValue } = useForm();
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [numberError, setNumberError] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  //const [captcha, setCaptcha] = useState(null);
  //const [errorCaptcha, setErrorCaptcha] = useState(false);
  //const sitekey = process.env.REACT_APP_SITE_KEY_CAPTCHA;

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
  };

  const onSubmit = (data) => {
    data.consent = data.consent.toString();
    if (data /*&& captcha*/) {
      loading(true);
      contactUs(data);
      setTimeout(() => {
        loading(false);
      }, 30000);
      setValue("name", "");
      setValue("phone_number", "");
      setValue("email", "");
      setValue("message", "");
      setConfirmed(false);
      setNumber("");
      setMessage("");
      //window.grecaptcha.reset();
      //setCaptcha(null);
      //setErrorCaptcha(false);
    } else {
      //setErrorCaptcha(true);
    }
  };

  /* const onChange = async (value) => {
    const secret = process.env.REACT_APP_SECRET_KEY_CAPTCHA;
    try {
      const res = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${value}`
      );
      if (res.status === 200) {
        setCaptcha(res);
        setErrorCaptcha(false);
      } else {
        setCaptcha(res);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
      setErrorCaptcha(true);
    }
  }; */
  return (
    <>
      <section>
        {showModal && !isLoading ? <Modal /> : null}
        <div className='container'>
          <h2 className='font-weight-light mb-5'>
            Si tienes alguna duda, contáctanos
          </h2>
          <div className='row'>
            <div className='col-12 col-lg-8 mb-4'>
              <form className='bs-validate' onSubmit={handleSubmit(onSubmit)}>
                <div className='form-label-group '>
                  <input
                    ref={register({
                      required: {
                        value: true,
                        message: "* Requerido",
                      },
                      maxLength: 50,
                    })}
                    placeholder='Nombre'
                    id='name'
                    name='name'
                    type='text'
                    className='form-control'
                  />
                  <label htmlFor='name'>Nombre</label>
                </div>
                {errors ? (
                  errors.name ? (
                    <p className='text-danger'>{errors.name.message}</p>
                  ) : null
                ) : null}
                <div className='form-label-group mt-3'>
                  <input
                    ref={register({
                      required: {
                        value: true,
                        message: "* Requerido",
                      },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "* Correo electrónico inválido",
                      },
                    })}
                    placeholder='Correo Electrónico'
                    id='email'
                    name='email'
                    type='email'
                    className='form-control'
                  />
                  <label htmlFor='email'>Correo Electrónico</label>
                </div>
                {errors ? (
                  errors.email ? (
                    <p className='text-danger'>{errors.email.message}</p>
                  ) : null
                ) : null}
                <div className='form-label-group mt-3'>
                  <input
                    ref={register({
                      maxLength: {
                        value: 10,
                        message: "* Excediste la cantidad de números",
                      },
                      required: {
                        value: true,
                        message: "* Requerido",
                      },
                      minLength: {
                        value: 7,
                        message: "* Es muy corto el número",
                      },
                    })}
                    placeholder='Número de teléfono'
                    id='phone_number'
                    name='phone_number'
                    type='text'
                    className='form-control'
                    onChange={handleChangeNumber}
                    pattern='[0-9]+'
                  />
                  <label htmlFor='phone_number'>Número de teléfono</label>
                </div>
                <div className='mb-4 d-flex justify-content-between'>
                  <div>
                    {errors ? (
                      errors.phone_number && !numberError ? (
                        <p className='text-danger'>
                          {errors.phone_number.message}
                        </p>
                      ) : numberError ? (
                        number.length === 0 ? (
                          <p className='text-danger'>* Campo requerido</p>
                        ) : (
                          <p className='text-danger'>
                            * Solo se permiten números
                          </p>
                        )
                      ) : null
                    ) : null}
                  </div>
                  <div>
                    <p className='text-left p-0 m-0'>{number.length}/10</p>
                  </div>
                </div>

                <div className='form-label-group'>
                  <textarea
                    ref={register({
                      required: {
                        value: true,
                        message: "* Requerido",
                      },
                      maxLength: {
                        value: 350,
                        message: "* Accediste el número máximo de caracteres",
                      },
                    })}
                    placeholder='Mensaje'
                    id='message'
                    name='message'
                    className='form-control'
                    rows='3'
                    onChange={handleChangeMenssage}
                  ></textarea>
                  <label htmlFor='message'>Mensaje</label>
                </div>
                <div className='mb-4 d-flex justify-content-between'>
                  <div>
                    {errors ? (
                      errors.message ? (
                        <p className='text-danger'>{errors.message.message}</p>
                      ) : null
                    ) : null}
                  </div>
                  <div>
                    <p className='text-left p-0 m-0'>
                      {message ? message.length : 0}/350
                    </p>
                  </div>
                </div>
                <div className='clearfix bg-light position-relative rounded p-4'>
                  <label className='form-checkbox form-checkbox-primary'>
                    <input
                      ref={register({
                        required: { value: true, message: "* Requerido" },
                      })}
                      name='consent'
                      type='checkbox'
                      checked={confirmed}
                      onChange={() => setConfirmed(!confirmed)}
                    />
                    <i></i>
                    <span>
                      Acepto las autorizaciones&nbsp;
                      <a
                        className='btn-link'
                        href='https://files-statics-protegeme.s3.amazonaws.com/Politica+deprotecciondedatos-min.pdf'
                        target='_blank'
                        rel='noreferrer'
                        style={{ whiteSpace: "nowrap" }}
                      >
                        aquí
                      </a>
                      &nbsp;descritas con relación a la administración y
                      tratamiento de datos personales.
                    </span>
                  </label>
                </div>
                {errors ? (
                  errors.consent && confirmed === false ? (
                    <p className='text-danger'>{errors.consent.message}</p>
                  ) : null
                ) : null}
                {/* <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  <ReCAPTCHA onChange={onChange} sitekey={sitekey} />
                </div>
                {errorCaptcha ? (
                  <p className="text-danger">* Requerido</p>
                ) : null}
                */}
                <button
                  type='submit'
                  className='btn btn-primary btn-block mt-4'
                  disabled={isLoading}
                >
                  Enviar Mensaje
                  {isLoading ? (
                    <i
                      className='spinner-border spinner-border-sm ml-2 mr-0 mb--3'
                      role='status'
                      aria-hidden='true'
                    ></i>
                  ) : null}
                </button>
              </form>
            </div>

            <div className='col-12 col-lg-4 mb-4'>
              <div className='d-flex'>
                <div className='w--40'>
                  <i className='fi fi-shape-abstract-dots text-gray-500 float-start fs--20'></i>
                </div>

                <div>
                  <h2 className='fs--25 font-weight-light'>ACINCO S.A.S.</h2>
                </div>
              </div>

              <div className='d-flex mt-4'>
                <div className='w--40'>
                  <i className='fi fi-time text-gray-500 float-start fs--20'></i>
                </div>

                <div>
                  <h3 className='h4 font-weight-normal'>
                    Horarios de Atención
                  </h3>
                  <ul className='list-unstyled m-0 fs--15'>
                    <li className='list-item text-muted'>
                      Lunes &ndash; Viernes: 08:00 am &ndash; 6:00 pm
                    </li>
                    <li className='list-item text-muted'>
                      Sábado: 08:00 am &ndash; 2:00 pm
                    </li>
                  </ul>
                </div>
              </div>
              <div className='d-flex mt-4'>
                <div className='w--40'>
                  <i className='fi fi-phone text-gray-500 float-start fs--20'></i>
                </div>
                <div>
                  <h3 className='h4 font-weight-normal'>Números de contacto</h3>
                  <ul className='list-unstyled m-0'>
                    <li className='list-item mb-2 text-gray-500'>
                      <p>En Bogotá 4898599</p>
                    </li>
                    <li className='list-item mb-2 text-gray-500'>
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
