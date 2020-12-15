import React, { useEffect, useContext, Fragment } from "react";
import FormContext from "../context/form/formContext";
const Coverage = () => {
  const formContext = useContext(FormContext);
  const { coveragePlans, plan, selectCoverage } = formContext;
  useEffect(() => {
    selectCoverage(null);
  }, [plan]);
  return (
    <Fragment>
      {coveragePlans
        ? coveragePlans.map((cov) => (
            <option key={cov.id} value={cov.id}>
              {cov.nombre}
            </option>
          ))
        : null}
    </Fragment>
  );
};

export default Coverage;
