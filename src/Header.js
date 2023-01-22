import React from "react";
import Nav from "./Nav";
import "./App.css";

function Header() {
    return (
        <header className="header">
            <img
                src="images/Logo.svg"
                alt="A graphic representing the logo of little lemon"
            />
            <Nav />
        </header>
    );
}

export default Header;
