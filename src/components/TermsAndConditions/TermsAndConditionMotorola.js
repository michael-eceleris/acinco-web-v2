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
        La reclamación del seguro se puede realizar a través de la línea 01 8000
        513 323 o en Bogotá al 3905567 de lunes a viernes de 8 am a 6 pm y
        sábado de 8 am a 2 pm , por WhatsApp al +57 1 5142355 o por medio del
        siguiente link{" "}
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
          <p>Factura de compra del equipo.</p>
        </li>
        <li>
          <p>Copia de la cédula de ciudadanía del cliente ampliado al 150%.</p>
        </li>
        <li>
          <p>Imagen del estado del equipo (laterales y frontales).</p>
        </li>
        <li>
          <p>
            Si la unidad enciende enciende imagen del imei desde el equipo
            (marcar *#06#)
          </p>
        </li>
      </ul>
      <p>
        En un máximo de 5 días hábiles de radicar la documentación, la empresa
        analizará los documentos y dará una respuesta, si es pre-aprobado se
        enviará una solicitud de pago del copago y una orden de reparación para
        que el equipo sea llevado a un punto logístico a nivel nacional a nivel
        nacional autorizado por la empresa para ser trasladado al taller para su
        reparación o en su defecto en el lugar de domicilio indicado por el
        cliente.
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
            Términos y Condiciones del Plan Motorola
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
                    <h2 className="h5 font-weight-normal text-primary text-center">
                      Garantía Extendida
                    </h2>
                    <li>
                      <a
                        className="nav-link rounded-pill scroll-to py-3"
                        href="#plan-extendido"
                      >
                        <i className="fs--13 fi fi-arrow-end-slim"></i>
                        <span>Plan</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link rounded-pill scroll-to py-3"
                        href="#terms-conditions-extend"
                      >
                        <i className="fs--13 fi fi-arrow-end-slim"></i>
                        <span>Términos y Condiciones</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link rounded-pill scroll-to py-3"
                        href="#customer-support-extend"
                      >
                        <i className="fs--13 fi fi-arrow-end-slim"></i>
                        <span>Atención al Cliente</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link rounded-pill scroll-to py-3"
                        href="#documentacion-extend"
                      >
                        <i className="fs--13 fi fi-arrow-end-slim"></i>
                        <span>Documentación</span>
                      </a>
                    </li>
                    <h2 className="h5 font-weight-normal text-primary text-center">
                      Cobertura Todo Riesgo
                    </h2>
                    <li>
                      <a
                        className="nav-link rounded-pill scroll-to py-3"
                        href="#todo-riesgo"
                      >
                        <i className="fs--13 fi fi-arrow-end-slim"></i>
                        <span>Plan</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link rounded-pill scroll-to py-3"
                        href="#terms-conditions-mobile"
                      >
                        <i className="fs--13 fi fi-arrow-end-slim"></i>
                        <span>Seguro Móvil</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link rounded-pill scroll-to py-3"
                        href="#terms-conditions-screen"
                      >
                        <i className="fs--13 fi fi-arrow-end-slim"></i>
                        <span>Seguro de Pantalla</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link rounded-pill scroll-to py-3"
                        href="#condiciones-generales-all"
                      >
                        <i className="fs--13 fi fi-arrow-end-slim"></i>
                        <span>Condiciones Generalidades</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link rounded-pill scroll-to py-3"
                        href="#customer-support-all"
                      >
                        <i className="fs--13 fi fi-arrow-end-slim"></i>
                        <span>Atención al Cliente</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link rounded-pill scroll-to py-3"
                        href="#documentacion-all"
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
                  Motorola
                </h2>
                <p>
                  Esta asistencia cubre la reparación de la pantalla en caso de
                  fractura/rotura por accidente. Está dirigido a todos los
                  usuarios que compren su equipo en tiendas propias MOTOROLA,
                  estos contarán con una (1) reclamación por vigencia por
                  fractura de pantalla.
                </p>
                <h3 className="h6 text-muted">Vigencia</h3>
                <p> Doce (12) meses desde la compra de la póliza</p>
                <h3 className="h6 text-muted">Cobertura</h3>
                <ul>
                  <li>
                    <p>
                      Cubre solo una (1) reclamación por año por fractura de
                      pantalla en caso de accidente.
                    </p>
                  </li>
                  <li>
                    <p>Un (1) año de garantía extendida</p>
                  </li>
                </ul>
                <h3 className="h6 text-muted">Recobro</h3>
                <p>35% del valor de la reparación de la pantalla.</p>
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
                      Aplica únicamente para los clientes que compren su equipo
                      en tiendas propias de Motorola.
                    </p>
                  </li>
                  <li>
                    <p>
                      La reparación de la pantalla no cubre: daños en la tarjeta
                      principal, modúlos de pantalla, carcasas laterales,
                      batería, ni daños por humedad en el equipo.
                    </p>
                  </li>
                  <li>
                    <p>
                      La reparación y logística de la cobertura de protección de
                      pantalla se realizará con el servicio técnico autorizado
                      por Acinco SAS.
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
                  La asistencia de protección de pantalla es un beneficio
                  otorgado por MOTOROLA y asistido por Acinco SAS., el cual
                  cubre la rotura accidental de pantalla por 12 (doce) meses a
                  partir de la fecha de adquisición del equipo. Estarán
                  excluidos del servicio todos aquellos eventos originados,
                  basados o atribuibles a:
                </p>
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
                <CustomerSupport />
                <Documents />
                <h2
                  id="plan-extendido"
                  className="h4 text-primary font-weight-normal"
                >
                  Términos y Condiciones Garantía Extendida Motorola.
                </h2>
                <p>
                  Servicio preferencial para clientes Motorola, estos cuentan
                  con 1 año más de garantía extendida para su equipo MOTOROLA.
                </p>
                <h3 className="h6 text-muted">Vigencia</h3>
                <p>
                  Doce (12) meses, inicia una vez acabe la garantía con
                  MOTOROLA.
                </p>
                <h3 className="h6 text-muted">Cobertura</h3>
                <p>
                  Garantía Extendida 1 año: Cuenta con 1 año de Garantía
                  extendida, la cual empieza una vez terminado el periodo de la
                  garantía dada por MOTOROLA, es decir que, con esta garantía
                  cuentas con 2 años de Garantía para el dispositivo (1 año de
                  la garantía dada por MOTOROLA y 1 año de garantía extendida).
                  Dicha garantía tiene las mismas coberturas que la garantía
                  dada por MOTOROLA.
                </p>
                <h2
                  id="terms-conditions-extend"
                  className="h4 text-primary font-weight-normal"
                >
                  Términos y Condiciones
                </h2>
                <ul>
                  <li>
                    <p>
                      Los beneficiaros cuentan con un año adicional a la
                      garantía dada por MOTOROLA, esta garantía será provista
                      por MOTOROLA a través del operador ACINCO S.A.S., como
                      operador especializado.
                    </p>
                  </li>
                  <li>
                    <p>
                      El consumidor podrá dar efectividad a su garantía ante
                      MOTOROLA, El CENTRO DE SERVICIO AUTORIZADO y el operador
                      ACINCO S.A.S de conformidad con la Ley 1480 de 2011, el
                      Decreto 735 de 2013 y las normas que le modifiquen y
                      complementen.
                    </p>
                  </li>
                  <li>
                    <p>
                      ACINCO S.A.S. llevará a cabos hasta dos (2) reparaciones
                      por garantía extendida, directamente o a través de
                      terceros escogidos por ACINCO S.A.S. bajo su
                      responsabilidad. Si realizadas las dos (2) reparaciones,
                      el equipo móvil debe ser sometido a una tercera (3)
                      reparación, en lugar de desarrollar la respectiva
                      reparación, procederá a reemplazar el equipo móvil, previo
                      diagnóstico del centro de servicio.
                    </p>
                  </li>
                  <li>
                    <p>
                      Las reparaciones no son acumulables con las realizadas
                      durante la garantía dada por MOTOROLA.
                    </p>
                  </li>
                  <li>
                    <p>
                      Los bienes entregados por ACINCO S.A.S. en reemplazo del
                      bien cubierto con la garantía extendida no quedarán
                      cubiertos por esta garantía.
                    </p>
                  </li>
                  <li>
                    <p>
                      COPIAS DE SEGURIDAD O (BACK UP): El software, las
                      licencias, complementos, memorias del usuario, contenidos
                      o cualquier tipo de información que haya sido almacenada
                      por el Consumidor en el producto no será cubierta por la
                      garantía, ni su tratamiento, almacenamiento o recuperación
                      serán responsabilidad de MOTOROLA, El CENTRO DE SERVICIO
                      AUTORIZADO o ACINCO S.A.S. El Consumidor previo a requerir
                      soporte técnico, será el único responsable de respaldar
                      dicha información en sus dispositivos de almacenamiento
                      personal. (Aplica para aquellos productos que posean
                      dichas propiedades).
                    </p>
                  </li>
                </ul>
                <CustomerSupport section={"-extend"} />
                <Documents section={"-extend"} />
                <h2
                  id="todo-riesgo"
                  className="h4 text-primary font-weight-normal"
                >
                  Términos y Condiciones Cobertura Todo Riesgo.
                </h2>
                <p>
                  Está dirigido a todos los usuarios que compren su equipo en
                  tiendas propias MOTOROLA.
                </p>
                <h3 className="h6 text-muted">Vigencia</h3>
                <p>Doce (12) meses.</p>
                <h3 className="h6 text-muted">Cobertura</h3>
                <p>
                  Estos contaran con una (1) reclamación al año por hurto
                  calificado, hurto simple o daño total accidental y una (1)
                  reclamación por fractura de pantalla en caso de accidente
                </p>
                <h3 className="h6 text-muted">Recobro</h3>
                <p>
                  Una vez aprobada la reclamación, el usuario debe cancelar un
                  recobro equivalente al 35% del valor comercial del equipo al
                  momento de la indemnización por hurto calificado, hurto simple
                  y daño total accidental.
                </p>
                <p>
                  Para el caso de reparación de pantalla deberá cancelar un
                  recobro del 35% del costo de la reparación.
                </p>
                <h2
                  id="terms-conditions-mobile"
                  className="h4 text-primary font-weight-normal"
                >
                  Términos y Condiciones Seguro Móvil
                </h2>
                <ul>
                  <li>
                    <p>
                      El IMEI asegurado debe ser única y exclusivamente del
                      inventario de MOTOROLA.
                    </p>
                  </li>
                  <li>
                    <p>
                      Aplica una reclamación por vigencia para Hurto Calificado,
                      Hurto Simple o Daño Total Accidental.
                    </p>
                  </li>
                  <li>
                    <p>
                      Aplica para terminales cuyo precio sea menor o igual de
                      $6.500.000 IVA incluido, según la carpeta comercial de
                      precios vigentes en Motorola.
                    </p>
                  </li>
                  <li>
                    <p>
                      Solo se entregará un equipo de la misma marca y modelo o
                      un equivalente de acuerdo con el valor asegurado y a las
                      opciones presentadas por MOTOROLA.
                    </p>
                  </li>
                  <li>
                    <p>No aplica para equipos comprados en otros países.</p>
                  </li>
                  <li>
                    <p>
                      Para hacer uso del seguro el cliente deberá cancelar un
                      recobro correspondiente al 35% del valor del nuevo equipo.
                    </p>
                  </li>
                </ul>
                <h2
                  id="terms-conditions-screen"
                  className="h4 text-primary font-weight-normal"
                >
                  Términos y Condiciones Seguro de Pantalla
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
                      Aplica únicamente para los clientes que compren su equipo
                      en tiendas propias de Motorola.
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
                      por Axa Colpatria Seguros S.A.
                    </p>
                  </li>
                  <li>
                    <p>No aplica para equipos comprados en otros países.</p>
                  </li>
                  <li>
                    <p>
                      Para hacer uso del seguro el cliente deberá cancelar un
                      recobro correspondiente al 35% del valor de la reparación
                      de la pantalla del equipo.
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
                  id="condiciones-generales-all"
                  className="h4 text-primary font-weight-normal"
                >
                  Condiciones Generales
                </h2>
                <p>
                  El seguro de protección de pantalla, hurto calificado, hurto
                  simple y daño total accidental es un otorgado por Axa
                  Colpatria Seguros S.A., el cual cubre la rotura accidental de
                  pantalla, el hurto calificado, hurto simple o daño total
                  accidental por 12 (doce) meses a partir de la fecha de
                  adquisición del producto. Estarán excluidos del servicio todos
                  aquellos eventos originados, basados o atribuibles a:
                </p>
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
                <CustomerSupport section={"-all"} />
                <h2
                  id={`documentacion-all`}
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
                </p>
                <h4 className="h5 text-primary font-weight-normal">
                  Hurto Calificado
                </h4>
                <ul>
                  <li>
                    <p>
                      Formato de reclamación debidamente diligenciado por el
                      cliente.
                    </p>
                  </li>
                  <li>
                    <p>
                      Copia de la cédula de ciudadanía del cliente ampliado al
                      150%.
                    </p>
                  </li>
                  <li>
                    <p>Factura de compra del equipo.</p>
                  </li>
                  <li>
                    <p>
                      Original o copia del denuncio ante la Fiscalía, Uri 0
                      Sijin.
                    </p>
                  </li>
                  <li>
                    <p>
                      Reporte del hurto debidamente registrado a los sistemas
                      centralizados de la base de datos de proveedores de redes
                      y servicios de telecomunicaciones móviles PRSTM (Listas
                      Negras)
                    </p>
                  </li>
                </ul>
                <h4 className="h5 text-primary font-weight-normal">
                  Hurto Simple
                </h4>
                <ul>
                  <li>
                    <p>
                      Formato de reclamación debidamente diligenciado por el
                      cliente.
                    </p>
                  </li>
                  <li>
                    <p>
                      Copia de la cédula de ciudadanía del cliente ampliado al
                      150%.
                    </p>
                  </li>
                  <li>
                    <p>Factura de compra del equipo.</p>
                  </li>
                  <li>
                    <p>
                      Original o copia de la declaración Extra juicio
                      autenticada que contenga como mínimo la siguiente
                      información: Nombre completo del asegurado, número de
                      identificación, dirección de residencia y del trabajo,
                      teléfono de residencia de del lugar de trabajo, fecha,
                      hora y lugar de ocurrencia, un recuento detallado de los
                      hechos, número de la línea del celular hurtado, marca y
                      modelo del equipo hurtado.
                    </p>
                  </li>
                  <li>
                    <p>
                      Reporte del hurto debidamente registrado a los sistemas
                      centralizados de la base de datos de proveedores de redes
                      y servicios de telecomunicaciones móviles PRSTM (Listas
                      Negras)
                    </p>
                  </li>
                </ul>
                <h4 className="h5 text-primary font-weight-normal">
                  Daño Total Accidental
                </h4>
                <ul>
                  <li>
                    <p>
                      Formato de reclamación debidamente diligenciado por el
                      cliente.
                    </p>
                  </li>
                  <li>
                    <p>
                      Copia de la cédula de ciudadanía del cliente ampliado al
                      150%.
                    </p>
                  </li>
                  <li>
                    <p>Factura de compra del equipo.</p>
                  </li>
                  <li>
                    <p>
                      Informe y diagnóstico del taller autorizado por Axa
                      Colpatria Seguros S.A.
                    </p>
                  </li>
                  <li>
                    <p>Equipo objeto del siniestro.</p>
                  </li>
                </ul>
                <h4 className="h5 text-primary font-weight-normal">
                  Fractura de Pantalla
                </h4>
                <ul>
                  <li>
                    <p>
                      Formato de reclamación debidamente diligenciado por el
                      cliente.
                    </p>
                  </li>
                  <li>
                    <p>
                      Copia de la cédula de ciudadanía del cliente ampliado al
                      150%.
                    </p>
                  </li>
                  <li>
                    <p>Factura de compra del equipo.</p>
                  </li>
                  <li>
                    <p>Imagen del estado del equipo (laterales y frontales).</p>
                  </li>
                  <li>
                    <p>
                      Si la unidad enciende imagen del Imei desde el equipo
                      (marcar *#06#).
                    </p>
                  </li>
                </ul>
                <p>
                  En un máximo de 5 días hábiles de radicar la documentación, la
                  empresa analizará los documentos y dará una respuesta, si es
                  pre-aprobado se enviará una solicitud de pago del copago y una
                  orden de reparación para que el equipo sea llevado a un punto
                  logístico a nivel nacional a nivel nacional autorizado por la
                  empresa para ser trasladado al taller para su reparación o en
                  su defecto en el lugar de domicilio indicado por el cliente.
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
