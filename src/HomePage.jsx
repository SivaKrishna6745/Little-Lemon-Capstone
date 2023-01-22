import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="home">
            <div className="hero">
                <div className="hero__description">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Meditterranean restaurant, focused
                        on traditional recipes served with a modern twist.
                    </p>
                    <Link to="/booking">
                        <button>Reserve a Table</button>
                    </Link>
                </div>
                <div className="hero__image">
                    <img src="images/restauranfood.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
