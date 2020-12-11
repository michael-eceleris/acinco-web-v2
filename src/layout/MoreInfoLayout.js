import React, { useContext, useState } from "react";
import FormContext from "../context/form/formContext";
import MoreInfo from "../components/MoreInfo";
const MoreInfoLayout = () => {
  const formContext = useContext(FormContext);
  const { moreInfo } = formContext;
  const [error, setError] = useState(false);
  return (
    <>
      <div className="container py-1">
        <h4>Información adicional</h4>
        <p className="fs--17">
          Llena los siguentes campos para detallar más lo ocurrido
        </p>
        <MoreInfo setError={setError} error={error} />
        {error ? null : null}
      </div>
    </>
  );
};

export default MoreInfoLayout;