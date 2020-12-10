import React, { useContext, useState } from "react";
import FormContext from "../context/form/formContext";
import MoreInfo from "../components/MoreInfo";
const MoreInfoLayout = () => {
  const formContext = useContext(FormContext);
  const { moreInfo } = formContext;
  const [error, setError] = useState(false);
  return (
    <div className="col-12 col-xl-12 mb-3">
      <div className="portlet">
        <div className="portlet-header border-bottom">
          <h4>Información adicional</h4>
        </div>
        <div className="portlet-body">
          <p className="fs--17">
            Llena los siguentes campos para detallar más lo ocurrido
          </p>
          <div className="container py-4 w-75">
            <MoreInfo setError={setError} error={error} />
            {error ? null : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoLayout;
