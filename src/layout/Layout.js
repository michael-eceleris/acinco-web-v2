import React, { useContext } from "react";
import Stepper from "../components/Stepper";
import Login from "../components/Login";
import SelectService from "../layout/SelectServices";
import DocumentsLayout from "../layout/DocumentsLayout";
import MoreInfoLayout from "../layout/MoreInfoLayout";
import ReviewLayout from "../layout/ReviewLayout";
import AuthContext from "../context/auth/authContext";
import FormContext from "../context/form/formContext";

const Layout = () => {
  const formContext = useContext(FormContext);
  const { step } = formContext;

  return (
    <section className="mb-1">
      <div className="container">
        <Stepper />
        <div className="content-stepper">
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
  );
};

export default Layout;
