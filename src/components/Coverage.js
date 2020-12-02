import React, {useState, useEffect, useContext} from 'react';
import plans from '../data/plans.json';
import coverages from '../data/coverage.json';
import Document from './Documents';
import FormContext from '../context/form/formContext';
const Coverage = () => {
  const formContext = useContext(FormContext);
  const {device, plan, selectCoverage} = formContext;
  const [ coverageSelect, setCoverageSelect ] = useState(null);
  useEffect(()=>{
    selectCoverage(null)
    setCoverageSelect(null)
  },[plan])
  const selectPlan = plans.find( planId => planId.id === plan);
  const plansCoverage = selectPlan.cobertura.map(coverages => coverages.coberturaPlan);
  const coverage = coverages.filter( cov => cov.id === plansCoverage[0]);

  const onChange = e => {
    selectCoverage(e.target.value)
    setCoverageSelect({
      ...coverageSelect,
      [e.target.name] : e.target.value,
    })
  }
  return ( 
    <div>
      <select name="coverage" onChange={onChange}>
        <option>---Selecione su cobertura</option>
        {coverage.map(cov => (<option key={cov.id} value={cov.id}>{cov.coverageName}</option>))}
      </select>
      {coverageSelect ? <Document /> : null}
    </div>
   );
}
 
export default Coverage;