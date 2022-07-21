import React from "react";
import classes from "../css/navBar.css";

const NavBar = () => {
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
                    Login
                </li>
            </ul>
        </nav>
    )
};

export default NavBar;