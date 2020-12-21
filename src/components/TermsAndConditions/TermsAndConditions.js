import React from "react";

const TermsAndConditions = (props) => {
  const { namePlan, plan } = props;
  return (
    <>
      <section className="bg-white p-5">
        <div className="container">
          <h1 className="h2 text-center">
            Términos y Condiciones del Plan {namePlan}
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
                    {plan === "all" ? (
                      <li>
                        <a
                          className="nav-link rounded-pill scroll-to py-3"
                          href="#seguro-movil"
                        >
                          <i className="fs--13 fi fi-arrow-end-slim"></i>
                          <span>Seguro Movil</span>
                        </a>
                      </li>
                    ) : null}

                    <li>
                      <a
                        className="nav-link rounded-pill scroll-to py-3"
                        href="#fractura-pantalla"
                      >
                        <i className="fs--13 fi fi-arrow-end-slim"></i>
                        <span>Fractura de Pantalla</span>
                      </a>
                    </li>

                    <li>
                      <a
                        className="nav-link rounded-pill scroll-to py-3"
                        href="#genereladidades"
                      >
                        <i className="fs--13 fi fi-arrow-end-slim"></i>
                        <span>Genereladidades</span>
                      </a>
                    </li>

                    <li>
                      <a
                        className="nav-link rounded-pill scroll-to py-3"
                        href="#declaraciones-autorizaciones"
                      >
                        <i className="fs--13 fi fi-arrow-end-slim"></i>
                        <span>Declaraciones y Autorizaciones</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-8">
              <div className="bg-white p-5 p-4-xs rounded-xl article-format">
                <h2 id="plan" className="h4 text-primary font-weight-normal">
                  Información del Plan {namePlan}
                </h2>
                {plan === "all" ? (
                  <>
                    <p>
                      Este seguro aplica para clientes que adquieran los planes
                      Pospago 5.3, plan Business Combo B2B Voz y SMS Nacional
                      Ilimitado + 35GB y/o Combo B2B Voz y SMS Nacional
                      Ilimitado + 50GB, sin ningún costo adicional.
                    </p>
                    <h3 className="h6 text-muted">Coberturas</h3>
                    <p>Doce (12) meses desde la compra de la póliza Hogar</p>
                    <ul>
                      <li>
                        <p>
                          Una (1) reclamación por hurto calificado, hurto simple
                          y daño total accidental
                        </p>
                      </li>
                      <li>
                        <p>
                          Una (1) reclamación por fractura de pantalla en caso
                          de accidente.
                        </p>
                      </li>
                    </ul>
                    <h3 className="h6 text-muted">Recobro</h3>
                    <p>
                      Una vez aprobada la reclamación, el usuario debe cancelar
                      un recobro equivalente al 30% del valor comercial del
                      equipo al momento de la indemnización por hurto
                      calificado, hurto simple o daño total accidental.
                    </p>
                    <p>
                      Para el caso de fractura de pantalla deberá cancelar un
                      recobro del 30% del costo de la reparación de la pantalla.
                    </p>
                  </>
                ) : plan === "screen" ? (
                  <>
                    <p>
                      Este seguro aplica para clientes que adquieran los planes
                      Popago 5.2, Bancolombia Debito/Credito o Business Combo
                      B2B Ilimitado Voz + 20GB sin ningún costo adicional. Este
                      producto cubre la reparación de la pantalla en caso de
                      rotura por accidente.
                    </p>
                    <h3 className="h6 text-muted">Coberturas</h3>
                    <p>
                      Cubre solo una (1) reclamación por año por fractura de
                      pantalla en caso de accidente.
                    </p>
                    <h3 className="h6 text-muted">Recobro</h3>
                    <p>
                      Recobro por reclamación aprobada: 30% del valor de la
                      pantalla.
                    </p>
                  </>
                ) : null}
                {plan === "all" ? (
                  <>
                    {" "}
                    <h2
                      id="seguro-movil"
                      className="h4 text-primary font-weight-normal"
                    >
                      Seguro Movil
                    </h2>
                    <ul>
                      <li>
                        <p>
                          El IMEI asegurado deberá ser el principal y este debe
                          estar atado a la línea.
                        </p>
                      </li>
                      <li>
                        <p>
                          El IMEI asegurado no debe tener más de 35 meses desde
                          la fecha de fabricación.
                        </p>
                      </li>
                      <li>
                        <p>
                          Aplica una reclamación por vigencia para Hurto
                          Calificado, Hurto Simple o Daño Total Accidental y
                          otra reclamación por Fractura de Pantalla.
                        </p>
                      </li>
                      <li>
                        <p>
                          Aplica para clientes nuevos migrados o portados con
                          equipo comprado en Tigo o en otro operador y/o retail,
                          siempre y cuando hayan adquirido el plan Pospago 5.3,
                          plan Business Combo B2B Voz y SMS Nacional Ilimitado +
                          35GB y/o Combo B2B Voz y SMS Nacional Ilimitado +
                          50GB.
                        </p>
                      </li>
                      <li>
                        <p>
                          Aplica para clientes migrados de planes ATP que
                          contaban con la cobertura del seguro en Smart APP.
                        </p>
                      </li>
                      <li>
                        <p>
                          Aplica para terminales cuyo precio sea menor o igual a
                          $6.500.000 antes de IVA, según la carpeta comercial
                          prepago vigente.
                        </p>
                      </li>
                      <li>
                        <p>
                          Solo se entregará un equipo de la misma marca y modelo
                          o un equivalente de acuerdo con el valor asegurado y a
                          las opciones presentadas por TIGO.
                        </p>
                      </li>
                      <li>
                        <p>
                          Si el cliente realiza un cambio de pospago a prepago o
                          cambio de plan pospago, el servicio se desactivará de
                          forma automática.
                        </p>
                      </li>
                      <li>
                        <p>
                          Si entra en mora en el pago del servicio del plan
                          pospago el seguro queda inactivo hasta que el cliente
                          se ponga al día en el pago.
                        </p>
                      </li>
                      <li>
                        <p>
                          En caso de reclamación aprobada por daño total
                          accidental el cliente deberá cancelar $17.000 pesos
                          por valor de diagnóstico que se realizará a través del
                          servicio técnico especializado de Tigo (Cooper)
                        </p>
                      </li>
                    </ul>
                  </>
                ) : null}
                <h2
                  id="fractura-pantalla"
                  className="h4 text-primary font-weight-normal"
                >
                  Fractura de Pantalla
                </h2>
                <ul>
                  <li>
                    <p>
                      El IMEI asegurado deberá ser el principal y este debe
                      estar atado a la línea.
                    </p>
                  </li>
                  <li>
                    <p>
                      El IMEI asegurado no debe tener más de 35 meses desde la
                      fecha de fabricación.
                    </p>
                  </li>
                  <li>
                    <p>
                      Aplica una reclamación por vigencia por fractura de
                      pantalla.
                    </p>
                  </li>
                  <li>
                    <p>
                      Aplica para clientes nuevos migrados o portados con equipo
                      comprado en Tigo o en otro operador y/o retail, siempre y
                      cuando hayan adquirido el plan Pospago 5.3, plan Business
                      Combo B2B Voz y SMS Nacional Ilimitado + 35GB y/o Combo
                      B2B Voz y SMS Nacional Ilimitado + 50GB.
                    </p>
                  </li>
                  <li>
                    <p>
                      Aplica para terminales cuyo precio sea menor o igual a
                      $6.500.000 antes de IVA, según la carpeta comercial
                      prepago vigente.
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
                      Si el cliente realiza un cambio de pospago a Prepago o
                      cambio de plan pospago, el servicio se desactivará de
                      forma automática.
                    </p>
                  </li>
                  <li>
                    <p>
                      Si entra en mora en el pago del servicio del plan pospago
                      el servicio de este seguro queda inactivo hasta que el
                      cliente se ponga al día en el pago.
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
                      pantalla se realizará con el servicio técnico
                      especializado de Tigo (Cooper) a nivel nacional.
                    </p>
                  </li>
                  <li>
                    <p>
                      En caso de reclamación por pantalla rota deberá realizarse
                      un diagnóstico a través del servicio técnico especializado
                      de Tigo (Cooper), si la solicitud es aprobada este
                      diagnóstico no tendrá ningún cobro, en caso de no
                      aprobación el cliente deberá asumir este costo por valor
                      de $24.740.
                    </p>
                  </li>
                  <li>
                    <p>
                      Para la reparación en algunas marcas o referencias se
                      pueden utilizar repuestos o partes genéricas de categoría
                      triple A.
                    </p>
                  </li>
                </ul>
                <h2
                  id="genereladidades"
                  className="h4 text-primary font-weight-normal"
                >
                  Genereladidades
                </h2>
                <ul>
                  <li>
                    <p>
                      En caso de suscribir la póliza, se entiende que este es un
                      contrato de adhesión, el cual no puede ser modificado en
                      sus condiciones generales y particulares descritas en este
                      documento.
                    </p>
                  </li>
                  <li>
                    <p>
                      Para que la póliza mantenga las condiciones pactadas, es
                      importante que el consumidor cumpla con las garantías y se
                      informe la situación de siniestro de acuerdo a los tiempos
                      y procedimientos definidos en el clausulado general forma
                      P1648 póliza de seguro equipos de telefonía móvil celular,
                      que también estarán disponibles en el sitio web de{" "}
                      <a href="http://www.aseguratucelular.com/">
                        aseguratucelular
                      </a>{" "}
                      y en el siguiente{" "}
                      <a href="https://www.axacolpatria.co/portal/Portals/0/PDF/Clausulados/clausulado-seguro-equipos-telefonia-movil.pdf">
                        {" "}
                        clausulado{" "}
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      La cobertura de seguro a la que hace referencia este
                      certificado estará vigente hasta que se incurra en alguna
                      de las causales de terminación del contrato de seguro
                      establecidas en las condiciones generales o en la ley.
                    </p>
                  </li>
                  <li>
                    <p>
                      El valor asegurado y el monto de la prima, indicados en
                      este certificado, se incrementarán en cada aniversario de
                      este documento con base en el índice anual de precios al
                      consumidor, IPC, establecido al 31 de diciembre del año
                      anterior al aniversario.
                    </p>
                  </li>
                  <li>
                    <p>
                      El contrato de seguros puede ser cancelado en cualquier
                      momento de su vigencia, por lo tanto, deberá acérquese a
                      una tienda TIGO para más información o comunicarse a la
                      línea de atención al cliente <b>#321.</b>
                    </p>
                  </li>
                  <li>
                    <p>
                      Mediante este documento se deja constancia que el
                      asegurado da la autorización para el tratamiento de sus
                      datos personales, desde la celebración del contrato de
                      seguro y durante la ejecución del mismo con la
                      aseguradora, quién recolectará, administrará y usará los
                      datos personales del asegurado en los términos previstos
                      en la legislación aplicable.
                    </p>
                  </li>
                  <li>
                    <p>
                      Además de las exclusiones contenidas en las condiciones
                      generales de la póliza, se excluye toda circunstancia
                      originada en, basada en, o de cualquier manera atribuible
                      a, o como consecuencia directa o indirecta de, actos que
                      supongan sanciones legales de índole comercial, económico
                      o de cualquier naturaleza, en virtud de las cuales esté
                      prohibido expedir seguros o pagar indemnizaciones,
                      incluyendo, pero no limitado a las sanciones impuestas por
                      la OFAC (Office of Foreign Assets Control).
                    </p>
                  </li>
                </ul>
                <h2
                  id="declaraciones-autorizaciones"
                  className="h4 text-primary font-weight-normal"
                >
                  Declaraciones y Autorizaciones
                </h2>
                <p>
                  Mediante el presente documento dejamos constancia que el
                  asegurado ha emitido, previamente a la expedición del presente
                  certificado, las declraciones y autorizaciones sobre los
                  asuntos que se enuncian a continuación:
                </p>
                <ul>
                  <li>
                    <p>
                      El Tomador, Asegurado y/o beneficiario autorizan a la
                      Compañía para que con fines estadísticos y de información
                      entre compañías, entre éstas y las autoridades competentes
                      y con fines de administración de información a través de
                      terceros debidamente autorizados, consulte, almacene,
                      administre, transfiera y reporte a las centrales de datos
                      que considere necesario o a cualquier otra entidad
                      autorizada que se encuentre en el territorio nacional o
                      fuera de éste, la información derivada del presente
                      contrato de seguros y que resulte de todas las operaciones
                      que directa o indirectamente se deriven del contrato de
                      seguros, así como sobre novedades, referencias y manejo de
                      la póliza y demás información que surja del presente
                      contrato el cual el Tomador y/o Asegurado y/o Beneficiario
                      declaran conocer y aceptar en todas sus partes.
                    </p>
                  </li>
                  <li>
                    <p>
                      El asegurado ha sido debidamente informado sobre el
                      alcance y las limitaciones de la cobertura del seguro que
                      ha adquirido, con base en los amparos y las exclusiones
                      establecidas en las condiciones del contrato, las cuales
                      se encuentran a su disposición en la página web{" "}
                      <a href="www.axacolpatria.co">www.axacolpatria.co</a>, en
                      la cual también encontrará, información relevante en
                      materia de protección al consumidor financiero.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
