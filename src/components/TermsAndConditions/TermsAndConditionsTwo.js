import React from "react";

const TermsAndConditions = (props) => {
  const { namePlan, plan } = props;
  return (
    <>
      <section className="bg-white p-5">
        <div className="container">
          {plan === "colsubsidio" ? (
            <h1 className="h2 text-center">
              Términos y Condiciones del Plan <br /> {namePlan}
            </h1>
          ) : (
            <h1 className="h2 text-center">
              Términos y Condiciones del Plan {namePlan}
            </h1>
          )}
        </div>
      </section>
      <section className="pt--50 bg-theme-color-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="position-sticky" style={{ top: 10 }}>
                <div>
                  <ul
                    id="list-example"
                    className="p-2 list-unstyled nav-default shadow-md rounded-xl bg-white mb-5"
                  >
                    <li className="px-3 py-2">
                      <h2 className="h5 font-weight-normal text-primary text-center">
                        Términos y Condiciones
                      </h2>
                    </li>
                    <li>
                      <a
                        className="nav-link rounded-pill scroll-to py-3"
                        href="#plan"
                      >
                        <i className="fs--13 fi fi-arrow-end-slim"></i>
                        <span>Plan</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link rounded-pill scroll-to py-3"
                        href="#seguro-pantalla"
                      >
                        <i className="fs--13 fi fi-arrow-end-slim"></i>
                        <span>Seguro de Pantalla</span>
                      </a>
                    </li>

                    <li>
                      <a
                        className="nav-link rounded-pill scroll-to py-3"
                        href="#condiciones-generales"
                      >
                        <i className="fs--13 fi fi-arrow-end-slim"></i>
                        <span>Condiciones Generales</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link rounded-pill scroll-to py-3"
                        href="#atencion"
                      >
                        <i className="fs--13 fi fi-arrow-end-slim"></i>
                        <span>Atención al Cliente</span>
                      </a>
                    </li>

                    <li>
                      <a
                        className="nav-link rounded-pill scroll-to py-3"
                        href="#documentacion"
                      >
                        <i className="fs--13 fi fi-arrow-end-slim"></i>
                        <span>Documentación</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-8">
              <div className="bg-white p-5 p-4-xs rounded-xl article-format">
                <h2 id="plan" className="h4 text-primary font-weight-normal">
                  {namePlan}
                </h2>
                {plan === "colsubsidio" ? (
                  <>
                    <p>
                      Esta asistencia cubre la reparación de la pantalla en caso
                      de fractura/rotura por accidente. Está dirigido a todos
                      los usuarios COLSUBSIDIO que adquieran su póliza Hogar con
                      Axa Colpatria Seguros, estos contarán con una (1)
                      reclamación por vigencia por fractura de pantalla.
                    </p>
                    <h3 className="h6 text-muted">Vigencia</h3>
                    <p>Doce (12) meses desde la compra de la póliza Hogar</p>
                    <h3 className="h6 text-muted">Copago</h3>
                    <p>35% del valor de la reparación de la pantalla</p>
                  </>
                ) : plan === "soat" ? (
                  <>
                    <p>
                      Esta asistencia cubre la reparación de la pantalla en caso
                      de fractura/rotura por accidente. Está dirigido a todos
                      los usuarios que adquieran su Soat con Axa Colpatria
                      Seguro, estos contaran con una (1) reclamación por
                      vigencia (3 meses) por fractura de pantalla.
                    </p>
                    <h3 className="h6 text-muted">Vigencia</h3>
                    <p>Tres (3) meses desde la compra del Soat</p>
                    <h3 className="h6 text-muted">Copago</h3>
                    <p>35% del valor de la reparación de la pantalla</p>
                  </>
                ) : null}
                {plan === "soat" ? (
                  <h2
                    id="seguro-pantalla"
                    className="h4 text-primary font-weight-normal"
                  >
                    Términos y Condiciones de la Asistencia de Pantalla
                  </h2>
                ) : (
                  <h2
                    id="seguro-pantalla"
                    className="h4 text-primary font-weight-normal"
                  >
                    Términos y Condiciones de Seguro de pantalla
                  </h2>
                )}

                <ul>
                  <li>
                    <p>
                      Aplica una reclamación por vigencia por fractura de
                      pantalla.
                    </p>
                  </li>

                  {plan === "colsubsidio" ? (
                    <li>
                      <p>
                        Aplica únicamente para los clientes Colsubsidio que
                        adquieran su póliza hogar por medio de Axa Colpatria
                        Seguros.
                      </p>
                    </li>
                  ) : plan === "soat" ? (
                    <li>
                      <p>
                        Aplica únicamente para los clientes que adquieran su
                        Soat por medio de Axa Colpatria Seguros.
                      </p>
                    </li>
                  ) : null}

                  <li>
                    <p>
                      No aplica para Netbooks, Plantas, Tablets, Phablets,
                      Módems o equipos comprados con fechas anteriores al inicio
                      de la promoción.
                    </p>
                  </li>
                  <li>
                    <p>
                      La reparación de la pantalla no cubre: daños en la tarjeta
                      principal, módulos de pantalla, carcasas laterales,
                      batería, ni daños por humedad en el equipo.
                    </p>
                  </li>
                  <li>
                    <p>
                      La reparación y logística de la cobertura de protección de
                      pantalla se realizará con el servicio técnico autorizado
                      por Axa Colpatria Seguros.
                    </p>
                  </li>
                  <li>
                    <p>No aplica para equipos comprados en otros países.</p>
                  </li>
                  {plan === "colsubsidio" ? (
                    <li>
                      <p>
                        Al comprar la póliza de hogar, se notificará por medio
                        de un mensaje de texto la URL en donde se podrá realizar
                        un registro de su equipo móvil.
                      </p>
                    </li>
                  ) : (
                    <li>
                      <p>
                        Al comprar el Soat, se notificará por medio de un
                        mensaje de texto la URL en donde se tendrá que realizar
                        un registro del equipo móvil a asegurar.
                      </p>
                    </li>
                  )}

                  <li>
                    <p>
                      Para hacer uso de la asistencia el cliente deberá cancelar
                      el deducible correspondiente al 35% del valor de la
                      reparación de la pantalla del equipo.
                    </p>
                  </li>
                  <li>
                    <p>
                      Si al momento de la reparación del producto este presenta
                      otra clase de daños diferentes a la ruptura de la
                      pantalla, este valor deberá ser asumido por el usuario.
                    </p>
                  </li>
                </ul>
                <h2
                  id="condiciones-generales"
                  className="h4 text-primary font-weight-normal"
                >
                  Condiciones Generales
                </h2>
                {plan === "colsubsidio" ? (
                  <p>
                    La asistencia de protección de pantalla es un beneficio
                    otorgado por AXA COLPATRIA SEGUROS S.A., el cual cubre la
                    rotura accidental de pantalla por 12 (doce) meses a partir
                    de la fecha de adquisición de la póliza de hogar. Estarán
                    excluidos del servicio todos aquellos eventos originados,
                    basados o atribuibles a:
                  </p>
                ) : (
                  <p>
                    La asistencia protección de pantalla es un beneficio
                    provisto por AXA COLPATRIA SEGUROS S.A., el cual cubre la
                    rotura accidental de pantalla por 3 (tres) meses a partir de
                    la fecha de adquisición del Soat. Estarán excluidos todos
                    aquellos eventos originados, basados o atribuibles a:
                  </p>
                )}
                <ul>
                  <li>
                    <p>Lucro cesante, o pérdidas consecuenciales</p>
                  </li>
                  <li>
                    <p>
                      Dolo, culpa grave o mala fe del usuario o de sus
                      representantes.
                    </p>
                  </li>
                  <li>
                    <p>
                      Motín, conmoción civil o popular, vandalismo y actos mal
                      intencionados de terceros.
                    </p>
                  </li>
                  <li>
                    <p>Decomiso o embargo del bien asegurado.</p>
                  </li>
                  <li>
                    <p>
                      Pérdidas causadas o resultantes de acciones
                      gubernamentales, tales como confiscación, incautación o
                      destrucción del bien asegurado por orden de autoridad
                      gubernamental competente.
                    </p>
                  </li>
                  <li>
                    <p>
                      Pérdidas por fraudes o actos deshonestos de terceros,
                      tales como clonación y similares
                    </p>
                  </li>
                  <li>
                    <p>
                      Hurto parcial del bien asegurado (hurto de sus partes, de
                      sus componentes o de sus periféricos).
                    </p>
                  </li>
                  <li>
                    <p>Extravío total o parcial del bien asegurado.</p>
                  </li>
                  <li>
                    <p>Pérdida por desaparición misteriosa.</p>
                  </li>
                  <li>
                    <p>
                      Pérdidas como consecuencia de que el asegurado, o
                      cualquier persona a quien éste le haya confiado el bien
                      asegurado, se haya desprendido intencionalmente de la
                      misma.
                    </p>
                  </li>
                  <li>
                    <p>
                      Pérdidas o daños de elementos considerados accesorios o
                      periféricos del bien asegurado como baterías, audífonos,
                      manos libres, forros, teclados y cargadores, y accesorios
                      similares.
                    </p>
                  </li>
                </ul>
                <h2
                  id="atencion"
                  className="h4 text-primary font-weight-normal"
                >
                  Atención al Cliente
                </h2>
                <p>
                  La reclamación del servicio de asistencia se puede realizar a
                  través de la línea 01 8000 513 323 o en Bogotá al 3905567 de
                  lunes a sábado de 8 am a 6 pm o por medio del chat habilitado
                  en la siguiente página{" "}
                  <a
                    href="http://www.aseguratucelular.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.aseguratucelular.com
                  </a>
                  .
                </p>
                <h2
                  id="documentacion"
                  className="h4 text-primary font-weight-normal"
                >
                  Documentación
                </h2>
                <p>
                  Para hacer efectivo el servicio el usuario debe radicar los
                  siguientes documentos por medio de la página web de{" "}
                  <a
                    href="http://www.aseguratucelular.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.aseguratucelular.com
                  </a>
                  .
                </p>
                <ul>
                  <li>
                    <p>Formato de reclamación debidamente diligenciado.</p>
                  </li>
                  <li>
                    <p>Factura de compra del equipo.</p>
                  </li>
                  <li>
                    <p>
                      Copia de la cédula de ciudadanía del cliente ampliado al
                      150%.
                    </p>
                  </li>
                  <li>
                    <p>Imagen del estado del equipo (laterales y frontales).</p>
                  </li>
                  <li>
                    <p>
                      Si la unidad enciende imagen del Imei desde el equipo
                      (marcar *#06#)
                    </p>
                  </li>
                </ul>
                <p>
                  En un máximo de 5 días hábiles de entregar los documentos y
                  haber realizado el pago del copago, A Cinco analizará los
                  documentos y dará una respuesta, si es preaprobado se enviará
                  una orden de reparación para que el equipo sea llevado a
                  cualquier punto Servientrega a nivel nacional para ser
                  trasladado al taller para su reparación o en su defecto en el
                  lugar de domicilio indicado por el cliente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
