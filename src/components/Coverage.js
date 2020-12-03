import React, {useState, useEffect, useContext, Fragment} from 'react';
import plans from '../data/plans.json';
import coverages from '../data/coverage.json';
import Document from './Documents';
import FormContext from '../context/form/formContext';
const Coverage = () => {
  const formContext = useContext(FormContext);
  const { coveragePlans, plan, selectCoverage, device } = formContext;
  useEffect(()=>{
    selectCoverage(null)
  },[plan])
  /* const selectPlan = plans.find( planId => planId.id === plan);
  const plansCoverage = selectPlan.cobertura.map(coverages => coverages.coberturaPlan);
  const coverage = coverages.filter( cov => cov.id === plansCoverage[0]); */
  return ( 
    <Fragment>
      { coveragePlans ? coveragePlans.map((cov) => (<option value={cov.nombre}>{cov.nombre}</option>)) : null}
    </Fragment>
   );
}
 
export default Coverage;