import React from "react";

const TermsAndConditions = () => {
  return (
    <>
      <section className="bg-white p-5">
        <div className="container">
          <h1 className="h2 text-center">
            Términos y Condiciones del Plan Samsung
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
                        href="#seguro-pantalla-extendido"
                      >
                        <i className="fs--13 fi fi-arrow-end-slim"></i>
                        <span>Seguro de Pantalla</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link rounded-pill scroll-to py-3"
                        href="#condiciones-generales-extendido"
                      >
                        <i className="fs--13 fi fi-arrow-end-slim"></i>
                        <span>Condiciones Generales</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link rounded-pill scroll-to py-3"
                        href="#seguridad"
                      >
                        <i className="fs--13 fi fi-arrow-end-slim"></i>
                        <span>Seguridad de la información personal</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link rounded-pill scroll-to py-3"
                        href="#legales"
                      >
                        <i className="fs--13 fi fi-arrow-end-slim"></i>
                        <span>Legales de la actividad</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-8">
              <div className="bg-white p-5 p-4-xs rounded-xl article-format">
                <h2 id="plan" className="h4 text-primary font-weight-normal">
                  Información del Plan Samsung
                </h2>
                <p>
                  Este producto cubre la reparación de la pantalla en caso de
                  fractura/rotura por accidente. Está dirigido a todos los
                  usuarios que adquieran su equipo en tiendas especializadas de
                  Samsung (referencias seleccionadas y hasta agotar
                  existencias), estos contaran con una (1) reclamación por
                  vigencia por fractura de pantalla.
                </p>
                <h3 className="h6 text-muted">Vigencia</h3>
                <p> Seis (6) meses</p>
                <h3 className="h6 text-muted">Recobro</h3>
                <p>
                  Un recobro por reclamación aprobada, 20% del valor de la
                  pantalla.
                </p>

                <h2
                  id="seguro-pantalla"
                  className="h4 text-primary font-weight-normal"
                >
                  Seguro de pantalla
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
                      Aplica únicamente para las referencias seleccionadas:
                      Samsung Galaxy Note 8, Samsung Galaxy Note 9, Samsung
                      Galaxy S10, Samsung Galaxy S10+, Samsung Galaxy S10e,
                      Samsung Galaxy S9, Samsung Galaxy S9+, Samsung Galaxy Note
                      10, Samsung A80.
                    </p>
                  </li>
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
                      pantalla se realizará con el servicio técnico
                      especializado de Samsung a nivel nacional.
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
                  otorgado por AXA COLPATRIA SEGUROS S.A., el cual cubre la
                  rotura accidental de pantalla por 12 (doce) meses a partir de
                  la fecha de adquisición de la póliza de hogar. Estarán
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
                <h2
                  id="documentacion"
                  className="h4 text-primary font-weight-normal"
                >
                  Documentación
                </h2>
                <p>
                  Para hacer efectivo el servicio el usuario debe radicar los
                  siguientes documentos por medio de la página web de{" "}
                  <a href="www.aseguratucelular.com.">aseguratucelular</a>
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
                    <p>Imagen de la pantalla quebrada.</p>
                  </li>
                  <li>
                    <p>
                      Imagen del IMEI del equipo en sus partes laterales y
                      frontales.
                    </p>
                  </li>
                  <li>
                    <p>
                      Para hacer uso del seguro el cliente deberá cancelar el
                      deducible correspondiente al 20% del valor de la
                      reparación del equipo.
                    </p>
                  </li>
                </ul>
                <p>
                  En un máximo de 5 días hábiles de entregar los documentos y
                  haber realizado el pago del copago, A Cinco analizará los
                  documentos y dará una respuesta, si es pre-aprobado se enviará
                  una orden de reparación para que el equipo sea llevado a
                  cualquier punto Servientrega a nivel nacional para ser
                  trasladado al taller para su reparación o en su defecto en el
                  lugar de domicilio indicado por el cliente.
                </p>
                <h2
                  id="plan-extendido"
                  className="h4 text-primary font-weight-normal"
                >
                  Información de la Garantía Extendida
                </h2>
                <p>
                  Servicio preferencial para Galaxy Fold denominado GALAXY FOLD
                  PREMIER SERVICE: Galaxy Fold cuenta con un servicio exclusivo
                  de atención personalizada, diseñada para ofrecer la mejor
                  experiencia a los clientes.
                </p>
                <h3 className="h6 text-muted">Cobertura</h3>
                <ul>
                  <li>
                    <p>
                      Fractura de pantalla por 1 año, contando a partir de la
                      fecha de la expedición de la factura de compraventa.
                    </p>
                  </li>
                  <li>
                    <p>
                      Garantía Extendida por 1 año, una vez terminado el periodo
                      de la garantía dada por SAMSUNG ELECTRONICS COLOMBIA S.A.
                    </p>
                  </li>
                </ul>

                <h3 className="h6 text-muted">Vigencia</h3>
                <p> Del 15 de enero de 2020 al 31 de marzo de 2020.</p>
                <h3 className="h6 text-muted">Productos Participantes</h3>
                <p>
                  Modelo Samsung Galaxy Fold (SM-F900FZKJCOO / SM-F900FZSJCOO).
                  Comprado a través de distribuidores autorizados por Samsung en
                  Colombia, No aplica para equipos comprados en otros países.
                </p>
                <h3 className="h6 text-muted">Beneficios</h3>
                <p>
                  <b className="font-weight-medium">
                    Fractura de pantalla por 1 año:{" "}
                  </b>
                  Si el Galaxy Fold llega a sufrir una rotura accidental de la
                  pantalla principal, cuenta con la cobertura de un seguro que
                  cubre 1 ruptura accidental de pantalla durante un año a partir
                  de la fecha de expedición de la factura de compra.
                </p>
                <p>
                  <b className="font-weight-medium">
                    Garantía Extendida 1 año:
                  </b>{" "}
                  Cuenta con 1 año de Garantía extendida, la cual empieza una
                  vez terminado el periodo de la garantía dada por SAMSUNG
                  ELECTRONICS COLOMBIA S.A, es decir que, con esta garantía
                  cuentas con 2 años de Garantía para el dispositivo (1 año de
                  la garantía dada por SAMSUNG ELECTRONIC COLOMBIA S.A. y 1 año
                  de garantía extendida). Dicha garantía tiene las mismas
                  coberturas que la garantía dada por SAMSUNG ELECTRONICS
                  COLOMBIA S.A., es decir, daño en la cámara, auricular,
                  micrófono, ruptura display primario, ruptura display
                  secundario, ruptura tapa trasera y mala manipulación en
                  conectores.
                </p>
                <h2
                  id="condiciones-generales-extendido"
                  className="h4 text-primary font-weight-normal"
                >
                  Condiciones Generales
                </h2>

                <ul>
                  <li>
                    <p>
                      Los usuarios del Galaxy Fold, cuentan con un año adicional
                      a la garantía dada por SAMSUNG ELECTRONICS COLOMBIA S.A.,
                      esta garantía será provista por SAMSUNG ELECTRONICS
                      COLOMBIA S.A. a través del operador ACINCO S.A.S., como
                      operador especializado.
                    </p>
                  </li>
                  <li>
                    <p>
                      El consumidor podrá dar efectividad a su garantía ante
                      SAMSUNG ELECTRONICS COLOMBIA S.A., El CENTRO DE SERVICIO
                      AUTORIZADO y el operador ACINCO S.A.S de conformidad con
                      la Ley 1480 de 2011, el Decreto 735 de 2013 y las normas
                      que le modifiquen y complementen.
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
                      diagnóstico del centro de servicio..
                    </p>
                  </li>
                  <li>
                    <p>
                      Las reparaciones no son acumulables con las realizadas
                      durante la garantía dada por SAMSUNG ELECTRONICS COLOMBIA
                      S.A..
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
                      PLAZO PARA LA REPARACIÓN DEL PRODUCTO: Se procederá con la
                      reparación del producto si presenta falla técnica, entre
                      las cuales se encuentran, daño en la cámara, auricular,
                      micrófono, ruptura display primario, ruptura display
                      secundario, ruptura tapa trasera y mala manipulación en
                      conectores, dentro del año siguiente a la garantía dada
                      por SAMSUNG ELECTRONICS COLOMBIA S.A.
                    </p>
                  </li>
                  <li>
                    <p>
                      COPIAS DE SEGURIDAD O (BACK UP): El software, las
                      licencias, complementos, memorias del usuario, contenidos
                      o cualquier tipo de información que haya sido almacenada
                      por el Consumidor en el producto no será cubierta por la
                      garantía, ni su tratamiento, almacenamiento o recuperación
                      serán responsabilidad de SAMSUNG ELECTRONICS COLOMBIA
                      S.A., El CENTRO DE SERVICIO AUTORIZADO o ACINCO S.A.S. El
                      Consumidor previo a requerir soporte técnico, será el
                      único responsable de respaldar dicha información en sus
                      dispositivos de almacenamiento personal. (Aplica para
                      aquellos productos que posean dichas propiedades).
                    </p>
                  </li>
                </ul>
                <h2
                  id="seguridad"
                  className="h4 text-primary font-weight-normal"
                >
                  Seguridad de la información personal
                </h2>
                <p>
                  SAMSUNG, se compromete a proteger la seguridad de la
                  información personal. Se utilizan diversas tecnologías y
                  procedimientos de seguridad que nos ayudan a proteger su
                  información frente al acceso, revelación y uso no autorizados.
                  Por ejemplo, la información personal proporcionada se almacena
                  en sistemas de acceso limitado, situados en instalaciones
                  controladas. Para más información consulta nuestra política de
                  protección de datos en{" "}
                  <a
                    href="http://www.samsung.com/co/proteccion_de_datos"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://www.samsung.com/co/proteccion_de_datos/{" "}
                  </a>
                  .
                </p>
                <h2 id="legales" className="h4 text-primary font-weight-normal">
                  Legales de la actividad
                </h2>
                <p>
                  “Campaña vigente desde el 15 de enero al 31 de marzo de 2020.
                  Visita una de las tiendas autorizadas, compra el nuevo Samsung
                  Galaxy Fold para que disfrutes del servicio GALAXY FOLD
                  PREMIER SERVICE, que incluye los siguientes beneficios: 1.
                  Samsung Club Premium, 2. Fold Concierge, 3. Samsung Care
                  gratis por 1 año (seguro de pantalla) 4. Garantía Extendida
                  por 1 año. Aplica únicamente para las compras realizadas en
                  las Tiendas Autorizadas Participantes (Tiendas físicas y
                  Online). Los precios de venta al público son definidos por las
                  Tiendas Autorizadas Participantes. Los beneficios no son
                  canjeables por dinero en efectivo, por abonos a cuentas
                  bancarias, abonos a tarjetas de crédito o débito ni por
                  cualquier otro premio. Para acceder a los beneficios de la
                  aplicación Samsung Club Premium, los clientes deberán
                  descargar la aplicación a través de Play Store. Los
                  consumidores podrán contactar a su Fold Concierge en cualquier
                  momento, vía telefónica a #782, y demás opciones disponibles
                  en www.samsung.com/co/support. Samsung Care es un Beneficio
                  exclusivo para usuarios del Samsung Galaxy Fold. El seguro
                  protección de pantalla de Samsung Care es provisto por AXA
                  COLPATRIA SEGUROS S.A. y cubre la rotura accidental de
                  pantalla por 1 (un) evento durante 12 meses a partir de la
                  fecha de expedición de la factura. La reclamación del seguro
                  se puede realizar en la línea 01 8000 513 323 o en Bogotá al
                  4898599 de lunes a sábado de 8am a 6 pm, para hacer efectivo
                  el seguro, el usuario debe presentar la factura a la
                  aseguradora, llenar el formato de reclamación con los soportes
                  requeridos por la aseguradora y debe pagar un deducible del
                  20% del valor de la reparación. La Garantía extendida será
                  provista por SAMSUNG ELECTRONICS COLOMBIA S.A. a través del
                  operador ACINCO S.A.S. Los detalles de la promoción se podrán
                  consultar en{" "}
                  <a
                    href="https://www.samsung.com/co/offer/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.samsung.com.co/offer
                  </a>
                  ”.
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
