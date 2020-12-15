import React, { useContext, useState } from "react";
import FormContext from "../context/form/formContext";
import AuthContext from "../context/auth/authContext";
import Modal from "../components/Modal";
const ReviewLayout = () => {
  const formContext = useContext(FormContext);
  const {
    device,
    showModal,
    plan,
    coverage,
    documents,
    moreInfo,
    previusStep,
    submitForm,
    clearForm,
  } = formContext;
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState(false);
  const authContext = useContext(AuthContext);
  const { user, logOut } = authContext;
  const { imei_uno } = device;
  const {
    mensaje_ticket,
    linea_siniestro_one,
    fecha_siniestro,
    genero_reclamante,
    ciudad_siniestro,
  } = moreInfo;
  const formData = {
    cliente_id: user.id,
    imei_dispositivo_one: imei_uno,
    plan_id: plan.plan.id,
    tipo_cobertura_cobertura_id: coverage.id,
    tipo_ticket_id: 1,
    mensaje_ticket,
    linea_siniestro_one,
    ciudad_siniestro,
    fecha_siniestro,
    genero_reclamante_id: parseInt(genero_reclamante),
    documentos_requerido_id: documents,
  };

  const handleSubmit = () => {
    if (confirmed) {
      clearForm();
      logOut();
      previusStep(0);
      submitForm(formData);
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <>
      <div className="container py-1">
        <h4>Enviar</h4>
        <p className="fs--17">
          Revisa los datos, confirma que esten correctos y envía tu reclamación.
        </p>
        <h6 className="font-weight-medium"> Datos personales:</h6>
        <div className="bg-white rounded">
          <div className="table-responsive ">
            <table className="table table-sm text-gray-700">
              <tbody>
                <tr>
                  <td width="50%">Nombre:</td>
                  <td width="50%">{user.name}</td>
                </tr>
                <tr>
                  <td width="50%">Tipo de documento:</td>
                  <td width="50%">{user.identification_type.name}</td>
                </tr>
                <tr>
                  <td width="50%">Número de documento:</td>
                  <td width="50%">{user.identification_number}</td>
                </tr>
                <tr>
                  <td width="50%">Email:</td>
                  <td width="50%"> {user.email}</td>
                </tr>
                <tr>
                  <td width="50%">Línea Principal:</td>
                  <td width="50%">{device.linea_uno}</td>
                </tr>
                {device.linea_dos ? (
                  <tr>
                    <td width="50%">Línea Secundaria: </td>
                    <td width="50%">{device.linea_dos}</td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
        <h6 className="font-weight-medium"> Datos del plan:</h6>
        <div className="bg-white rounded">
          <div className="table-responsive">
            <table className="table table-sm text-gray-700">
              <tbody>
                <tr>
                  <td width="50%">Nombre del plan:</td>
                  <td width="50%">{plan.plan.nombre}</td>
                </tr>
                <tr>
                  <td width="50%">Aplicando a la cobertura de:</td>
                  <td width="50%">{coverage.nombre} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h6 className="font-weight-medium"> Datos del dispositivo:</h6>
        <div className="bg-white rounded">
          <div className="table-responsive">
            <table className="table table-sm text-gray-700">
              <tbody>
                <tr>
                  <td width="50%">Marca del dispositivo:</td>
                  <td width="50%">{device.dispositivo.nombre}</td>
                </tr>
                <tr>
                  <td width="50%">Fabricante:</td>
                  <td width="50%">{device.dispositivo.fabricante.nombre}</td>
                </tr>
                <tr>
                  <td width="50%">IMEI Principal:</td>
                  <td width="50%">{device.imei_uno}</td>
                </tr>
                <tr>
                  <td width="50%">IMEI Secundario:</td>
                  <td width="50%">{device.imei_dos}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <h6 className="font-weight-medium">Datos del siniestro</h6>
        <div className="bg-white rounded">
          <div className="table-responsive">
            <table className="table table-sm text-gray-700">
              <tbody>
                <tr>
                  <td width="50%">Género:</td>
                  <td width="50%">{moreInfo.nombre_genero}</td>
                </tr>
                <tr>
                  <td width="50%">Fecha del Siniestro:</td>
                  <td width="50%">{moreInfo.fecha_siniestro} </td>
                </tr>
                <tr>
                  <td width="50%">Ciudad del Siniestro:</td>
                  <td width="50%">{moreInfo.nombre_siniestro} </td>
                </tr>
                <tr>
                  <td width="50%">Línea del Siniestro:</td>
                  <td width="50%">{moreInfo.linea_siniestro_one}</td>
                </tr>
                <tr>
                  <td width="50%">Descripción</td>
                  <td width="50%">{moreInfo.mensaje_ticket}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <h6 className="font-weight-medium"> Documentos cargados:</h6>
        <div className="bg-white rounded">
          <div className="table-responsive">
            <table className="table table-sm text-gray-700">
              <tbody>
                {documents.map((doc) => (
                  <tr>
                    <td width="50%">{doc.nombre_documento_save}</td>
                    <td width="50%">{doc.nameFile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {showModal ? <Modal /> : null}
        <label className="form-checkbox form-checkbox-primary">
          <input
            type="checkbox"
            checked={confirmed}
            onChange={() => setConfirmed(!confirmed)}
          />
          <i></i>Confirmas que se envie la reclamación.
        </label>

        {error ? <p className="text-danger">* Requerido</p> : null}
        <div className="mt-4 d-flex justify-content-between">
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => previusStep(3)}
          >
            Atras
          </button>
          <button className="btn btn-sm btn-primary" onClick={handleSubmit}>
            Enviar
          </button>
        </div>
      </div>
    </>
  );
};

export default ReviewLayout;
