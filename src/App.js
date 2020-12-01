import './App.css'

import Login from './components/Login';
import Data from './data'
function App() {
  return (
    <div className="Container">
      <h1>Login</h1>
      <Login data={Data}/>
    </div>
  );
}

export default App;
