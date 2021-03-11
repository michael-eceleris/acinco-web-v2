import "./App.css";
import { useState } from "react";
import AuthState from "./context/auth/authState";
import FormState from "./context/form/formState";
import Navbar from "./components/Navbar";
import ScrollTop from "./config/scrolltop";
import Claims from "./pages/Claims";
import Message from "./components/Modal/message/messaje";
import WhatsappButton from "./components/WhatsappButton/WhatsappButton";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [hideMessage, setHideMessage] = useState(true);
  return (
    <FormState>
      <AuthState>
        <Router>
          <ScrollTop />
          <Message setHideMessage={setHideMessage} hideMessage={hideMessage} />
          <Navbar hideMessage={hideMessage} />
          <WhatsappButton />
          <Switch>
            <Route path="/" exact>
              <Claims />
            </Route>
          </Switch>
        </Router>
      </AuthState>
    </FormState>
  );
}

export default App;
