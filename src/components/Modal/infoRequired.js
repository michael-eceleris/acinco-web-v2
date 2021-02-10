import React, { useContext } from "react";
import "./modal.css";
import FormContext from "../../context/form/formContext";
const InfoRequired = () => {
  const formContext = useContext(FormContext);
  const { showModal, closeModal, submit, product } = formContext;
  const showModalLocal =
    !submit && showModal ? "modal display-block" : "modal display-none";
  const widthModal = product !== null ? "modal-main w-50" : "modal-main w-75";
  const formatoReclamacion = (
    <li>
      <p className="text-justify">
        Formato de reclamación debidamente diligenciado por el cliente, lo
        puedes encontrar{" "}
        <a
          href="https://secureservercdn.net/104.238.68.130/j5f.49f.myftpupload.com/wp-content/uploads/2018/09/Formato_Reclamacion_AXA_COLPATRIA.pdf"
          target="_blank"
          rel="noreferrer"
        >
          aquí
        </a>
        .
      </p>
    </li>
  );
  const cedula = (
    <li>
      <p className="text-justify">
        Copia de la cédula de ciudadanía del cliente ampliado al 150%
      </p>
    </li>
  );
  const camaraComercio = (
    <li>
      <p className="text-justify">
        Para clientes pymes o corporativos se requiere: Certificado de cámara de
        comercio y fotocopia del documento de identificación (ampliado al 150%)
        del representante legal (persona jurídica).
      </p>
    </li>
  );
  const fiscalia = (
    <li>
      <p className="text-justify">
        Original o copia del denuncio ante la Fiscalía
      </p>
    </li>
  );
  const reporte = (
    <li>
      <p className="text-justify">
        Reporte del hurto debidamente registrado a los sistemas centralizados de
        la base de datos de proveedores de redes y servicios de
        telecomunicaciones móviles PRSTM (Listas Negras)
      </p>
    </li>
  );
  const HurtoCalificado = ({ smartplan }) => {
    return (
      <ul>
        <h2 className="h4 font-weight-normal">Hurto Calificado</h2>
        {formatoReclamacion} {cedula}
        {smartplan ? (
          <li>
            <p className="text-justify">Factura de compra legal del equipo.</p>
          </li>
        ) : null}
        {camaraComercio} {fiscalia} {reporte}
      </ul>
    );
  };
  const HurtoSimple = ({ smartplan }) => {
    return (
      <ul>
        <h2 className="h4 font-weight-normal">Hurto Simple</h2>
        {formatoReclamacion} {cedula}
        {smartplan ? (
          <li>
            <p className="text-justify">Factura de compra legal del equipo.</p>
          </li>
        ) : null}
        {camaraComercio}
        <li>
          <p className="text-justify">
            Original o copia de la declaración Extra juicio autenticada que
            contenga como mínimo la siguiente información: Nombre completo del
            asegurado, número de identificación, dirección de residencia y del
            trabajo, teléfono de residencia de del lugar de trabajo, fecha, hora
            y lugar de ocurrencia, un recuento detallado de los hechos, número
            de la línea del celular extraviado, marca y modelo del equipo
            extraviado.
          </p>
        </li>
        {reporte}
      </ul>
    );
  };
  const DañoTotalAccidental = ({ smartplan }) => {
    return (
      <ul>
        <h2 className="h4 font-weight-normal">Daño Total Accidental</h2>
        {formatoReclamacion} {cedula}{" "}
        {smartplan ? (
          <li>
            <p className="text-justify">Factura de compra legal del equipo.</p>
          </li>
        ) : null}{" "}
        {camaraComercio}
        <li>
          <p className="text-justify">
            Informe y diagnóstico del taller autorizado por Tigo.
          </p>
        </li>
        <li>
          <p className="text-justify">Equipo objeto del siniestro.</p>
        </li>
      </ul>
    );
  };
  const FracturaPantalla = () => {
    return (
      <ul>
        <h2 className="h4 font-weight-normal">Fractura de Pantalla</h2>
        {formatoReclamacion}
        <li>
          <p className="text-justify">Factura de compra Tigo</p>
        </li>
        {cedula} {camaraComercio}
        <li>
          <p className="text-justify">Imagen de la pantalla quebrada</p>
        </li>
        <li>
          <p className="text-justify">Imagen del imei del equipo</p>
        </li>
      </ul>
    );
  };
  const openDocs = (evt, docname) => {
    var i, x, tablinks;
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
        <div className="modal-header flex-row">
          <div className="m-auto">
            <h3>DOCUMENTACION PRODUCTOS</h3>
          </div>
          <div className="btn fs--40" onClick={() => closeModal()}>
            x
          </div>
        </div>
        <div className="modal-body">
          {product !== null ? (
            <>
              <div className="nav_doc">
                <button className="btn_one tablink active-doc">
                  <h2 className="h5 font-weight-normal">
                    {product.plan === "Tigo 5.3"
                      ? "Pospago 5.3 - Protección Total"
                      : product.plan === "Tigo 5.2"
                      ? "Pospago 5.2 – Fractura de Pantalla"
                      : null}
                  </h2>
                </button>
              </div>
              <section className="sct_doc">
                <div className="doc">
                  {product.cobertura === "Fractura Pantalla" ? (
                    <FracturaPantalla />
                  ) : product.cobertura === "Hurto Simple" ? (
                    <HurtoSimple />
                  ) : product.cobertura === "Hurto Calificado" ? (
                    <HurtoCalificado />
                  ) : product.cobertura === "Daño Total" ? (
                    <DañoTotalAccidental />
                  ) : null}
                </div>
              </section>
            </>
          ) : (
            <>
              <div className="nav_doc">
                <button
                  className="btn_doc tablink active-doc"
                  onClick={(e) => openDocs(e, /* product */ "protecciontotal")}
                >
                  <h2 className="h5 font-weight-normal">
                    Pospago 5.3 - Protección Total
                  </h2>
                </button>
                <button
                  className="btn_doc tablink"
                  onClick={(e) => openDocs(e, "fracturapantalla")}
                >
                  <h2 className="h5 font-weight-normal">
                    Pospago 5.2 – Fractura de Pantalla
                  </h2>
                </button>
                <button
                  className="btn_doc tablink"
                  onClick={(e) => openDocs(e, "smart")}
                >
                  <h2 className="h5 font-weight-normal">
                    Arma tu Plan – Smart App
                  </h2>
                </button>
                <button
                  className="btn_doc tablink "
                  onClick={(e) => openDocs(e, "gamas")}
                >
                  <h2 className="h5 font-weight-normal">Seguro por gamas</h2>
                </button>
              </div>
              <section className="sct_doc">
                <div id="protecciontotal" className="doc">
                  <HurtoCalificado />
                  <HurtoSimple />
                  <DañoTotalAccidental />
                  <FracturaPantalla />
                </div>
                <div
                  id="fracturapantalla"
                  className="doc"
                  style={{ display: "none" }}
                >
                  <FracturaPantalla />
                </div>
                <div id="smart" className="doc" style={{ display: "none" }}>
                  <HurtoCalificado smartplan={true} />
                  <HurtoSimple smartplan={true} />
                  <DañoTotalAccidental smartplan={true} />
                </div>
                <div id="gamas" className="doc" style={{ display: "none" }}>
                  <HurtoCalificado />
                  <HurtoSimple />
                  <DañoTotalAccidental />
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoRequired;
