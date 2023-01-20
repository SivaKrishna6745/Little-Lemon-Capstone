import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <img src="images/Logo.svg" alt="little lemon logo" />
            <ul>
                <h4>Doormat Navigation</h4>
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
            <ul>
                <h4>Contact</h4>
                <li>
                    <a href="https://maps.google.com">Address</a>
                </li>
                <li>
                    <a href="tel:+91-9090909090">Phone Number</a>
                </li>
                <li>
                    <a href="mailto:abc@gmail.com">Email</a>
                </li>
            </ul>
            <ul>
                <h4>Social Media Links</h4>
                <li>
                    <a href="https://www.facebook.com">Facebook</a>
                </li>
                <li>
                    <a href="https://www.twitter.com">Twitter</a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
