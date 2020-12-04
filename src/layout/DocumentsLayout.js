import React,{ useContext, useState } from 'react';
import FormContext from '../context/form/formContext';
import Documents from '../components/Documents';
const DocumentsLayout = () => {
  const formContext = useContext(FormContext);
  const { documents, nextStep, previusStep } = formContext;
  const [ error, setError ] = useState(false);
  const handleNextStep = () => {
    if(documents){
      nextStep(3);
      setError(false);
    }else {
      setError(true);
    }
  }
  return ( 
    <div className="container-form">
      <Documents />
      {error && !documents ? <p>* Todo los campos son onbligatorios</p> : null }
      <div className="campo-btn">
        <button
          className="btn btn-sm btn-secundario"
          onClick={()=> previusStep(1)}
        >
          Atras
        </button>
        <button
          className="btn btn-sm btn-primario"
          onClick={handleNextStep}
        >
          Siguiente
        </button>
      </div>
    </div>
   );
}
 
export default DocumentsLayout;