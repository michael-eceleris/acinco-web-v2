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
    loading,
  } = formContext;
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState(false);
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const { imei_uno } = device;
  const { valor_asegurado } = plan;

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
      loading(true);
      setTimeout(() => {
        loading(false);
      }, 2500);
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
        <div className="bg-white rounded font-weight-light mb-4 ">
          <div className="table-responsive">
            <table className="table table-sm text-gray-700">
              <tbody>
                <tr>
                  <td className="border-top-0">
                    <h6 className="font-weight-medium mb-4">
                      Datos personales
                    </h6>
                  </td>
                  <td className="border-top-0">&nbsp;</td>
                </tr>

                <tr>
                  <td className="border-bottom border-top-0">Nombre:</td>
                  <td className="border-bottom border-top-0">{user.name}</td>
                </tr>
                <tr>
                  <td className="border-bottom border-top-0">
                    Tipo de documento:
                  </td>
                  <td className="border-bottom border-top-0">
                    {user.identification_type.name}
                  </td>
                </tr>
                <tr>
                  <td className="border-bottom border-top-0">
                    Número de documento:
                  </td>
                  <td className="border-bottom border-top-0">
                    {user.identification_number}
                  </td>
                </tr>
                <tr>
                  <td className="border-bottom border-top-0">Género:</td>
                  <td className="border-bottom border-top-0">
                    {moreInfo.nombre_genero}
                  </td>
                </tr>
                <tr>
                  <td className="border-bottom border-top-0">Email:</td>
                  <td className="border-bottom border-top-0"> {user.email}</td>
                </tr>
                <tr>
                  <td className="border-bottom border-top-0">
                    Línea Principal Asegurada:
                  </td>
                  <td className="border-bottom border-top-0">
                    {device.linea_uno}
                  </td>
                </tr>
                {device.linea_dos !== null ? (
                  <tr>
                    <td className="border-bottom border-top-0">
                      Línea Secundaria Asegurada:{" "}
                    </td>
                    <td className="border-bottom border-top-0">
                      {device.linea_dos}
                    </td>
                  </tr>
                ) : null}
                <tr>
                  <td className="border-top-0">
                    <h6 className="font-weight-medium mb-4 mt-4">
                      Datos del dispositivo
                    </h6>
                  </td>
                  <td className="border-top-0">&nbsp;</td>
                </tr>
                <tr>
                  <td className="border-bottom border-top-0">
                    Modelo del dispositivo:
                  </td>
                  <td className="border-bottom border-top-0">
                    {device.dispositivo.nombre}
                  </td>
                </tr>
                <tr>
                  <td className="border-bottom border-top-0">Fabricante:</td>
                  <td className="border-bottom border-top-0">
                    {device.dispositivo.fabricante.nombre}
                  </td>
                </tr>
                <tr>
                  <td className="border-bottom border-top-0">
                    IMEI Principal Asegurado:
                  </td>
                  <td className="border-bottom border-top-0">
                    {device.imei_uno}
                  </td>
                </tr>
                {device.ime_dos !== undefined ? (
                  <tr>
                    <td className="border-bottom border-top-0">
                      IMEI Secundario Asegurado:
                    </td>
                    <td className="border-bottom border-top-0">
                      {device.imei_dos}
                    </td>
                  </tr>
                ) : null}
                <tr>
                  <td className="border-top-0">
                    <h6 className="font-weight-medium mb-4 mt-4">
                      Datos del siniestro
                    </h6>
                  </td>
                  <td className="border-top-0">&nbsp;</td>
                </tr>
                <tr>
                  <td className="border-bottom border-top-0">
                    Nombre del plan al que aplica:
                  </td>
                  <td className="border-bottom border-top-0">
                    {plan.plan.nombre}
                  </td>
                </tr>
                <tr>
                  <td className="border-bottom border-top-0">
                    Aplicando a la cobertura de:
                  </td>
                  <td className="border-bottom border-top-0">
                    {coverage.nombre}{" "}
                  </td>
                </tr>
                <tr>
                  <td className="border-bottom border-top-0">
                    Con un valor asegurado de:
                  </td>
                  <td className="border-bottom border-top-0">
                    ${" "}
                    {valor_asegurado
                      .toString()
                      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
                  </td>
                </tr>
                <tr>
                  <td className="border-bottom border-top-0">
                    Fecha del Siniestro:
                  </td>
                  <td className="border-bottom border-top-0">
                    {moreInfo.fecha_siniestro}{" "}
                  </td>
                </tr>
                <tr>
                  <td className="border-bottom border-top-0">
                    Ciudad en donde sucedío el siniestro:
                  </td>
                  <td className="border-bottom border-top-0">
                    {moreInfo.nombre_siniestro}{" "}
                  </td>
                </tr>
                <tr>
                  <td className="border-bottom border-top-0">
                    Línea con la que sucedío el siniestro:
                  </td>
                  <td className="border-bottom border-top-0">
                    {moreInfo.linea_siniestro_one}
                  </td>
                </tr>
                <tr>
                  <td className="border-bottom border-top-0">
                    Descripción del siniestro
                  </td>
                  <td className="border-bottom border-top-0">
                    {moreInfo.mensaje_ticket}
                  </td>
                </tr>
                <tr>
                  <td className="border-top-0">
                    <h6 className="font-weight-medium mb-4 mt-4">
                      Documentos cargados
                    </h6>
                  </td>
                  <td className="border-top-0">&nbsp;</td>
                </tr>
                {documents.map((doc) =>
                  doc.files === null ? null : (
                    <tr key={doc.id}>
                      <td className="border-bottom border-top-0">
                        {doc.nombre_documento_save}
                      </td>
                      <td className="border-bottom border-top-0">
                        {doc.nameFile}
                      </td>
                    </tr>
                  )
                )}
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
                class="spinner-border spinner-border-sm ml-2 mr-0 mb--3"
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
