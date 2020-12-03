import React, {Fragment, useContext} from 'react';
import { Stepper , Step } from 'react-form-stepper';

import logoUser from '../assets/icons/user-protection.svg';
import FormContext from '../context/form/formContext';
const CustomStepper = () => {
  const formContext = useContext(FormContext);
  const { step } = formContext;
  return (  
    <Fragment>
      <div className="header">
        <h1>Tramites y reclamaciones</h1>
      </div>
      <div className="container-steeper">
       <Stepper activeStep={step}>
         <Step label="Ingresa" />
         <Step label="Tus servicios"/>
         <Step label="Documentos"/>
         <Step label="Más información"/>
         <Step label="Review"/>
       </Stepper>
      </div>
    </Fragment>
  );
}
 
export default CustomStepper;