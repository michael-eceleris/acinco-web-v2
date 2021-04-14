import "./App.css";
import { useState } from "react";
import AuthState from "./context/auth/authState";
import FormState from "./context/form/formState";
import Navbar from "./components/Navbar";
import ScrollTop from "./config/scrolltop";
import Claims from "./pages/Claims";
import Message from "./components/Modal/message/messaje";
import WhatsappButton from "./components/WhatsappButton/WhatsappButton";
import Products from "./pages/Products";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [hideMessage, setHideMessage] = useState(true);
  return (
    <FormState>
      <AuthState>
        <Router>
          <ScrollTop />
          <Navbar hideMessage={false} />
          <WhatsappButton />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/productos" exact>
              <Products />
            </Route>
            <Route path="/tramites-y-reclamaciones" exact>
              <Claims />
            </Route>
            <Route path="/pospago-5-3" exact>
              <TotalProtection />
            </Route>
            <Route path="/pospago-5-2" exact>
              <ScreenFracture />
            </Route>
            <Route path="/arma-tu-plan-smart-app" exact>
              <MakeYourPlan />
            </Route>
            <Route path="/seguro-gamas" exact>
              <SafeByGama />
            </Route>
            <Route path="/samsung" exact>
              <Samsung />
            </Route>
            <Route path="/soat-asistencia-de-pantalla" exact>
              <ScreenAssistenceSoat />
            </Route>
            <Route path="/colsubsidio" exact>
              <AssistenceColsubsidio />
            </Route>
            <Route path="/detalle-soat" exact>
              <SoatDetail />
            </Route>
            <Route path="/pospago-5-3/terminos-condiciones" exact>
              <TermAndConditions namePlan="Protección Total" plan="all" />
            </Route>
            <Route path="/pospago-5-2/terminos-condiciones" exact>
              <TermAndConditions
                namePlan="Fractura de Pantalla"
                plan="screen"
              />
            </Route>
            <Route path="/arma-tu-plan-smart-app/terminos-condiciones" exact>
              <TermAndConditions
                namePlan="Arma tu plan – Smart App"
                plan="smart"
              />
            </Route>
            <Route path="/seguro-gamas/terminos-condiciones" exact>
              <TermAndConditions namePlan="Seguro por Gama" plan="gama" />
            </Route>
            <Route path="/colsubsidio/terminos-condiciones" exact>
              <TermAndConditionsTwo
                namePlan="Asistencia Colsubsidio – Axa Colpatria Seguros"
                plan="colsubsidio"
              />
            </Route>
            <Route
              path="/soat-asistencia-de-pantalla/terminos-condiciones"
              exact
            >
              <TermAndConditionsTwo
                namePlan="SOAT Asistencia de Pantalla"
                plan="soat"
              />
            </Route>
            <Route path="/samsung/terminos-condiciones" exact>
              <TermAndConditionsSamsung />
            </Route>
          </Switch>
        </Router>
      </AuthState>
    </FormState>
  );
}

export default App;
