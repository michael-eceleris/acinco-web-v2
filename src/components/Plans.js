import React, { useEffect, useContext, Fragment } from "react";
import FormContext from "../context/form/formContext";

const Plans = () => {
  const formContext = useContext(FormContext);
  const { device, selectPlan, plansDevice } = formContext;
  useEffect(() => {
    selectPlan(null);
    //eslint-disable-next-line
  }, [device]);
  return (
    <Fragment>
      {plansDevice
        ? plansDevice.map((plan) => (
            <option key={plan.id} value={plan.id}>
              {plan.plan.nombre}
            </option>
          ))
        : null}
    </Fragment>
  );
};

export default Plans;
