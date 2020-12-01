import { useState, useEffect} from 'react';

import Devices from './Devices';


const Form = ({data}) => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [validate, setValide] = useState(null)
    const [ error, setError] = useState(false);
    const { email, password} = user;

    useEffect(()=>{
        setValide(null)
    },[email,password])

    const onChange = ( e) => {
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
        const validate = data.filter((user) => user.email === email && user.password === password )
        if(validate.length  == 1) setValide(validate[0]);
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
            { validate ? (<div>
                <p>Esta validado</p>
                <Devices userId={validate.id}/>
            </div>): null}
        </div>
    )
}
export default Form;