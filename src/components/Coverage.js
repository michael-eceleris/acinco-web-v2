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
  return ( 
    <Fragment>
      { coveragePlans ? coveragePlans.map((cov) => (<option key={cov.id} value={cov.id}>{cov.nombre}</option>)) : null}
    </Fragment>
   );
}
 
export default Coverage;