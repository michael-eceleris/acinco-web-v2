import React,{ useContext, Fragment } from 'react';
import FormContext from '../context/form/formContext';
import MoreInfo from '../components/MoreInfo';
const MoreInfoLayout = () => {
  const formContext = useContext(FormContext);
  const { nextStep, previusStep } = formContext;
  return ( 
    <div className="container-form">
      <MoreInfo />
      <div className="campo-btn">
        <button
          className="btn btn-sm btn-secundario"
          onClick={() => previusStep(2)}
        >
          Previus
        </button>
        <button
          className="btn btn-sm btn-primario"
          onClick={()=> nextStep(4)}
        >
          Next
        </button>
      </div>
    </div>
   );
}
 
export default MoreInfoLayout;