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
    isLoading,
    previusStep,
    submitForm,
  } = formContext;
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState(false);
  const authContext = useContext(AuthContext);
  const { user } = authContext;
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
    if (isLoading === false && confirmed) {
      submitForm(formData);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className="container py-1 ">
        <h4>Enviar</h4>
        <p className="fs--17">
          Revisa los datos, confirma que esten correctos y envía tu reclamación.
        </p>
        <h6 className="font-weight-medium"> Datos personales:</h6>
        <div className="bg-white rounded font-weight-light">
          <div className="table-responsive">
            <table className="table table-sm text-gray-700">
              <tbody>
                <tr>
                  <td>Nombre:</td>
                  <td>{user.name}</td>
                </tr>
                <tr>
                  <td>Tipo de documento:</td>
                  <td>{user.identification_type.name}</td>
                </tr>
                <tr>
                  <td>Número de documento:</td>
                  <td>{user.identification_number}</td>
                </tr>
                <tr>
                  <td>Género:</td>
                  <td>{moreInfo.nombre_genero}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td> {user.email}</td>
                </tr>
                <tr>
                  <td>Línea Principal Asegurada:</td>
                  <td>{device.linea_uno}</td>
                </tr>
                {device.linea_dos ? (
                  <tr>
                    <td>Línea Secundaria Asegurada: </td>
                    <td>{device.linea_dos}</td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
        <h6 className="font-weight-medium"> Datos del dispositivo:</h6>
        <div className="bg-white rounded font-weight-light">
          <div className="table-responsive">
            <table className="table table-sm text-gray-700">
              <tbody>
                <tr>
                  <td>Marca del dispositivo:</td>
                  <td>{device.dispositivo.nombre}</td>
                </tr>
                <tr>
                  <td>Fabricante:</td>
                  <td>{device.dispositivo.fabricante.nombre}</td>
                </tr>
                <tr>
                  <td>IMEI Principal Asegurado:</td>
                  <td>{device.imei_uno}</td>
                </tr>
                <tr>
                  <td>IMEI Secundario Asegurado:</td>
                  <td>{device.imei_dos}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <h6 className="font-weight-medium">Datos del siniestro</h6>
        <div className="bg-white rounded font-weight-light">
          <div className="table-responsive">
            <table className="table table-sm text-gray-700">
              <tbody>
                <tr>
                  <td>Nombre del plan al que aplica:</td>
                  <td>{plan.plan.nombre}</td>
                </tr>
                <tr>
                  <td>Aplicando a la cobertura de:</td>
                  <td>{coverage.nombre} </td>
                </tr>
                <tr>
                  <td>Fecha del Siniestro:</td>
                  <td>{moreInfo.fecha_siniestro} </td>
                </tr>
                <tr>
                  <td>Ciudad en donde sucedío el siniestro:</td>
                  <td>{moreInfo.nombre_siniestro} </td>
                </tr>
                <tr>
                  <td>Línea con la que sucedío el siniestro:</td>
                  <td>{moreInfo.linea_siniestro_one}</td>
                </tr>
                <tr>
                  <td>Descripción del siniestro</td>
                  <td>{moreInfo.mensaje_ticket}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <h6 className="font-weight-medium "> Documentos cargados:</h6>
        <div className="bg-white rounded font-weight-light mt-2 mb-2">
          <div className="table-responsive">
            <table className="table table-sm text-gray-700">
              <tbody>
                {documents.map((doc) => (
                  <tr key={doc.id}>
                    <td>{doc.nombre_documento_save}</td>
                    <td>{doc.nameFile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {showModal && !isLoading ? <Modal /> : null}
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
            className="btn btn-sm btn-outline-secondary"
            onClick={() => previusStep(3)}
          >
            Atras
          </button>
          <button className="btn btn-sm btn-primary" onClick={handleSubmit}>
            Enviar
            {isLoading ? (
              <i
                class="spinner-border spinner-border-sm ml-2 mr-0"
                role="status"
                aria-hidden="true"
              ></i>
            ) : null}
          </button>
        </div>
      </div>
    </>
  );
};

export default ReviewLayout;
