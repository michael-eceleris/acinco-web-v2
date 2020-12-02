import { useState, useEffect, useContext} from 'react';

import Devices from './Devices';
import AuthContext from '../context/auth/authContext';
import FormContext from '../context/form/formContext';

const Form = () => {

    const authContext = useContext(AuthContext); 
    const { authenticate, login, authUser} = authContext;   
    const formContext = useContext(FormContext);
    const { clearForm } = formContext;
    const [ user, setUser] = useState({
        email: '',
        password: ''
    });
    const [ error, setError] = useState(false);
    const { email, password} = user;

    useEffect(()=>{
        authUser(null);
        clearForm();
    },[email,password])

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value,
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(email.trim() === "" || password.trim() === ""){
            console.log("todos lo campos son necesarios")
        }
        login({
            ...user,
            [e.target.name] : e.target.value
        })
    }
    return (
        <div className="Container-form">
            <form onSubmit={handleOnSubmit}>
                <div className="Campo-form">
                    <input 
                        id="email"
                        name="email"
                        type="email"
                        placeholder="email"
                        value={email}
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
                <div className="Campo-form">
                    <input 
                        type="submit"
                        className= "btn btn-primario btn-block"
                        value="SIGN IN"
                    />
                </div>
            </form>
            { authenticate? (<div>
                <p>Esta validado</p>
                <Devices />
            </div>): null}
        </div>
    )
}
export default Form;