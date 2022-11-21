import React, { useContext } from "react";
import "../../components/Modal/modal.css";
import FormContext from "../../context/form/formContext";

const InfoRequired = () => {
  const formContext = useContext(FormContext);
  const { showModal, closeModal, submit, product, submitContact } = formContext;

  const showModalLocal =
    !submit && showModal && !submitContact
      ? "modal display-block"
      : "modal display-none";

  const widthModal =
    product !== null
      ? "modal-main w-50 tablelogin"
      : "modal-main w-75 tablelogin";

  const formatoReclamacion = (
    <li>
      <p className='text-justify'>
        Formato de reclamación debidamente diligenciado por el cliente, lo
        puedes descargar dando click en el siguiente{" "}
        <a
          href={`https://files-statics-protegeme.s3.amazonaws.com/ASEGURATUCELULAR/Formato_Reclamacion_AXA_COLPATRIA.pdf`}
          target='_blank'
          rel='noreferrer'
        >
          link
        </a>
        .
        {product ? (
          <span className=' fs--15 text-red-500 ml--2 '>*</span>
        ) : null}
      </p>
    </li>
  );
  const formatoReclamacionAcinco = (
    <li>
      <p className='text-justify'>
        Formato de reclamación debidamente diligenciado por el cliente, lo
        puedes descargar dando click en el siguiente{" "}
        <a
          href={
            "https://files-statics-protegeme.s3.amazonaws.com/ASEGURATUCELULAR/Formato_Reclamacion_A5.pdf"
          }
          target='_blank'
          rel='noreferrer'
        >
          link
        </a>
        .
        {product ? (
          <span className=' fs--15 text-red-500 ml--2 '>*</span>
        ) : null}
      </p>
    </li>
  );
  const cedula = (
    <li>
      <p className='text-justify'>
        Copia de la cédula de ciudadanía del cliente ampliado al 150%
        {product ? (
          <span className=' fs--15 text-red-500 ml--2 '>*</span>
        ) : null}
      </p>
    </li>
  );
  const camaraComercio = (
    <li>
      <p className='text-justify'>
        Para clientes pymes o corporativos se requiere: Certificado de cámara de
        comercio y fotocopia del documento de identificación (ampliado al 150%)
        del representante legal (persona jurídica).
        {product ? (
          <span className=' fs--15 text-red-500 ml--2 '>*</span>
        ) : null}
      </p>
    </li>
  );
  const fiscalia = (
    <li>
      <p className='text-justify'>
        Original o copia del denuncio ante la Fiscalía.
        {product ? (
          <span className=' fs--15 text-red-500 ml--2 '>*</span>
        ) : null}
      </p>
    </li>
  );
  const reporte = (
    <li>
      <p className='text-justify'>
        Reporte del hurto debidamente registrado a los sistemas centralizados de
        la base de datos de proveedores de redes y servicios de
        telecomunicaciones móviles PRSTM (Listas Negras).
        {product ? (
          <span className=' fs--15 text-red-500 ml--2 '>*</span>
        ) : null}
      </p>
    </li>
  );
  const HurtoCalificado = () => {
    return (
      <>
        <h2 className='h4 font-weight-normal'>Hurto Calificado</h2>
        {formatoReclamacion} {cedula}
        {camaraComercio} {fiscalia} {reporte}
        <li>
          <p className='text-justify'>
            Factura de la compra del equipo o formato declaración de único uso.
          </p>
        </li>
      </>
    );
  };
  const HurtoSimple = () => {
    return (
      <>
        <h2 className='h4 font-weight-normal'>Hurto Simple</h2>
        {formatoReclamacion} {cedula}
        {camaraComercio}
        <li>
          <p className='text-justify'>
            Original o copia de la declaración Extra juicio autenticada que
            contenga como mínimo la siguiente información: Nombre completo del
            asegurado, número de identificación, dirección de residencia y del
            trabajo, teléfono de residencia y del lugar de trabajo, fecha, hora
            y lugar de ocurrencia, un recuento detallado de los hechos, número
            de la línea del celular extraviado, marca y modelo del equipo
            extraviado.
            {product ? (
              <span className=' fs--15 text-red-500 ml--2 '>*</span>
            ) : null}
          </p>
        </li>
        {reporte}
        <li>
          <p className='text-justify'>
            Factura de la compra del equipo o formato declaración de único uso.
          </p>
        </li>
      </>
    );
  };
  const DañoTotalAccidental = () => {
    return (
      <>
        <h2 className='h4 font-weight-normal'>Daño Fisico</h2>
        {formatoReclamacion} {cedula} {camaraComercio}
        <li>
          <p className='text-justify'>
            Imágenes del equipo (laterales, frontales, superior, posterior e
            IMEI)
          </p>
        </li>
        <li>
          <p className='text-justify'>
            Equipo objeto del siniestro.{" "}
            {product ? (
              <span className=' fs--15 text-red-500 ml--2 '>*</span>
            ) : null}
          </p>
        </li>
        <li>
          <p className='text-justify'>
            Factura de la compra del equipo o formato declaración de único uso.
          </p>
        </li>
      </>
    );
  };
  const FallaMecanica = () => {
    return (
      <>
        <h2 className='h4 font-weight-normal'>Falla Mecánica</h2>
        {formatoReclamacionAcinco}
        {cedula} {camaraComercio}
        <li>
          <p className='text-justify'>
            Imágenes del equipo (laterales, frontales, superior, posterior e
            IMEI)
            {product ? (
              <span className=' fs--15 text-red-500 ml--2 '>*</span>
            ) : null}
          </p>
        </li>
        <li>
          <p className='text-justify'>
            Equipo objeto del siniestro.{" "}
            {product ? (
              <span className=' fs--15 text-red-500 ml--2 '>*</span>
            ) : null}
          </p>
        </li>
        <li>
          <p className='text-justify'>
            Factura de la compra del equipo o formato declaración de único uso.
          </p>
        </li>
      </>
    );
  };
  const RemplazoBateria = () => {
    return (
      <>
        <h2 className='h4 font-weight-normal'>Remplazo Batería</h2>
        {formatoReclamacionAcinco}
        {cedula} {camaraComercio}
        <li>
          <p className='text-justify'>
            Imágenes del equipo (laterales, frontales, superior, posterior e
            IMEI)
            {product ? (
              <span className=' fs--15 text-red-500 ml--2 '>*</span>
            ) : null}
          </p>
        </li>
        <li>
          <p className='text-justify'>
            Equipo objeto del siniestro.{" "}
            {product ? (
              <span className=' fs--15 text-red-500 ml--2 '>*</span>
            ) : null}
          </p>
        </li>
        <li>
          <p className='text-justify'>
            Factura de la compra del equipo o formato declaración de único uso.
          </p>
        </li>
      </>
    );
  };

  const GarantiaExtendida = () => {
    return (
      <>
        <h2 className='h4 font-weight-normal'>Garantía Extendida</h2>
        {formatoReclamacionAcinco}
        {cedula} {camaraComercio}
        <li>
          <p className='text-justify'>
            Imágenes del equipo (laterales, frontales, superior, posterior e
            IMEI)
            {product ? (
              <span className=' fs--15 text-red-500 ml--2 '>*</span>
            ) : null}
          </p>
        </li>
        <li>
          <p className='text-justify'>
            Equipo objeto del siniestro.{" "}
            {product ? (
              <span className=' fs--15 text-red-500 ml--2 '>*</span>
            ) : null}
          </p>
        </li>
        <li>
          <p className='text-justify'>
            Factura de la compra del equipo o formato declaración de único uso.
          </p>
        </li>
      </>
    );
  };
  const openDocs = (evt, docname) => {
    let i, x, tablinks;
    x = document.getElementsByClassName("doc");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active-doc", "");
    }
    document.getElementById(docname).style.display = "block";
    evt.currentTarget.className += " active-doc";
  };
  return (
    <div className={showModalLocal}>
      <div className={widthModal}>
        <div className='modal-header flex-row'>
          <div className='m-auto'>
            <h3 className='h6-xs'>DOCUMENTACION | COBERTURAS</h3>
          </div>
          <button className='btn btn-icon' onClick={() => closeModal()}>
            <b>
              <i className='fi fi-close fs--25 mb--7'></i>
            </b>
          </button>
        </div>
        <div className='modal-body'>
          <>
            <div className='nav_doc d-flex flex-row '>
              <>
                <button
                  className='btn_doc tablink active-doc'
                  onClick={(e) => openDocs(e, "hurtocalificado")}
                >
                  <h2 className='h5 font-weight-normal h6-xs'>
                    Hurto Calificado
                  </h2>
                </button>
                <button
                  className='btn_doc tablink'
                  onClick={(e) => openDocs(e, "hurtosimple")}
                >
                  <h2 className='h5 font-weight-normal h6-xs'>Hurto Simple</h2>
                </button>
                <button
                  className='btn_doc tablink'
                  onClick={(e) => openDocs(e, "danofisico")}
                >
                  <h2 className='h5 font-weight-normal h6-xs'>Daño Fisico</h2>
                </button>
                <button
                  className='btn_doc tablink '
                  onClick={(e) => openDocs(e, "fallamecanica")}
                >
                  <h2 className='h5 font-weight-normal h6-xs'>
                    Falla Mecánica
                  </h2>
                </button>
                <button
                  className='btn_doc tablink '
                  onClick={(e) => openDocs(e, "bateria")}
                >
                  <h2 className='h5 font-weight-normal h6-xs'>
                    Remplazo Batería
                  </h2>
                </button>
                <button
                  className='btn_doc tablink '
                  onClick={(e) => openDocs(e, "extendida")}
                >
                  <h2 className='h5 font-weight-normal h6-xs'>
                    Garantía Extendida
                  </h2>
                </button>
              </>
            </div>
            <section className='sct_doc'>
              <>
                <div
                  id='hurtocalificado'
                  className='doc'
                  style={{ display: "block" }}
                >
                  <ul>
                    <HurtoCalificado />
                  </ul>
                </div>
                <div
                  id='hurtosimple'
                  className='doc'
                  style={{ display: "none" }}
                >
                  <ul>
                    <HurtoSimple />
                  </ul>
                </div>
                <div
                  id='danofisico'
                  className='doc'
                  style={{ display: "none" }}
                >
                  <ul>
                    <DañoTotalAccidental />
                  </ul>
                </div>
                <div
                  id='fallamecanica'
                  className='doc'
                  style={{ display: "none" }}
                >
                  <ul>
                    <FallaMecanica />
                  </ul>
                </div>
                <div id='bateria' className='doc' style={{ display: "none" }}>
                  <ul>
                    <RemplazoBateria />
                  </ul>
                </div>
                <div id='extendida' className='doc' style={{ display: "none" }}>
                  <ul>
                    <GarantiaExtendida />
                  </ul>
                </div>
              </>
            </section>
          </>
        </div>
      </div>
    </div>
  );
};

export default InfoRequired;
