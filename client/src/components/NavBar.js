import React from "react";
import "../css/navBar.css";
import Auth from '../utils/auth';
import { Link } from "react-router-dom";

const NavBar = () => {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    }

    return (
        <nav>
            <ul className="NavList">
                {/* pending <Link to = "{route}" components */}
                <li>    
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/explore">
                        Explore
                    </Link>
                </li>
                {Auth.loggedIn() ? (
                    <>
                        <Link to="/createPost">
                            Create
                        </Link>
                        <a href="/" onClick={logout}>
                            Logout
                        </a>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login">
                                Login
                            </Link>
                        </li>
                    </>
                )}
                
            </ul>
        </nav>
    )
};

export default NavBar;