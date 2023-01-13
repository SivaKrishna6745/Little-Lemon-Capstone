import React from "react";
import "./Nav.scss";

function Nav() {
    return (
        <nav className="nav">
            <img src="images/Logo.svg" alt="little lemon logo" />
            <ul>
                <li>
                    <a href="#">HOME</a>
                </li>
                <li>
                    <a href="#">ABOUT</a>
                </li>
                <li>
                    <a href="#">MENU</a>
                </li>
                <li>
                    <a href="#">RESERVATIONS</a>
                </li>
                <li>
                    <a href="#">ORDER ONLINE</a>
                </li>
                <li>
                    <a href="#">LOGIN</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
