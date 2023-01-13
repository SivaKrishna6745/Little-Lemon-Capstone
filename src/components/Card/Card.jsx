import React from "react";
import "./Card.scss";

function Card(props) {
    return (
        <div className={props.className}>
            <img src={props.imgSrc} alt={`${props.itemName}`} />
            <div className="item-name-price">
                <h2>{props.itemName}</h2>
                <h2>{props.itemPrice}</h2>
            </div>
            <p>{props.itemDesc}</p>
            <p>
                Order a delivery
                <img
                    src="images/fast-delivery.png"
                    alt=""
                    height="50px"
                    width="50px"
                />
            </p>
        </div>
    );
}

export default Card;
