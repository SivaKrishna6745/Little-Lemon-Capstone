import React from "react";
import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <img src="images/Logo.svg" alt="little lemon logo" />
            <ul>
                <h4>Doormat Navigation</h4>
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
            <ul>
                <h4>Contact</h4>
                <li>
                    <a href="#">Address</a>
                </li>
                <li>
                    <a href="#">Phone Number</a>
                </li>
                <li>
                    <a href="#">Email</a>
                </li>
            </ul>
            <ul>
                <h4>Social Media Links</h4>
                <li>
                    <a href="#">Address</a>
                </li>
                <li>
                    <a href="#">Phone Number</a>
                </li>
                <li>
                    <a href="#">Email</a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
