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
              <div className="position-sticky" style={{ top: 90 }}>
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
                    {plan === "smart" || plan === "gama" ? (
                      <li>
                        <a
                          className="nav-link rounded-pill scroll-to py-3"
                          href="#terminos"
                        >
                          <i className="fs--13 fi fi-arrow-end-slim"></i>
                          <span>Términos</span>
                        </a>
                      </li>
                    ) : (
                      <li>
                        <a
                          className="nav-link rounded-pill scroll-to py-3"
                          href="#fractura-pantalla"
                        >
                          <i className="fs--13 fi fi-arrow-end-slim"></i>
                          <span>Fractura de Pantalla</span>
                        </a>
                      </li>
                    )}

                    <li>
                      <a
                        className="nav-link rounded-pill scroll-to py-3"
                        href="#exclusiones"
                      >
                        <i className="fs--13 fi fi-arrow-end-slim"></i>
                        <span>Exclusiones</span>
                      </a>
                    </li>

                    <li>
                      <a
                        className="nav-link rounded-pill scroll-to py-3"
                        href="#generalidades"
                      >
                        <i className="fs--13 fi fi-arrow-end-slim"></i>
                        <span>Generalidades</span>
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
                {plan === "all" ? (
                  <h2 id="plan" className="h4 text-primary font-weight-normal">
                    {namePlan} (Seguro Móvil + Seguro Fractura de Pantalla)
                  </h2>
                ) : (
                  <h2 id="plan" className="h4 text-primary font-weight-normal">
                    {namePlan}
                  </h2>
                )}
                {plan === "all" ? (
                  <>
                    <p>
                      Este seguro aplica para clientes que adquieran los planes
                      Pospago 5.3, plan Business Combo B2B Voz y SMS Nacional
                      Ilimitado + 35GB y/o Combo B2B Voz y SMS Nacional
                      Ilimitado + 50GB, sin ningún costo adicional.
                    </p>
                    <h3 className="h6 text-muted">Coberturas</h3>
                    <p>
                      El usuario tiene derecho a (2) reclamaciones por vigencia
                      anual:
                    </p>
                    <ul>
                      <li>
                        <p>
                          Una (1) reclamación por hurto calificado, hurto simple
                          y daño total accidental.
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
                      B2B Ilimitado Voz + 20GB sin ningún costo adicional.
                    </p>
                    <p>
                      Este producto cubre la reparación de la pantalla en caso
                      de rotura por accidente.
                    </p>
                    <h3 className="h6 text-muted">Coberturas</h3>
                    <p>
                      Cubre solo una (1) reclamación por año por fractura de
                      pantalla en caso de accidente.
                    </p>
                    <h3 className="h6 text-muted">Recobros</h3>
                    <p>
                      Recobro por reclamación aprobada: 30% del valor de la
                      pantalla.
                    </p>
                  </>
                ) : plan === "smart" ? (
                  <>
                    <p>
                      Este plan va dirigido a los usuarios Tigo que tenga activo
                      un arma tu plan superior a $74.900 pesos y activen la
                      casilla de Protección Móvil en Smart App.
                    </p>
                    <h3 className="h6 text-muted">Coberturas</h3>
                    <p>
                      Cubre solo una (1) reclamación por año por Hurto
                      Calificado, Hurto Simple o Daño Total Accidental.
                    </p>
                    <h3 className="h6 text-muted">Recobros</h3>
                    <p>
                      Un recobro por reclamación aprobada: 35% del valor
                      comercial del equipo antes de IVA al momento de tu
                      indemnización.
                    </p>
                  </>
                ) : plan === "gama" ? (
                  <>
                    <p>
                      Este plan va dirigido a los usuarios Tigo que tenga activo
                      un arma tu plan Pospago.
                    </p>
                    <h3 className="h6 text-muted">Coberturas</h3>
                    <p>
                      Cubre dos (2) reclamación por año, una (1) por Hurto
                      Calificado o Hurto Simple y una (1) por Daño Total
                      Accidental.
                    </p>
                    <h3 className="h6 text-muted">Recobros</h3>
                    <p>
                      Un recobro por reclamación aprobada: 35% del valor
                      comercial del equipo antes de IVA al momento de tu
                      indemnización.
                    </p>
                  </>
                ) : null}
                {plan === "all" ? (
                  <>
                    <h2
                      id="seguro-movil"
                      className="h4 text-primary font-weight-normal"
                    >
                      Términos y Condiciones Seguro Movil
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
                          servicio técnico especializado de Tigo (Cooper).
                        </p>
                      </li>
                    </ul>
                  </>
                ) : null}
                {plan === "smart" ? (
                  <>
                    <h2
                      id="terminos"
                      className="h4 text-primary font-weight-normal"
                    >
                      Términos y Condiciones Arma tu plan Smart App
                    </h2>
                    <ul>
                      <li>
                        <p>
                          El IMEI a asegurar deberá ser el principal y este debe
                          estar atado a tu línea Tigo y registrado en el App de
                          Protección Móvil.
                        </p>
                      </li>
                      <li>
                        <p>
                          El IMEI asegurado debe encontrarse registrado en las
                          bases de datos de Tigo (Colombia Móvil).
                        </p>
                      </li>

                      <li>
                        <p>
                          Aplica una (1) reclamación por vigencia (cada 12
                          meses) para Hurto Calificado, Hurto Simple o Daño
                          Total Accidental.
                        </p>
                      </li>
                      <li>
                        <p>
                          Aplica para equipos homologados o comprados en Tigo
                          debidamente soportados con factura legal.
                        </p>
                      </li>
                      <li>
                        <p>
                          Para efectos de reclamación por hurto (calificado o
                          simple) debes reportar tu equipo en listas negra o en
                          la base de equipos robados, este proceso se hace a
                          través de Tigo en *300, tener en cuenta que, si tu
                          equipo es doble sim, deben estar reportados los 2
                          seriales.
                        </p>
                      </li>
                      <li>
                        <p>
                          Solo se entregará (indemnizará) un equipo de la misma
                          marca y modelo o un equivalente de acuerdo con las
                          opciones presentadas por TIGO.
                        </p>
                      </li>
                      <li>
                        <p>
                          Para usuarios nuevos la cobertura comienza 24h después
                          de haber activado la aplicación PROTECCION MOVIL en el
                          portal Smart App (Smart.tigo.com.co).
                        </p>
                      </li>
                      <li>
                        <p>
                          Para usuarios que ya contaban con una aplicación
                          activa en Smart App y la reemplazan por PROTECCION
                          MOVIL su vigencia comienza a partir de su próximo
                          corte de facturación.
                        </p>
                      </li>
                      <li>
                        <p>
                          No hay restricción de antigüedad para los equipos a
                          asegurar.
                        </p>
                      </li>
                      <li>
                        <p>
                          El valor asegurado dependerá del valor comercial de tu
                          equipo en el momento del registro y este será validado
                          por la aseguradora.
                        </p>
                      </li>
                      <li>
                        <p>
                          Si desactivas o cambias la aplicación en el portal
                          Smart App perderás tu cobertura
                        </p>
                      </li>
                    </ul>
                  </>
                ) : plan === "gama" ? (
                  <>
                    <h2
                      id="terminos"
                      className="h4 text-primary font-weight-normal"
                    >
                      Términos y Condiciones Seguro por Gama
                    </h2>
                    <ul>
                      <li>
                        <p>
                          El IMEI a asegurar deberá ser el principal y este debe
                          estar atado a tu línea Tigo y registrado en el App de
                          Protección Móvil.
                        </p>
                      </li>
                      <li>
                        <p>
                          El IMEI asegurado debe encontrarse registrado en las
                          bases de datos de Tigo (Colombia Móvil).
                        </p>
                      </li>
                      <li>
                        <p>
                          Aplica dos (2) reclamación por vigencia (cada 12
                          meses), una (1) para Hurto Calificado o Hurto Simple y
                          una (1) por Daño Total Accidental.
                        </p>
                      </li>
                      <li>
                        <p>
                          Para efectos de reclamación por hurto (calificado o
                          simple) debes reportar tu equipo en listas negra o en
                          la base de equipos robados, este proceso se hace a
                          través de Tigo en *300, tener en cuenta que, si tu
                          equipo es doble sim, deben estar reportados los 2
                          seriales
                        </p>
                      </li>
                      <li>
                        <p>
                          Solo se entregará (indemnizará) un equipo de la misma
                          marca y modelo o un equivalente de acuerdo con las
                          opciones presentadas por TIGO.
                        </p>
                      </li>
                      <li>
                        <p>
                          El cobro de la prima se realizará por medio de la
                          factura de Tigo como un valor adicional.
                        </p>
                      </li>
                      <li>
                        <p>
                          Se tendrá un máximo de tres meses para contratar el
                          seguro a partir de la fecha de compra del equipo.
                        </p>
                      </li>
                      <li>
                        <p>
                          El valor asegurado dependerá del valor comercial de tu
                          equipo en el momento de la activación y este será
                          validado por la aseguradora.
                        </p>
                      </li>
                    </ul>
                  </>
                ) : (
                  <>
                    <h2
                      id="fractura-pantalla"
                      className="h4 text-primary font-weight-normal"
                    >
                      Términos y Condiciones Fractura de Pantalla
                    </h2>
                    <ul>
                      <li>
                        <p>
                          El IMEI asegurado deberá ser el principal y este debe
                          estar atado a la línea.
                        </p>
                      </li>
                      {plan === "all" ? (
                        <li>
                          <p>
                            El IMEI asegurado no debe tener más de 35 meses
                            desde la fecha de fabricación.
                          </p>
                        </li>
                      ) : plan === "screen" ? (
                        <li>
                          <p>
                            El IMEI asegurado debe ser única y exclusivamente
                            del inventario de Tigo, no tener más de 6 meses de
                            compra.
                          </p>
                        </li>
                      ) : null}

                      <li>
                        <p>
                          Aplica una reclamación por vigencia por fractura de
                          pantalla.
                        </p>
                      </li>
                      {plan === "all" ? (
                        <li>
                          <p>
                            Aplica para clientes nuevos migrados o portados con
                            equipo comprado en Tigo o en otro operador y/o
                            retail, siempre y cuando hayan adquirido el plan
                            Pospago 5.3, plan Business Combo B2B Voz y SMS
                            Nacional Ilimitado + 35GB y/o Combo B2B Voz y SMS
                            Nacional Ilimitado + 50GB.
                          </p>
                        </li>
                      ) : plan === "screen" ? (
                        <li>
                          <p>
                            Aplica para clientes nuevos migrados o portados con
                            equipo comprado en Tigo, siempre y cuando lo haya
                            adquirido con los planes pospago 5.2 o el plan
                            Business Combo B2B Ilimitado Voz + 20GB.
                          </p>
                        </li>
                      ) : null}
                      {plan === "screen" ? (
                        <li>
                          <p>
                            Aplica para clientes que hayan adquirido su equipo
                            con tarjetas débito o crédito Bancolombia sin
                            importar el plan que tenga con Tigo.
                          </p>
                        </li>
                      ) : null}
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
                          Si entra en mora en el pago del servicio del plan
                          pospago el servicio de este seguro queda inactivo
                          hasta que el cliente se ponga al día en el pago.
                        </p>
                      </li>
                      <li>
                        <p>
                          La reparación de la pantalla no cubre: daños en la
                          tarjeta principal, módulos de pantalla, carcasas
                          laterales, batería, ni daños por humedad en el equipo.
                        </p>
                      </li>
                      <li>
                        <p>
                          La reparación y logística de la cobertura de
                          protección de pantalla se realizará con el servicio
                          técnico especializado de Tigo (Cooper) a nivel
                          nacional.
                        </p>
                      </li>
                      <li>
                        <p>
                          En caso de reclamación por pantalla rota deberá
                          realizarse un diagnóstico a través del servicio
                          técnico especializado de Tigo (Cooper), si la
                          solicitud es aprobada este diagnóstico no tendrá
                          ningún cobro, en caso de no aprobación el cliente
                          deberá asumir este costo por valor de $24.740.
                        </p>
                      </li>
                      {plan === "screen" ? (
                        <>
                          <li>
                            <p>
                              Para usuarios que adquieran el plan Business Combo
                              B2B Ilimitado Voz + 20GB deben adquirir un equipo
                              nuevo y vendido directamente en Tigo al momento de
                              la activación del plan.
                            </p>
                          </li>
                          <li>
                            <p>
                              Es indispensable que el usuario haga el registro
                              en el App de Protección Móvil para que se haga
                              efectiva la activación de la cobertura del seguro.
                            </p>
                          </li>
                        </>
                      ) : null}

                      <li>
                        <p>
                          Para la reparación en algunas marcas o referencias se
                          pueden utilizar repuestos o partes genéricas de
                          categoría triple A.
                        </p>
                      </li>
                    </ul>
                  </>
                )}
                <h2
                  id="exclusiones"
                  className="h4 text-primary font-weight-normal"
                >
                  Exclusiones
                </h2>
                {plan === "smart" || plan === "gama" ? (
                  <ul>
                    <li>
                      <p>
                        Uso indebido, incorrecto o ilícito de la línea por el
                        usuario o un tercero autorizado, o por un tercero no
                        autorizado tales como las pérdidas que sufra el usuario
                        por las llamadas o ingresos a internet y en general de
                        datos, realizados desde el momento del daño total o
                        hurto del equipo propiedad del asegurado, hasta cuando
                        se produzca la desconexión de la línea correspondiente.
                      </p>
                    </li>
                    <li>
                      <p>
                        Dolo o mala fe del usuario o del tercero autorizado por
                        este.
                      </p>
                    </li>
                    <li>
                      <p>
                        Actos mal intencionados del usuario o del tercero
                        autorizado por este.
                      </p>
                    </li>
                    <li>
                      <p>
                        Daños al equipo móvil de telefonía celular que, siendo
                        operado por el usuario o por un tercero autorizado por
                        este, no sean consecuencia de un evento accidental,
                        súbito e imprevisto
                      </p>
                    </li>
                    <li>
                      <p>
                        Deterioro debido a la antigüedad o la falta de uso y a
                        condiciones atmosféricas normales. deficiencias o
                        defectos estéticos.
                      </p>
                    </li>
                    <li>
                      <p>
                        Reparaciones no autorizadas o realizadas por fuera de
                        los centros técnicos especializados avalados por el
                        operador.
                      </p>
                    </li>
                    <li>
                      <p>
                        Manipulación o reparaciones realizadas al equipo móvil
                        antes de la adquisición de la póliza.
                      </p>
                    </li>
                    <li>
                      <p>Reacondicionamiento o recarga de baterías.</p>
                    </li>
                    <li>
                      <p>Lucro cesante.</p>
                    </li>
                    <li>
                      <p>
                        Pérdidas o daños de elementos considerados accesorios
                        del bien asegurado como baterías, audífonos, manos
                        libres, forros y cargadores, entre otros.
                      </p>
                    </li>
                    <li>
                      <p>
                        Hurto cometido por el cónyuge o compañero(a) permanente
                        del asegurado o por parientes suyos por consanguinidad o
                        afinidad hasta del segundo grado y del primer grado
                        civil.
                      </p>
                    </li>
                    <li>
                      <p>
                        Abuso de confianza, de acuerdo con su definición legal,
                        cometido en contra del asegurado.
                      </p>
                    </li>
                    <li>
                      <p>
                        Cambios por renovación o reposición de equipos no
                        reportados a la aseguradora.
                      </p>
                    </li>
                    <li>
                      <p>Cesión de contrato por parte del asegurado.</p>
                    </li>
                    <li>
                      <p>
                        Segundo o posterior bien asegurado involucrado en un
                        mismo evento de hurto calificado o de daño accidental,
                        súbito e imprevisto.
                      </p>
                    </li>
                    <li>
                      <p>
                        Fallas lógicas causadas al equipo terminal por virus o
                        descargas de internet o como consecuencia de la culpa
                        grave del usuario o de un tercero autorizado por este.
                      </p>
                    </li>
                    <li>
                      <p>
                        Cuando en la declaración de los hechos que dieron origen
                        al siniestro del equipo terminal, el usuario no haya
                        manifestado de manera correcta, clara, veraz y
                        suficiente que el equipo terminal asegurado, presentaba
                        actividad con una sim card diferente a la registrada
                        inicialmente con el equipo celular.
                      </p>
                    </li>
                    <li>
                      <p>
                        Cuando no se encuentra reportado en la base de listas
                        negras como robado los dos (2) IMEI del equipo Móvil
                        celular dual sim o el IMEI (1) para los equipos single
                        sim.
                      </p>
                    </li>
                    <li>
                      <p>
                        Extravío, pérdida o abandono del celular por descuido
                        del usuario.
                      </p>
                    </li>
                    <li>
                      <p>
                        Pérdidas o daños accidentales a consecuencia de
                        cualquier tipo de virus informático o por la instalación
                        de programas informáticos en su software.
                      </p>
                    </li>
                    <li>
                      <p>
                        Daños o pérdidas causados por el uso u operación
                        ordinaria del celular asegurado, tales como desgaste,
                        deformación, corrosión, herrumbre y deterioro por falta
                        de uso o proveniente de las condiciones atmosféricas
                        normales. independientemente de las causas de la
                        pérdida, no se pagarán los siguientes costos:
                      </p>
                      <ul>
                        <li>
                          <p>
                            Costos que estén cubiertos bajo la garantía del
                            fabricante o alguna otra garantía extendida.
                          </p>
                        </li>
                        <li>
                          <p>
                            Costos por pérdidas de datos, programas o
                            información no incluida en el celular al momento de
                            compra original.
                          </p>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <p>
                        Reparaciones de terminales que hayan sido manipulados
                        por talleres no autorizados.
                      </p>
                    </li>
                    <li>
                      <p>Cualquier daño o pérdida ocurrida en el extranjero.</p>
                    </li>
                    <li>
                      <p>Daños ocasionados intencionalmente por el usuario.</p>
                    </li>
                  </ul>
                ) : (
                  <ul>
                    {plan === "all" ? (
                      <li>
                        <p>
                          Extravío, pérdida o abandono del celular por descuido
                          del usuario.
                        </p>
                      </li>
                    ) : null}
                    <li>
                      <p>
                        Pérdidas o daños accidentales a consecuencia de
                        cualquier tipo de virus informático o por la instalación
                        de programas informáticos en su software.
                      </p>
                    </li>
                    <li>
                      <p>
                        Daños o pérdidas causados por el uso u operación
                        ordinaria del celular asegurado, tales como desgaste,
                        deformación, corrosión, herrumbre y deterioro por falta
                        de uso o proveniente de las condiciones atmosféricas
                        normales. Independientemente de las causas de la
                        pérdida, no se pagarán los siguientes costos:
                      </p>
                      <ul>
                        <li>
                          <p>
                            Costos que estén cubiertos bajo la garantía del
                            fabricante o alguna otra garantía extendida.
                          </p>
                        </li>
                        <li>
                          <p>
                            Costos por pérdidas de datos, programas o
                            información no incluida en el celular al momento de
                            compra original.
                          </p>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <p>
                        Defectos, daños y cambios cosméticos o estéticos que no
                        afecten el funcionamiento de tu equipo.
                      </p>
                    </li>
                    <li>
                      <p>
                        Reparaciones de terminales que hayan sido manipulados
                        por talleres no autorizados.
                      </p>
                    </li>
                    <li>
                      <p>
                        No se repararán ni cambiarán accesorios como baterías,
                        memorias, cargadores, estuches, etc.
                      </p>
                    </li>
                    <li>
                      <p>
                        NO se cubre daños en la tarjeta principal, módulos de
                        pantalla, carcasas laterales, batería, ni daños por
                        humedad en el equipo.
                      </p>
                    </li>
                    <li>
                      <p>Cualquier daño o pérdida ocurrida en el extranjero.</p>
                    </li>
                    <li>
                      <p>Daños ocasionados intencionalmente por el usuario.</p>
                    </li>
                    <li>
                      <p>Incautación legal.</p>
                    </li>
                    <li>
                      <p>Daño por variación de voltaje.</p>
                    </li>
                    <li>
                      <p>
                        Daños o pérdidas causadas por el uso de una persona no
                        autorizada por el dueño del equipo.
                      </p>
                    </li>
                    <li>
                      <p>
                        Daños ocasionados por actos de la naturaleza. Ejemplo:
                        Terremotos, Tornados, Eventos nucleares.
                      </p>
                    </li>
                    <li>
                      <p>Actos bélicos o guerras.</p>
                    </li>
                    <li>
                      <p>
                        El Seguro no cubre cualquier gasto en el que incurra el
                        usuario presentando o haciéndole seguimiento a un
                        reclamo.
                      </p>
                    </li>
                  </ul>
                )}

                <h2
                  id="generalidades"
                  className="h4 text-primary font-weight-normal"
                >
                  Generalidades
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
                      que también estarán disponibles en el link{" "}
                      <a href="http://www.aseguratucelular.com/">
                        http://www.aseguratucelular.com/
                      </a>{" "}
                      y{" "}
                      <a href="https://www.axacolpatria.co/portal/Portals/0/PDF/Clausulados/clausulado-seguro-equipos-telefonia-movil.pdf">
                        https://www.axacolpatria.co/portal/Portals/0/PDF/Clausulados/clausulado-seguro-equipos-telefonia-movil.pdf
                      </a>
                      .
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
                  {plan !== "smart" && plan !== "gama" ? (
                    <>
                      <li>
                        <p>
                          El valor asegurado y el monto de la prima, indicados
                          en este certificado, se incrementarán en cada
                          aniversario de este documento con base en el índice
                          anual de precios al consumidor, IPC, establecido al 31
                          de diciembre del año anterior al aniversario.
                        </p>
                      </li>
                      <li>
                        <p>
                          El contrato de seguros puede ser cancelado en
                          cualquier momento de su vigencia, por lo tanto, deberá
                          acérquese a una tienda TIGO para más información o
                          comunicarse a la línea de atención al cliente{" "}
                          <b>#321.</b>
                        </p>
                      </li>
                    </>
                  ) : null}

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
                  certificado, las declaraciones y autorizaciones sobre los
                  asuntos que se enuncian a continuación
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
