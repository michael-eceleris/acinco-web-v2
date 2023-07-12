import React, { useContext } from "react";
import Stepper from "../components/Stepper";
import Login from "../components/Login";
import SelectService from "../layout/SelectServices";
import DocumentsLayout from "../layout/DocumentsLayout";
import MoreInfoLayout from "../layout/MoreInfoLayout";
import ReviewLayout from "../layout/ReviewLayout";
import FormContext from "../context/form/formContext";

const Layout = ({
  colorPrimary,
  colorSecundary,
  allUppercase,
  claimsDoc,
  privacyPolicyPersonalData,
}) => {
  const formContext = useContext(FormContext);
  const { step } = formContext;
  const firstStep = (
    <Login
      colorPrimary={colorPrimary}
      allUppercase={allUppercase}
      privacyPolicyPersonalData={privacyPolicyPersonalData}
    />
  );
  const secondStep = (
    <SelectService
      colorPrimary={colorPrimary}
      colorSecundary={colorSecundary}
      allUppercase={allUppercase}
    />
  );
  const thirdStep = (
    <DocumentsLayout
      colorPrimary={colorPrimary}
      colorSecundary={colorSecundary}
      allUppercase={allUppercase}
      claimsDoc={claimsDoc}
    />
  );

  const fourthStep = (
    <MoreInfoLayout
      colorPrimary={colorPrimary}
      colorSecundary={colorSecundary}
      allUppercase={allUppercase}
    />
  );

  const fiveStep = (
    <ReviewLayout
      colorPrimary={colorPrimary}
      colorSecundary={colorSecundary}
      allUppercase={allUppercase}
    />
  );

  return (
    <>
      <section className="col-12 col-lg-12 mb-3 bg-gray-100">
        <div className="portlet w-75 m-auto tablelogin">
          <div className="portlet-header border-bottom">
            <Stepper
              colorPrimary={colorPrimary}
              colorSecundary={colorSecundary}
              allUppercase={allUppercase}
            />
          </div>
          <div className="portlet-body w-50 m-auto tablelogin">
            {step === 0 && firstStep}
            {step === 1 && secondStep}
            {step === 2 && thirdStep}
            {step === 3 && fourthStep}
            {step === 4 && fiveStep}
          </div>
        </div>
      </section>
    </>
  );
};

export default Layout;
