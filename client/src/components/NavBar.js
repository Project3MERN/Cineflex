import React from "react";
import "../css/navBar.css";

const NavBar = () => {
    return (
        <nav>
            <ul>
                {/* pending <Link to = "{route}" components */}
                <li>    
                    Home
                </li>
                <li>
                    Login
                </li>
            </ul>
        </nav>
    )
};

export default NavBar;