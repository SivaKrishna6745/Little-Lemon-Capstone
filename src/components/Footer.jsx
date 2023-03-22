import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <img src="/assets/Logo1.svg" alt="" />
            <div className="footer_links">
                <div>
                    <h3>Doormat Navigation</h3>
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
                </div>
                <div>
                    <h3>Contact Details</h3>
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
                            <a href="mailto:restaurant@littlelemon.com">
                                Email
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
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
            </div>
        </footer>
    );
}

export default Footer;
