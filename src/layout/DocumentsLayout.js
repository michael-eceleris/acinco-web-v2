import React,{ useContext } from 'react';
import FormContext from '../context/form/formContext';
import Documents from '../components/Documents';
const DocumentsLayout = () => {
  const formContext = useContext(FormContext);
  const { nextStep, previusStep } = formContext;
  return ( 
    <div className="container-form">
      <Documents />
      <div className="campo-btn">
        <button
          className="btn btn-sm btn-secundario"
          onClick={()=> previusStep(1)}
        >
          Atras
        </button>
        <button
          className="btn btn-sm btn-primario"
          onClick={()=> nextStep(3)}
        >
          Siguiente
        </button>
      </div>
    </div>
   );
}
 
export default DocumentsLayout;