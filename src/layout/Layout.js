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
    <section className="col-12 col-lg-12 mb-3 bg-theme-color-light">
      <div className="portlet w-75 m-auto">
        <div className="portlet-header border-bottom">
          <Stepper />
        </div>
        <div className="portlet-body w-50 m-auto">
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
      <svg
        class="absolute-full z-index-0"
        width="100%"
        height="100%"
        viewBox="0 0 1920 90"
        preserveAspectRatio="none"
      >
        <path
          fill="rgba(0,0,0,.01)"
          d="M1920,0C1217,0,120.574,155.567,0,0v90h1920V0z"
        ></path>
      </svg>
    </section>
  );
};

export default Layout;
