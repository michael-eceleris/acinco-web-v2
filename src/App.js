import "./App.css";
import AuthState from "./context/auth/authState";
import FormState from "./context/form/formState";
import Navbar from "./components/Navbar";
import ScrollTop from "./config/scrolltop";
import Home from "./pages/Home";
import Claims from "./pages/Claims";
import TotalProtection from "./pages/TotalProtection";
import ScreenFracture from "./pages/ScreenFracture";
import MakeYourPlan from "./pages/MakeYourPlan";
import SafeByGama from "./pages/SafeByGama";
import Samsung from "./pages/Samsung";
import ScreenAssistenceSoat from "./pages/ScreenAssistenceSoat";
import AssistenceColsubsidio from "./pages/AssistenceColsubsidio";
import SoatDetail from "./pages/SoatDetail";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <FormState>
      <AuthState>
        <Router>
          <ScrollTop />
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
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
          </Switch>
        </Router>
      </AuthState>
    </FormState>
  );
}

export default App;
