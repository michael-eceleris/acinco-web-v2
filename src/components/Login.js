import { useState, useEffect, useContext} from 'react';

import Devices from './Devices';
import AuthContext from '../context/auth/authContext';
import FormContext from '../context/form/formContext';

const Form = () => {

    const authContext = useContext(AuthContext); 
    const { token, authenticate, login, authUser} = authContext;   
    const formContext = useContext(FormContext);
    const { nextStep } = formContext;
    const [ user, setUser] = useState({
        username: '',
        password: '',
    });
    const [ error, setError] = useState(false);
    const { username, password} = user;

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value,
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(username.trim() === "" || password.trim() === ""){
            console.log("todos lo campos son necesarios")
        }
        login({
            ...user,
            [e.target.name] : e.target.value
        })
        authUser();
    }
    return (
        <div className="container-form">
            <h1>Login</h1>
            <form onSubmit={handleOnSubmit}>
                <div className="Campo-form">
                    <input 
                        id="username"
                        name="username"
                        type="email"
                        placeholder="email"
                        value={username}
                        onChange={onChange}
                    />
                </div>
                <div className="Campo-form">
                    <input 
                        id="password"
                        name="password"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <div className="cambo-btn">
                    <input 
                        type="submit"
                        className= "btn btn-sm btn-primario"
                        value="SIGN IN"
                    />
                </div>
            </form>
            { authenticate ? nextStep(1): null}
        </div>
    )
}
export default Form;