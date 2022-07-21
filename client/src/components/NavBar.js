import React from "react";
import classes from "../css/navBar.css";

const NavBar = () => {

    const user = true

    return (
        <nav>
            <ul className="NavList">
                {/* pending <Link to = "{route}" components */}
                <li>    
                    <a href="/">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/explore">
                        Explore
                    </a>
                </li>
                <li>
                    <a href="/login">
                        Login
                    </a>
                </li>
                {user && <li>
                    <a href='/createPost'>
                        Create
                    </a>
                </li>}
            </ul>
        </nav>
    )
};

export default NavBar;