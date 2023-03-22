import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import testimonials from "./testimonials";

function Main({ setIsSubmitted }) {
    useEffect(() => setIsSubmitted(false));
    return (
        <main>
            <div className="hero">
                <div className="hero_description">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Meditteranean restaurant, focused
                        on traditional recipes served with a modern twist.
                    </p>
                    <Link to="/booking">
                        <button className="btn">Reserve a Table</button>
                    </Link>
                </div>
                <div className="hero_image">
                    <img src="/assets/restauranfood.jpg" alt="" />
                </div>
            </div>
            <div className="specials">
                <div className="specials_head">
                    <h1>This Week Specials!</h1>
                    <button className="btn">Online Menu</button>
                </div>
                <div className="specials_articles">
                    {testimonials.map((testimonial) => {
                        return (
                            <article
                                key={testimonial.id}
                                className="specials_article"
                            >
                                <img src={testimonial.image} alt="" />
                                <div className="testimonial_details">
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.price}</p>
                                </div>
                                <p className="specials_article_description">
                                    {testimonial.desciption}
                                </p>
                                <label>
                                    <b>{testimonial.order}</b>
                                </label>
                            </article>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}

export default Main;
