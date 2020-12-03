import './App.css'
import AuthState from './context/auth/authState';
import FormState from './context/form/formState';
import Layout from './layout/Layout';
function App() {
  return (
      <FormState>
        <AuthState>
            <Layout />
        </AuthState>
      </FormState>
  );
}

export default App;
