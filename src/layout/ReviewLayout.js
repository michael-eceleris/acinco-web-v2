import React, { useContext, useState } from 'react';
import FormContext from '../context/form/formContext';
import AuthContext from '../context/auth/authContext';
const ReviewLayout = () => {
  const formContext = useContext(FormContext);
  const {
    device,
    plan,
    coverage,
    documents,
    moreInfo,
    previusStep,
    submitForm,
    documentsCoverage,
  } = formContext;
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const { imei_uno } = device;
  const {} = coverage;
  const {} = documents;
  const { mensaje_ticket , linea_siniestro_one, fecha_siniestro, genero_reclamante} = moreInfo;
  const formData = {
    cliente_id : user.id,
    imei_dispositivo_one : imei_uno,
    plan_id: plan.plan.id,
    tipo_cobertura_cobertura_id: coverage.id,
    tipo_ticket_id : null,
    mensaje_ticket,
    linea_siniestro_one,
    fecha_siniestro,
    genero_reclamante_id: parseInt(genero_reclamante),
    documentos_requerido_id: documents
  };

  const handleSubmit = () => {
    console.log(formData)
  }
  return ( 
    <div className="container-review">
      <h2> Review de los datos que enviaras</h2>
      <div className="campo-review">
        <h3> Datos personales:</h3>
        <label className="max-w-250 fs--16"> Nombre:  {user.name} </label>
        <label className="max-w-250 fs--16"> Tipo y número de documento: {user.identification_type.name}. {user.identification_number}</label>
      </div>
      <div className="campo-review">
        <h3> Datos del dispositivo:</h3>
        <label className="max-w-250 fs--16">Marca del dispositivo:  {device.dispositivo.nombre}  </label>
      </div>
      <div className="campo-review">
        <h3> Datos del plan:</h3>
        <label className="max-w-250 fs--16">Nombre del plan: {plan.plan.nombre} </label>
        <label className="max-w-250 fs--16">Cobertura del plan:  {coverage.nombre} </label>
      </div>
      <div className="campo-review">
        <h3>Documentos cargados:</h3>
          {documents.map( doc => (
            <>
              <label className="max-w-250 fs--16">{doc}</label>
            </>
            ))}
      </div>
      <div className="campo-review">
        <h3> Más información:</h3>
        <label className="max-w-250 fs--16"> Género: {moreInfo.nombre_genero} </label>
        <label className="max-w-250 fs--16"> Ciudad siniestro: {moreInfo.nombre_siniestro} </label>
        <label className="max-w-250 fs--16"> Fecha siniestro: {moreInfo.fecha_siniestro} </label>
        <label className="max-w-250 fs--16"> Linea siniestro: {moreInfo.linea_siniestro_one} </label>
        <label className="max-w-250 fs--16"> Mensaje: {moreInfo.mensaje_ticket} </label>
      </div>
      <div className="campo-btn">
        <button
          className="btn btn-sm btn-secundario"
          onClick={()=> previusStep(3)}
        >
          Atras
        </button>
        <button
          className="btn btn-sm btn-primario"
          onClick={handleSubmit}
        >
          Enviar
        </button>
      </div>
    </div>
   );
}
 
export default ReviewLayout;