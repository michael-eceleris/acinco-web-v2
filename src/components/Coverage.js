import React, {useState, useEffect} from 'react';
import plans from '../data/plans.json';
import coverage from '../data/coverage.json';
import Document from './Documents';
const Coverage = ({planSelect}) => {
  const [ coverageSelect, setCoverageSelect ] = useState(null);
  useEffect(()=>{
    setCoverageSelect(null)
  },[planSelect])
  const selectPlan = plans.find( plan => plan.id === planSelect.plans);
  const plansCoverage = selectPlan.cobertura.map(coverages => coverages.coberturaPlan);
  const selectCoverage = coverage.filter( cov => cov.id === plansCoverage[0]);

  const onChange = e => {
    setCoverageSelect({
      ...coverageSelect,
      [e.target.name] : e.target.value,
    })
  }
  return ( 
    <div>
      <select name="coverage" onChange={onChange}>
        <option>---Selecione su cobertura</option>
        {selectCoverage.map(cov => (<option key={cov.id} value={cov.id}>{cov.coverageName}</option>))}
      </select>
      {coverageSelect ? <Document coverageSelect={coverageSelect} /> : null}
    </div>
   );
}
 
export default Coverage;