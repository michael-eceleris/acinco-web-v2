import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import FormContext from "../context/form/formContext";
import AuthContext from "../context/auth/authContext";

const ScrollTop = () => {
  const formContext = useContext(FormContext);
  const { clearForm } = formContext;
  const authContext = useContext(AuthContext);
  const { logOut } = authContext;
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    clearForm();
    logOut();
    //eslint-disable-next-line
  }, [pathname]);
  return null;
};

export default ScrollTop;
