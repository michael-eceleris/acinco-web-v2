import './App.css'
import AuthState from './context/auth/authState';
import FormState from './context/form/formState';
import Layout from './layout/Layout';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
      <FormState>
        <AuthState>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/"> 
                <Home />
              </Route>
            </Switch>
          </Router>
        </AuthState>
      </FormState>
  );
}

export default App;
