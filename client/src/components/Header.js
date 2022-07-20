import React from "react";
import NavBar from "./NavBar";
import "../css/header.css";

const Header = () => {
    return (
        <header>
            <div>
                <h1>Cineflex</h1>
            </div>
            <NavBar />
        </header>
    )
};

export default Header;