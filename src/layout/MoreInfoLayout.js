import React,{ useContext, useState } from 'react';
import FormContext from '../context/form/formContext';
import MoreInfo from '../components/MoreInfo';
const MoreInfoLayout = () => {
  const formContext = useContext(FormContext);
  const { moreInfo, nextStep, previusStep } = formContext;
  const [ error, setError ] = useState(false);
  const handleNextStep = () => {
    if(moreInfo){
      nextStep(4);
      setError(false);
    }else {
      setError(true);
    }
  }
  return ( 
    <div className="container-form">
      <MoreInfo setError={setError}/>
      {error && !moreInfo ? <p>* Todo los campos son onbligatorios</p> : null }
      <div className="campo-btn">
        <button
          className="btn btn-sm btn-secundario"
          onClick={() => previusStep(2)}
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
 
export default MoreInfoLayout;