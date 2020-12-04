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
      <div className="container-steeper"
      >
       <Stepper 
        activeStep={step} 
        hideConnectors={true}
        styleConfig={{
          completedBgColor: '#5d9afc',
          completedTextColor: '#e1e1e1',
          activeBgColor: '#5d9afc', 
          inactiveBgColor: '#e5f0fe', 
          circleFontSize:'1.5rem',
          size: '2.5rem',
          activeTextColor: '#e1e1e1',
          inactiveTextColor: '#5d9afc',
          borderRadius: '30%',
          labelFontSize: '1rem',
        }}
        >
         <Step label="1) Ingresa" />
         <Step label="2) Tus servicios"/>
         <Step label="3) Documentos"/>
         <Step label="4) Más información"/>
         <Step label="5) Review"/>
       </Stepper>
      </div>
    </Fragment>
  );
}
 
export default CustomStepper;