import React, { useContext } from "react";
import Stepper from "../components/Stepper";
import Login from "../components/Login";
import SelectService from "../layout/SelectServices";
import DocumentsLayout from "../layout/DocumentsLayout";
import MoreInfoLayout from "../layout/MoreInfoLayout";
import ReviewLayout from "../layout/ReviewLayout";
import FormContext from "../context/form/formContext";

const Layout = () => {
  const formContext = useContext(FormContext);
  const { step } = formContext;

  return (
    <>
      <section className="col-12 col-lg-12 mb-3 bg-gray-100">
        <div className="portlet w-75 m-auto tablelogin">
          <div className="portlet-header border-bottom">
            <Stepper />
          </div>
          <div className="portlet-body w-50 m-auto tablelogin">
            {step === 0 ? (
              <Login />
            ) : step === 1 ? (
              <SelectService />
            ) : step === 2 ? (
              <DocumentsLayout />
            ) : step === 3 ? (
              <MoreInfoLayout />
            ) : step === 4 ? (
              <ReviewLayout />
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default Layout;
