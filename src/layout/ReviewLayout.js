import React, { useContext } from 'react';
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
    previusStep
  } = formContext;
  const authContext = useContext(AuthContext);
  const { user } = authContext;
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
        <label className="max-w-250 fs--16"> {moreInfo} </label>
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
        >
          Enviar
        </button>
      </div>
    </div>
   );
}
 
export default ReviewLayout;