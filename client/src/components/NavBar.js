import React from "react";
import "../css/navBar.css";
import Auth from '../utils/auth';
import { Link } from "react-router-dom";

const NavBar = () => {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    }
    const loggedIn = Auth.loggedIn();

    return (
        <nav>
            <ul className="NavList">
                {/* pending <Link to = "{route}" components */}
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                {loggedIn &&
                    <li>
                        <Link to="/profile">
                            Profile
                        </Link>
                    </li>
                }
                <li>
                    <Link to="/explore">
                        Feed
                    </Link>
                </li>
                <li className='navBar-movies'>
                    <Link to="/movies">
                        Movies
                    </Link>
                </li>
                {Auth.loggedIn() ? (
                    <>
                        <li>
                            <a href="/" onClick={logout}>
                                Logout
                            </a>
                        </li>
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
        </nav >
    )
};

export default NavBar;