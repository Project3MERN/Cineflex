import React, { useState } from "react";
import "../css/login-signup.css";

const Login = () => {
    const [ formState, setFormState ] = useState({ email: '', password: '' });

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        })
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        console.log(formState);
    }

    return (
        <div className="login">
            <div className="UserFormWrapper"> 
                <h2>Login</h2>
                <p> Cineflex&trade; is excited to welcome you back! </p>
                <form className="UserForm" onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input name="email" type="email" id="email" value={formState.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input name="password" type="password" id="password" value={formState.password} onChange={handleChange}/>
                    </div>
                    <button type="submit"> Login </button>
                    <button> Register </button>
                </form>
                    
            </div>
        </div>
    )
};

export default Login;