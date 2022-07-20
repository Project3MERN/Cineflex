import React from "react";
import classes from "../css/NavBar.module.css";

const NavBar = () => {
    return (
        <nav>
            <ul className={classes.NavList}>
                {/* pending <Link to = "{route}" components */}
                <li>    
                    Home
                </li>
                <li>
                    Explore
                </li>
                <li>
                    Login
                </li>
            </ul>
        </nav>
    )
};

export default NavBar;