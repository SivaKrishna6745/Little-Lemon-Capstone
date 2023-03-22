import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
    const [clicked, setClicked] = useState(false);
    const [active, setActive] = useState("home");
    const handleClick = () => {
        setClicked(!clicked);
    };
    return (
        <nav>
            <div>
                <ul
                    id="navbar"
                    className={clicked ? "#navbar active" : "#navbar"}
                >
                    <li>
                        <Link
                            to="/"
                            className={active === "home" ? "active" : ""}
                            onClick={() => {
                                setActive("home");
                                setClicked(false);
                            }}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={active === "about" ? "active" : ""}
                            onClick={() => {
                                setActive("about");
                                setClicked(false);
                            }}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/menu"
                            className={active === "menu" ? "active" : ""}
                            onClick={() => {
                                setActive("menu");
                                setClicked(false);
                            }}
                        >
                            Menu
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/reservations"
                            className={
                                active === "reservations" ? "active" : ""
                            }
                            onClick={() => {
                                setActive("reservations");
                                setClicked(false);
                            }}
                        >
                            Reservations
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/order_online"
                            className={
                                active === "order_online" ? "active" : ""
                            }
                            onClick={() => {
                                setActive("order_online");
                                setClicked(false);
                            }}
                        >
                            Order Online
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            className={active === "login" ? "active" : ""}
                            onClick={() => {
                                setActive("login");
                                setClicked(false);
                            }}
                        >
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
            <div id="mobile" onClick={handleClick}>
                <i
                    id="bar"
                    className={clicked ? "fas fa-times" : "fas fa-bars"}
                ></i>
            </div>
        </nav>
    );
}

export default Nav;
