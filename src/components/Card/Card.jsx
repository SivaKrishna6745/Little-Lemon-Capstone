import React from "react";

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
                <img src="images/fast-delivery.png" alt="" />
            </p>
        </div>
    );
}

export default Card;
