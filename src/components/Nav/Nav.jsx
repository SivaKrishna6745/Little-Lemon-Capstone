import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="nav">
            <img src="images/Logo.svg" alt="little lemon logo" />
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/menu">MENU</Link>
                </li>
                <li>
                    <Link to="/reservations">RESERVATIONS</Link>
                </li>
                <li>
                    <Link to="/order online">ORDER ONLINE</Link>
                </li>
                <li>
                    <Link to="/login">LOGIN</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
