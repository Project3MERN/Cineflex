import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../css/login-signup.css";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from '../utils/auth';

const Signup = () => {
    const [ formState, setFormState ] = useState({ email: '', password: '', username: '' });
    const [addUser, { error }] = useMutation(ADD_USER);

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
            // execute addUser and pass in data from form state
            const { data } = await addUser({
                variables: { ...formState }
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e)
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
            username: ''
        });
    }

    return (
        <div className="login">
            <div className="userFormWrapper"> 
                <h2 className="login-title">Signup</h2>
                <p className="login-p"> Cineflex&trade; is excited to get you started! </p>
                <form className="userForm" onSubmit={handleFormSubmit}>
                    <div>
                        <label className="login-label" htmlFor="username">Username:</label>
                        <input className="login-input" name="username" type="text" id="username" value={formState.username} onChange={handleChange}/>
                    </div>
                    <div>
                        <label className="login-label" htmlFor="email">Email:</label>
                        <input className="login-input" name="email" type="email" id="email" value={formState.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label className="login-label" htmlFor="password">Password:</label>
                        <input className="login-input" name="password" type="password" id="password" value={formState.password} onChange={handleChange}/>
                    </div>
                    <button className="login-btn" type="submit"> Sign Up </button>
                    <p>Already a user? Login <Link to="/login"><span className="login-signup-here">here</span></Link> instead!</p>
                </form>
                {error && <div>Something went wrong! Please try again.</div>}
                    
            </div>
        </div>
    )
};

export default Signup;