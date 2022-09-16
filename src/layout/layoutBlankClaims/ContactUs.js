import styled from "styled-components";
import { useForm } from "react-hook-form";
import { makeStyles } from "@mui/styles";
import React, { useState, useContext } from "react";

import Modal from "../../components/Modal";
import FormContext from "../../context/form/formContext";

const ButtonLink = styled.a`
  color: ${(props) => props.bgColor};
  :hover {
    color: ${(props) => props.bgColor};
  }
`;

const ButtonSubmit = styled.button`
  background-color: ${(props) => props.bgColor};
  color: #fff;
  :hover {
    filter: brightness(120%);
    color: #fff;
  }
  :disabled {
    opacity: 0.65;
  }
`;

const CustomH2 = styled.h2`
  color: ${(props) => props.bgColor};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "")};
`;

const useStyle = makeStyles(() => ({
  imageBackground: {
    backgroundImage: (props) => `url(${props.contactUsBackground})`,
    backgroundPosition: "left bottom",
    backgroundRepeat: "no-repeat",
  },
}));

const ContactUs = ({
  colorPrimary,
  company,
  contactUsBackground,
  contact,
  allUppercase,
  consumerAdvocate,
  webPage,
  urlWebPage,
}) => {
  const classes = useStyle({ contactUsBackground });
  const formContext = useContext(FormContext);
  const { contactUs, isLoading, loading, showModal } = formContext;
  const { register, handleSubmit, errors, setValue } = useForm();
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [numberError, setNumberError] = useState(false); /*
  const [confirmed, setConfirmed] = useState(false); */

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
    data.consent = "false";
    if (data) {
      loading(true);
      contactUs(data);
      setTimeout(() => {
        loading(false);
      }, 30000);
      setValue("name", "");
      setValue("phone_number", "");
      setValue("email", "");
      setValue("message", "");
      /* setConfirmed(false); */
      setNumber("");
      setMessage("");
    }
  };
  return (
    <>
      <section className={classes.imageBackground}>
        {showModal && !isLoading ? <Modal /> : null}
        <div className='container'>
          <CustomH2
            bgColor={colorPrimary}
            uppercase={allUppercase}
            className='font-weight-light mb-5'
          >
            Si tienes alguna duda, contáctanos
          </CustomH2>
          {consumerAdvocate && (
            <p className='lead textcustom h6-xs mt-2'>
              Información sobre el defensor del consumidor, revisala{" "}
              <ButtonLink
                className='link-muted btn_link '
                href={consumerAdvocate}
                bgColor={colorPrimary}
                target='_blank'
              >
                aquí
              </ButtonLink>
              .
            </p>
          )}
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
                {/* <div className="clearfix bg-light position-relative rounded p-4">
                  <LabelCheckbox bgColor={colorPrimary} className="form-checkbox">
                    <input
                      ref={register({
                        required: { value: true, message: "* Requerido" },
                      })}
                      name="consent"
                      type="checkbox"
                      checked={confirmed}
                      onChange={() => setConfirmed(!confirmed)}
                    />
                    <i></i>
                    <span>
                      Doy mi consentimiento para que mis datos se almacenen.
                    </span>
                  </LabelCheckbox>
                </div> */}
                {/* {errors ? (
                  errors.consent && confirmed === false ? (
                    <p className="text-danger">{errors.consent.message}</p>
                  ) : null
                ) : null} */}
                <ButtonSubmit
                  type='submit'
                  className='btn btn-block mt-4'
                  disabled={isLoading}
                  bgColor={colorPrimary}
                >
                  Enviar Mensaje
                  {isLoading ? (
                    <i
                      className='spinner-border spinner-border-sm ml-2 mr-0 mb--3'
                      role='status'
                      aria-hidden='true'
                    ></i>
                  ) : null}
                </ButtonSubmit>
              </form>
            </div>

            <div className='col-12 col-lg-4 mb-4'>
              <div className='d-flex'>
                <div className='w--40'>
                  <i className='fi fi-shape-abstract-dots text-gray-500 float-start fs--20'></i>
                </div>

                <div>
                  <CustomH2
                    bgColor={colorPrimary}
                    className='fs--25 font-weight-light'
                  >
                    {company}
                  </CustomH2>
                </div>
              </div>

              <div className='d-flex mt-4'>
                <div className='w--40'>
                  <i className='fi fi-time text-gray-500 float-start fs--20'></i>
                </div>

                <div>
                  <CustomH2
                    bgColor={colorPrimary}
                    className='h4 font-weight-normal'
                  >
                    Portal Web
                  </CustomH2>
                  <ul className='list-unstyled m-0 fs--15'>
                    <li className='list-item text-muted'>
                      <a
                        className='text-muted fs--17'
                        href={urlWebPage}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {webPage}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='d-flex mt-4'>
                <div className='w--40'>
                  <i className='fi fi-phone text-gray-500 float-start fs--20'></i>
                </div>
                <div>
                  <CustomH2
                    bgColor={colorPrimary}
                    className='h4 font-weight-normal'
                  >
                    Líneas de Atención
                  </CustomH2>
                  <ul className='list-unstyled m-0'>
                    {contact.map((cont, index) => (
                      <li
                        key={`contact_${index}`}
                        className='list-item mb-2 text-gray-500'
                      >
                        <p>{cont}</p>
                      </li>
                    ))}
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
