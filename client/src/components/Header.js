import React from "react";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <header className="header">
            <div>
                <h1 className="header-title">Cineflex</h1>
            </div>
            <NavBar />
        </header>
    )
};

export default Header;