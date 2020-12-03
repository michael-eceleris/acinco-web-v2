import React, {useState, useEffect, useContext, Fragment} from 'react';
import Coverage from './Coverage';
import plans from '../data/plans.json';
import FormContext from '../context/form/formContext';


const Plans = () => {
  const formContext = useContext(FormContext);
  const { device, selectPlan, plansDevice } = formContext;
  useEffect(()=>{
    selectPlan(null);
  },[device]);
  return ( 
    <Fragment>
      {plansDevice ? plansDevice.map( plan => (<option key={plan.id} value={plan.id}>{plan.plan.nombre}</option>)): null}
    </Fragment>
  );
};
 
export default Plans;