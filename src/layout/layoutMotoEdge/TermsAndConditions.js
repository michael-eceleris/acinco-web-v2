import React from "react";

const CustomerSupport = ({ section = "" }) => {
  return (
    <>
      <h2
        id={`customer-support${section}`}
        className="h4 text-primary font-weight-normal"
      >
        Atención al Cliente
      </h2>
      <p>
        La reclamación de la asistencia se puede realizar a través de la línea
        01 8000 513 323 o en Bogotá al 601 3905567 de lunes a viernes de 8 am a
        6 pm; sábado de 8:00 am a 2:00 pm, por WhatsApp +57 1 5142355 o por
        medio del chat habilitado en la siguiente página{" "}
        <a
          href="http://www.aseguratucelular.com"
          target="_blank"
          rel="noreferrer"
        >
          www.aseguratucelular.com
        </a>
        .
      </p>
    </>
  );
};

const Documents = ({ section = "" }) => {
  return (
    <>
      <h2
        id={`documentacion${section}`}
        className="h4 text-primary font-weight-normal"
      >
        Documentación
      </h2>
      <p>
        Para hacer efectivo el servicio el usuario debe radicar los siguientes
        documentos por medio de la página web de{" "}
        <a
          href="http://www.aseguratucelular.com"
          target="_blank"
          rel="noreferrer"
        >
          www.aseguratucelular.com
        </a>
      </p>
      <ul>
        <li>
          <p>Formato de reclamación debidamente diligenciado.</p>
        </li>
        <li>
          <p>Factura de compra del equipo o formato de único uso.</p>
        </li>
        <li>
          <p>Copia de la cédula de ciudadanía del cliente ampliado al 150%.</p>
        </li>
        <li>
          <p>Imagen del estado del equipo (laterales y frontales).</p>
        </li>
        <li>
          <p>
            Si la unidad enciende imagen del Imei desde el equipo (marcar *#06#)
          </p>
        </li>
      </ul>
      <p>
        En un máximo de 5 días hábiles de radicar la documentación completa,
        Acinco analizará los documentos y dará una respuesta, la cual podrá ser
        pre-aprobado u objetada.
      </p>
      <p>
        En el primer evento, si es preaprobada se enviará una solicitud de pago
        del copago y una orden de reparación para que el equipo sea llevado a un
        punto logístico a nivel nacional autorizado por Acinco, para ser
        trasladado al taller para su diagnóstico y reparación o en su defecto
        puede ser recogido en el lugar de domicilio indicado por el cliente.
      </p>
      <p>
        En el segundo caso, si es objetado se enviará una carta al mail
        registrado por el cliente explicando las razones por las cuales no es
        favorable la reclamación.
      </p>
    </>
  );
};

const TermsAndConditions = () => {
  return (
    <>
      <section className="bg-white p-5">
        <div className="container">
          <h1 className="h2 text-center">
            Asistencia Fractura de Pantalla – MOTO EDGE
          </h1>
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
                        <span>Asistencia de Pantalla</span>
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
                        href="#customer-support"
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
                  Asistencia Fractura de Pantalla – MOTO EDGE
                </h2>
                <p>
                  Esta asistencia cubre la reparación de la pantalla en caso de
                  fractura/rotura por accidente. Está dirigido a todos los
                  usuarios que compren un Motorola Edge, estos contaran con una
                  (1) reclamación por vigencia por fractura de pantalla.
                </p>
                <h3 className="h6 text-muted">Vigencia</h3>
                <p> 12 meses.</p>
                <h3 className="h6 text-muted">Copago</h3>
                <p>35% del valor de la pantalla.</p>
                <h2
                  id="seguro-pantalla"
                  className="h4 text-primary font-weight-normal"
                >
                  Términos y Condiciones Asistencia de Pantalla
                </h2>
                <ul>
                  <li>
                    <p>
                      Aplica una reclamación por vigencia por fractura de
                      pantalla.
                    </p>
                  </li>
                  <li>
                    <p>
                      Aplica únicamente para los clientes que compren un
                      Motorola Moto Edge Ultra , Moto Edge Fusión y Moto Edge
                      Neo.
                    </p>
                  </li>
                  <li>
                    <p>
                      No aplica para Netbooks, Plantas, Tablets, Phablets,
                      Módems.
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
                      por ACINCO S.A.S.
                    </p>
                  </li>
                  <li>
                    <p>No aplica para equipos comprados en otros países.</p>
                  </li>
                  <li>
                    <p>
                      Para hacer uso de la asistencia el cliente deberá cancelar
                      un copago correspondiente al 35% del valor de la
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
                <p>
                  La asistencia de fractura de pantalla es suministrada por
                  ACINCO S.A.S., el cual cubre la rotura accidental de pantalla
                  por 12 (doce) meses a partir de que adquiere el beneficio.
                  Estarán excluidos de la cobertura todos aquellos eventos
                  originados, basados o atribuibles a:
                </p>
                <ul>
                  <li>
                    <p>Lucro cesante, o pérdidas consecuenciales.</p>
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
                    <p>Decomiso o embargo del bien asistido.</p>
                  </li>
                  <li>
                    <p>
                      Pérdidas causadas o resultantes de acciones
                      gubernamentales, tales como confiscación, incautación o
                      destrucción del bien asistido por orden de autoridad
                      gubernamental competente.
                    </p>
                  </li>
                  <li>
                    <p>
                      Pérdidas por fraudes o actos deshonestos de terceros,
                      tales como clonación y similares.
                    </p>
                  </li>
                  <li>
                    <p>
                      Hurto parcial del bien asistido (hurto de sus partes, de
                      sus componentes o de sus periféricos).
                    </p>
                  </li>
                  <li>
                    <p>Extravío total o parcial del bien asistido.</p>
                  </li>
                  <li>
                    <p>Pérdida por desaparición misteriosa.</p>
                  </li>
                  <li>
                    <p>
                      Pérdidas como consecuencia de que el usuario, o cualquier
                      persona a quien éste le haya confiado el bien asistido, se
                      haya desprendido intencionalmente de la misma.
                    </p>
                  </li>
                  <li>
                    <p>
                      Pérdidas o daños de elementos considerados accesorios o
                      periféricos del bien asistido como baterías, audífonos,
                      manos libres, forros, teclados y cargadores, y accesorios
                      similares.
                    </p>
                  </li>
                </ul>
                <CustomerSupport />
                <Documents />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
