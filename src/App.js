import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AuthState from "./context/auth/authState";
import FormState from "./context/form/formState";
import Navbar from "./components/Navbar";
import ScrollTop from "./config/scrolltop";
import Home from "./pages/Home";
import Claims from "./pages/Claims";
import SamsungCarePlus from "./pages/SamsungCarePlus";
import ScreenAssistenceSoat from "./pages/ScreenAssistenceSoat";
import AssistenceColsubsidio from "./pages/AssistenceColsubsidio";
import SoatDetail from "./pages/SoatDetail";
import TermAndConditionsTwo from "./components/TermsAndConditions/TermsAndConditionsTwo";
import TermsAndConditionsCCB from "./layout/layoutCamaraComercio/TermsAndConditions";
import TermsAndConditionsPMP from "./layout/layoutPMP/TermsAndConditions";
import TermsAndConditionsSamsungCarePlus from "./layout/layoutSamsungCarePlus/TermsAndConditions";
import WhatsappButton from "./components/WhatsappButton/WhatsappButton";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Motorola from "./pages/Motorola";
import MotorolaEdge from "./pages/MotoEdge";
import CamaraComercioPage from "./pages/CamaraComercio";
import PMPPage from "./pages/PMP";
import PMPPageSingUp from "./pages/PMP-signup";
import TermsAndConditionsMotorola from "./components/TermsAndConditions/TermsAndConditionMotorola";
import TermsAndConditionsMotoEdge from "./layout/layoutMotoEdge/TermsAndConditions";
import ClaimsBlank from "./pages/ClaimsBlank";
import NotFoundBlank from "./pages/NotFoundBlank";
import SamsungCarePlusDevices from "./pages/SamsungCarePluesDevices";
import SamsungCarePlusDevicesTermsAndConditions from "./layout/layoutSamsungCarePlusDevices/TermsAndConditions";
import newClient from "./data/newClients.json";
import newNotFoundClient from "./data/notFoundClients.json";
import ClaimsSamsungCarePlus from "./pages/ClaimsSamsungCarePlus";
import SamsungCarePlusElectro from "./pages/SamsungCarePlusElectro";
import SamsungCarePlusElectroTermsAndConditions from "./layout/layoutSamsungCarePlusElectro/TermsAndConditions";
import SBSEstimatePage from "./pages/SBSEstimatePolicy";

function App() {
  return (
    <FormState>
      <AuthState>
        <Router>
          <ScrollTop />
          <Navbar hideMessage={false} />
          <WhatsappButton />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/productos" exact element={<Products />} />
            <Route
              path="/tramites-y-reclamaciones"
              exact
              element={<Claims />}
            />
            <Route path="/samsung" exact element={<SamsungCarePlus />} />
            <Route
              path="/soat-asistencia-de-pantalla"
              exact
              element={<ScreenAssistenceSoat />}
            />
            <Route
              path="/colsubsidio"
              exact
              element={<AssistenceColsubsidio />}
            />
            <Route path="/detalle-soat" exact element={<SoatDetail />} />
            <Route path="/motorola" exact element={<Motorola />} />
            <Route
              path="/motorola/beneficio-edge"
              exact
              element={<MotorolaEdge />}
            />
            <Route
              path="/colsubsidio/terminos-condiciones"
              exact
              element={
                <TermAndConditionsTwo
                  namePlan="Asistencia Colsubsidio – Axa Colpatria Seguros"
                  plan="colsubsidio"
                />
              }
            />
            <Route
              path="/soat-asistencia-de-pantalla/terminos-condiciones"
              exact
              element={
                <TermAndConditionsTwo
                  namePlan="SOAT Asistencia de Pantalla"
                  plan="soat"
                />
              }
            />
            <Route
              path="/samsung/terminos-condiciones"
              exact
              element={<TermsAndConditionsSamsungCarePlus />}
            />
            <Route
              path="/motorola/terminos-condiciones"
              exact
              element={<TermsAndConditionsMotorola />}
            />
            <Route
              path="/motorola/beneficio-edge/terminos-condiciones"
              exact
              element={<TermsAndConditionsMotoEdge />}
            />
            <Route
              path="/camara-comercio"
              exact
              element={<CamaraComercioPage />}
            />
            <Route
              path="/camara-comercio/terminos-condiciones"
              exact
              element={<TermsAndConditionsCCB />}
            />
            <Route path="/protect-my-phone" exact element={<PMPPage />} />
            <Route
              path="/protect-my-phone/signup"
              exact
              element={<PMPPageSingUp />}
            />
            <Route
              path="/protect-my-phone/terminos-condiciones"
              exact
              element={<TermsAndConditionsPMP />}
            />
            <Route
              path='/samsung-care-plus/devices'
              exact
              element={<SamsungCarePlusDevices />}
            />
            <Route
              path='/samsung-care-plus/devices/terminos-condiciones'
              exact
              element={<SamsungCarePlusDevicesTermsAndConditions />}
            />
            <Route
              path='/samsung-care-plus/tramites-y-reclamaciones'
              exact
              element={<ClaimsSamsungCarePlus />}
            />
            <Route
              path='/samsung-care-plus/electro'
              exact
              element={<SamsungCarePlusElectro />}
            />
            <Route
              path='/samsung-care-plus/electro/terminos-condiciones'
              exact
              element={<SamsungCarePlusElectroTermsAndConditions />}
            />
            {newClient.map((client, index) => (
              <Route
                path={`/tramites-y-reclamaciones/${client.client}`}
                exact
                key={`path_key_${index}`}
                element={<ClaimsBlank client={client} />}
              />
            ))}
            {newNotFoundClient.map((client, index) => (
              <Route
                path={client.path}
                exact
                key={`path_not_found_key_${index}`}
                element={<NotFoundBlank client={client} />}
              />
            ))}
            <Route path='/estimate-policy/itau' element={<SBSEstimatePage />} />
            <Route path='/pagina-no-encontrada' element={<NotFound />} />
            <Route
              path="*"
              element={<Navigate to="/pagina-no-encontrada" replace />}
            />
          </Routes>
        </Router>
      </AuthState>
    </FormState>
  );
}

export default App;
