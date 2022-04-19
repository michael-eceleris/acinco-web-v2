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
import TermAndConditions from "./components/TermsAndConditions/TermsAndConditions";
import TermAndConditionsTwo from "./components/TermsAndConditions/TermsAndConditionsTwo";
import TermAndConditionsSamsung from "./components/TermsAndConditions/TermsAndConditionsSamsung";
import TermsAndConditionsCCB from "./layout/layoutCamaraComercio/TermsAndConditions";
import WhatsappButton from "./components/WhatsappButton/WhatsappButton";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Motorola from "./pages/Motorola";
import CamaraComercioPage from "./pages/CamaraComercio";
import TermsAndConditionsMotorola from "./components/TermsAndConditions/TermsAndConditionMotorola";
import ClaimsBlank from "./pages/ClaimsBlank";
import NotFoundBlank from "./pages/NotFoundBlank";
import newClient from "./data/newClients.json";
import newNotFoundClient from "./data/notFoundClients.json";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <FormState>
      <AuthState>
        <Router>
          <ScrollTop />
          <Navbar hideMessage={false} />
          <WhatsappButton />
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/productos' exact>
              <Products />
            </Route>
            <Route path='/tramites-y-reclamaciones' exact>
              <Claims />
            </Route>
            <Route path='/pospago-5-3' exact>
              <TotalProtection />
            </Route>
            <Route path='/pospago-5-2' exact>
              <ScreenFracture />
            </Route>
            <Route path='/arma-tu-plan-smart-app' exact>
              <MakeYourPlan />
            </Route>
            <Route path='/seguro-gamas' exact>
              <SafeByGama />
            </Route>
            <Route path='/samsung' exact>
              <Samsung />
            </Route>
            <Route path='/soat-asistencia-de-pantalla' exact>
              <ScreenAssistenceSoat />
            </Route>
            <Route path='/colsubsidio' exact>
              <AssistenceColsubsidio />
            </Route>
            <Route path='/detalle-soat' exact>
              <SoatDetail />
            </Route>
            <Route path='/motorola' exact>
              <Motorola />
            </Route>
            <Route path='/pospago-5-3/terminos-condiciones' exact>
              <TermAndConditions namePlan='Protección Total' plan='all' />
            </Route>
            <Route path='/pospago-5-2/terminos-condiciones' exact>
              <TermAndConditions
                namePlan='Fractura de Pantalla'
                plan='screen'
              />
            </Route>
            <Route path='/arma-tu-plan-smart-app/terminos-condiciones' exact>
              <TermAndConditions
                namePlan='Arma tu plan – Smart App'
                plan='smart'
              />
            </Route>
            <Route path='/seguro-gamas/terminos-condiciones' exact>
              <TermAndConditions namePlan='Seguro por Gama' plan='gama' />
            </Route>
            <Route path='/colsubsidio/terminos-condiciones' exact>
              <TermAndConditionsTwo
                namePlan='Asistencia Colsubsidio – Axa Colpatria Seguros'
                plan='colsubsidio'
              />
            </Route>
            <Route
              path='/soat-asistencia-de-pantalla/terminos-condiciones'
              exact
            >
              <TermAndConditionsTwo
                namePlan='SOAT Asistencia de Pantalla'
                plan='soat'
              />
            </Route>
            <Route path='/samsung/terminos-condiciones' exact>
              <TermAndConditionsSamsung />
            </Route>
            <Route path='/motorola/terminos-condiciones' exact>
              <TermsAndConditionsMotorola />
            </Route>
            <Route path='/camara-comercio' exact>
              <CamaraComercioPage />
            </Route>
            <Route path='/camara-comercio/terminos-condiciones' exact>
              <TermsAndConditionsCCB />
            </Route>
            {newClient.map((client, index) => (
              <Route
                path={`/tramites-y-reclamaciones/${client.client}`}
                exact
                key={`path_key_${index}`}
              >
                <ClaimsBlank client={client} />
              </Route>
            ))}
            {newNotFoundClient.map((client, index) => (
              <Route
                path={client.path}
                exact
                key={`path_not_found_key_${index}`}
              >
                <NotFoundBlank client={client} />
              </Route>
            ))}
            <Route path='/pagina-no-encontrada' component={NotFound} />
            <Redirect to='/pagina-no-encontrada' />
          </Switch>
        </Router>
      </AuthState>
    </FormState>
  );
}

export default App;
