import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../css/login-signup.css";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from '../utils/auth';

const Login = () => {
    const [ formState, setFormState ] = useState({ email: '', password: '' });
    const [ login, {error}] = useMutation(LOGIN_USER);

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

        try {
            const { data } = await login({
                variables: {
                    ...formState
                }
            })

            Auth.login(data.login.token);
        } catch(e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    }

    return (
        <div className="login">
            <div className="userFormWrapper"> 
                <h2 className="login-title">Login</h2>
                <p className="login-p"> Cineflex&trade; is excited to welcome you back! </p>
                <form className="userForm" onSubmit={handleFormSubmit}>
                    <div>
                        <label className="login-label" htmlFor="email">Email:</label>
                        <input className="login-input" name="email" type="email" id="email" value={formState.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label className="login-label" htmlFor="password">Password:</label>
                        <input className="login-input" name="password" type="password" id="password" value={formState.password} onChange={handleChange}/>
                    </div>
                    <button className="login-btn" type="submit"> Login </button>
                    <p className="text-below-form">Not a user yet? Sign up <Link to="/signup"><span className="login-signup-here">here</span></Link> instead!</p>
                </form>
                {error && <div>Something went wrong! Please try again.</div>}    
            </div>
        </div>
    )
};

export default Login;