import React, { useState } from "react";
import styled from "styled-components";

import MoreInfo from "../components/MoreInfo";

const CustomH4 = styled.h4`
  color: ${props => props.bgColor};
  text-transform: ${props => props.uppercase ? "uppercase" : ""};
`;

const MoreInfoLayout = ({ colorPrimary, allUppercase, colorSecundary }) => {
  const [error, setError] = useState(false);
  return (
    <>
      <div className="container py-1">
        <CustomH4 bgColor={colorPrimary} uppercase={allUppercase}>Información adicional</CustomH4>
        <p className="fs--17">
          Llena los siguentes campos para detallar más lo ocurrido
        </p>
        <MoreInfo setError={setError} error={error} colorPrimary={colorPrimary} colorSecundary={colorSecundary} />
        {error ? null : null}
      </div>
    </>
  );
};

export default MoreInfoLayout;
