import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <img src="images/Logo.svg" alt="" />
            </div>
            <div className="footer__links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/reservations">Reservations</Link>
                    </li>
                    <li>
                        <Link to="/order_online">Order Online</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="https://www.google.com/maps/place/Hyderabad">
                            Address
                        </a>
                    </li>
                    <li>
                        <a href="tel:+91 9999900000">Phone number</a>
                    </li>
                    <li>
                        <a href="mailto:restaurant@littlelemon.com">Email</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="https://www.facebook.com">Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com">Twitter</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
