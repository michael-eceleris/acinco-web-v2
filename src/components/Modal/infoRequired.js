import React, { useContext } from "react";
import "./modal.css";
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
      <p className="text-justify">
        Formato de reclamación debidamente diligenciado por el cliente, lo
        puedes descargar dando click en el siguiente{" "}
        <a
          href="https://secureservercdn.net/104.238.68.130/j5f.49f.myftpupload.com/wp-content/uploads/2018/09/Formato_Reclamacion_AXA_COLPATRIA.pdf"
          target="_blank"
          rel="noreferrer"
        >
          link
        </a>
        .
        {product ? (
          <span className=" fs--15 text-red-500 ml--2 ">*</span>
        ) : null}
      </p>
    </li>
  );
  const cedula = (
    <li>
      <p className="text-justify">
        Copia de la cédula de ciudadanía del cliente ampliado al 150%
        {product ? (
          <span className=" fs--15 text-red-500 ml--2 ">*</span>
        ) : null}
      </p>
    </li>
  );
  const camaraComercio = (
    <li>
      <p className="text-justify">
        Para clientes pymes o corporativos se requiere: Certificado de cámara de
        comercio y fotocopia del documento de identificación (ampliado al 150%)
        del representante legal (persona jurídica).
        {product ? (
          <span className=" fs--15 text-red-500 ml--2 ">*</span>
        ) : null}
      </p>
    </li>
  );
  const fiscalia = (
    <li>
      <p className="text-justify">
        Original o copia del denuncio ante la Fiscalía.
        {product ? (
          <span className=" fs--15 text-red-500 ml--2 ">*</span>
        ) : null}
      </p>
    </li>
  );
  const reporte = (
    <li>
      <p className="text-justify">
        Reporte del hurto debidamente registrado a los sistemas centralizados de
        la base de datos de proveedores de redes y servicios de
        telecomunicaciones móviles PRSTM (Listas Negras).
        {product ? (
          <span className=" fs--15 text-red-500 ml--2 ">*</span>
        ) : null}
      </p>
    </li>
  );
  const HurtoCalificado = () => {
    return (
      <>
        {product ? null : (
          <h2 className="h4 font-weight-normal">Hurto Calificado</h2>
        )}
        {formatoReclamacion} {cedula}
        {camaraComercio} {fiscalia} {reporte}
        <li>
          <p className="text-justify">
            Puedes anexar la factura de compra legal del equipo, con esto nos
            ayudarías con el proceso y así tener una respuesta pronta.
          </p>
        </li>
      </>
    );
  };
  const HurtoSimple = () => {
    return (
      <>
        {product ? null : (
          <h2 className="h4 font-weight-normal">Hurto Simple</h2>
        )}
        {formatoReclamacion} {cedula}
        {camaraComercio}
        <li>
          <p className="text-justify">
            Original o copia de la declaración Extra juicio autenticada que
            contenga como mínimo la siguiente información: Nombre completo del
            asegurado, número de identificación, dirección de residencia y del
            trabajo, teléfono de residencia y del lugar de trabajo, fecha, hora
            y lugar de ocurrencia, un recuento detallado de los hechos, número
            de la línea del celular extraviado, marca y modelo del equipo
            extraviado.
            {product ? (
              <span className=" fs--15 text-red-500 ml--2 ">*</span>
            ) : null}
          </p>
        </li>
        {reporte}
        <li>
          <p className="text-justify">
            Puedes anexar la factura de compra legal del equipo, con esto nos
            ayudarías con el proceso y así tener una respuesta pronta.
          </p>
        </li>
      </>
    );
  };
  const DañoTotalAccidental = ({ smartplan }) => {
    return (
      <>
        {product ? null : (
          <h2 className="h4 font-weight-normal">Daño Total Accidental</h2>
        )}
        {formatoReclamacion} {cedula} {camaraComercio}
        <li>
          <p className="text-justify">
            Informe y diagnóstico del taller autorizado por Tigo.{" "}
            {product ? (
              <span className=" fs--15 text-red-500 ml--2 ">*</span>
            ) : null}
          </p>
        </li>
        <li>
          <p className="text-justify">
            Equipo objeto del siniestro.{" "}
            {product ? (
              <span className=" fs--15 text-red-500 ml--2 ">*</span>
            ) : null}
          </p>
        </li>
        <li>
          <p className="text-justify">
            Puedes anexar la factura de compra legal del equipo, con esto nos
            ayudarías con el proceso y así tener una respuesta pronta.
          </p>
        </li>
      </>
    );
  };
  const FracturaPantalla = () => {
    return (
      <>
        {product ? null : (
          <h2 className="h4 font-weight-normal">Fractura de Pantalla</h2>
        )}
        {formatoReclamacion}
        {cedula} {camaraComercio}
        <li>
          <p className="text-justify">
            Imagen de la pantalla quebrada.{" "}
            {product ? (
              <span className=" fs--15 text-red-500 ml--2 ">*</span>
            ) : null}
          </p>
        </li>
        <li>
          <p className="text-justify">
            Imagen del imei del equipo.{" "}
            {product ? (
              <span className=" fs--15 text-red-500 ml--2 ">*</span>
            ) : null}
          </p>
        </li>
        <li>
          <p className="text-justify">
            Puedes anexar la factura de compra legal del equipo, con esto nos
            ayudarías con el proceso y así tener una respuesta pronta.
          </p>
        </li>
      </>
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
            {product !== null ? (
              <h4 className="text-center h5-xs">
                INTRUCCIONES PARA REALIZAR LA RECLAMACIÓN
              </h4>
            ) : (
              <h3 className="h6-xs">DOCUMENTACION PRODUCTOS</h3>
            )}
          </div>
          <button className="btn btn-icon" onClick={() => closeModal()}>
            <b>
              <i className="fi fi-close fs--25 mb--7"></i>
            </b>
          </button>
        </div>
        <div className="modal-body">
          {product !== null ? (
            <>
              <div className="nav_doc">
                <button className="btn_one tablink active-doc">
                  <h2 className="h5 font-weight-normal">
                    {product.plan === "Tigo 5.3" ? (
                      <>
                        <p className="fs--30 mb-1">{product.cobertura}</p>
                        <p className="fs--20">Pospago 5.3 - Protección Total</p>
                      </>
                    ) : product.plan === "Tigo 5.2" ? (
                      <>
                        <p className="fs--30 mb-1">{product.cobertura}</p>
                        <p className="fs--20">
                          Pospago 5.2 – Fractura de Pantalla
                        </p>
                      </>
                    ) : null}
                  </h2>
                </button>
              </div>
              <section className="pt-6 pb-4 info">
                <div className="doc">
                  {product.cobertura === "Fractura Pantalla" ? (
                    <ol>
                      <FracturaPantalla />
                    </ol>
                  ) : product.cobertura === "Hurto Simple" ? (
                    <ol>
                      <HurtoSimple />
                    </ol>
                  ) : product.cobertura === "Hurto Calificado" ? (
                    <ol>
                      <HurtoCalificado />
                    </ol>
                  ) : product.cobertura === "Daño Total" ? (
                    <ol>
                      <DañoTotalAccidental />
                    </ol>
                  ) : null}
                </div>
              </section>
            </>
          ) : (
            <>
              <div className="nav_doc">
                <button
                  className="btn_doc tablink active-doc"
                  onClick={(e) => openDocs(e, "protecciontotal")}
                >
                  <h2 className="h5 font-weight-normal h6-xs">
                    Pospago 5.3 - Protección Total
                  </h2>
                </button>
                <button
                  className="btn_doc tablink"
                  onClick={(e) => openDocs(e, "fracturapantalla")}
                >
                  <h2 className="h5 font-weight-normal h6-xs">
                    Pospago 5.2 – Fractura de Pantalla
                  </h2>
                </button>
                <button
                  className="btn_doc tablink"
                  onClick={(e) => openDocs(e, "smart")}
                >
                  <h2 className="h5 font-weight-normal h6-xs">
                    Arma tu Plan – Smart App
                  </h2>
                </button>
                <button
                  className="btn_doc tablink "
                  onClick={(e) => openDocs(e, "gamas")}
                >
                  <h2 className="h5 font-weight-normal h6-xs">
                    Seguro por gamas
                  </h2>
                </button>
              </div>
              <section className="sct_doc">
                <div
                  id="protecciontotal"
                  className="doc"
                  style={{ display: "block" }}
                >
                  <ul>
                    <HurtoCalificado />
                    <HurtoSimple />
                    <DañoTotalAccidental />
                    <FracturaPantalla />
                  </ul>
                </div>
                <div
                  id="fracturapantalla"
                  className="doc"
                  style={{ display: "none" }}
                >
                  <ul>
                    <FracturaPantalla />
                  </ul>
                </div>
                <div id="smart" className="doc" style={{ display: "none" }}>
                  <ul>
                    <HurtoCalificado smartplan={true} />
                    <HurtoSimple smartplan={true} />
                    <DañoTotalAccidental smartplan={true} />
                  </ul>
                </div>
                <div id="gamas" className="doc" style={{ display: "none" }}>
                  <ul>
                    <HurtoCalificado />
                    <HurtoSimple />
                    <DañoTotalAccidental />
                  </ul>
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
