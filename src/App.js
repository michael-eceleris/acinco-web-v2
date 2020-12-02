import './App.css'
import Login from './components/Login';
import Data from './data'
import AuthState from './context/auth/authState';
import FormState from './context/form/formState';
function App() {
  return (
    <AuthState>
      <FormState>
        <div className="Container">
          <h1>Login</h1>
          <Login data={Data}/>
        </div>
      </FormState>
    </AuthState>
  );
}

export default App;
