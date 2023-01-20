import React from "react";
import Card from "../Card/Card";
import "./Main.scss";
import { Link } from "react-router-dom";

function Main() {
    return (
        <main className="main">
            <div className="hero">
                <div className="hero__desc">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant, focused
                        on traditional recipes served with a modern twist
                    </p>
                    <Link to="/booking">
                        <button className="btn hero__btn">
                            Reserve a Table
                        </button>
                    </Link>
                </div>
                <div className="hero__image">
                    <img src="images/restauranfood.jpg" alt="" />
                </div>
            </div>
            <div className="specials">
                <div className="specials__header">
                    <h1>This Week Specials</h1>
                    <button className="btn specials__btn">Online Menu</button>
                </div>
                <div className="specials__cards">
                    {/* <div className="card">
                        <Card />
                    </div>
                    <div className="card">
                        <Card />
                    </div>
                    <div className="card">
                        <Card />
                    </div> */}
                    <Card
                        className="card"
                        imgSrc="images/greek salad.jpg"
                        itemName="Greek Salad"
                        itemPrice="$12.99"
                        itemDesc="The famous greek saladof crispy lettuce, peppers, olives and our
                                            chicago style teta cheese garnished with crunchy garlic and
                                            rosemary croutons"
                    />
                    <Card
                        className="card"
                        imgSrc="images/bruschetta.jpg"
                        itemName="Bruchetta"
                        itemPrice="$5.99"
                        itemDesc="The famous greek saladof crispy lettuce, peppers, olives and our
                                            chicago style teta cheese garnished with crunchy garlic and
                                            rosemary croutons"
                    />
                    <Card
                        className="card"
                        imgSrc="images/lemon dessert.jpg"
                        itemName="Lemon Dessert"
                        itemPrice="$4.99"
                        itemDesc="The famous greek saladof crispy lettuce, peppers, olives and our
                                            chicago style teta cheese garnished with crunchy garlic and
                                            rosemary croutons"
                    />
                </div>
            </div>
        </main>
    );
}

export default Main;
