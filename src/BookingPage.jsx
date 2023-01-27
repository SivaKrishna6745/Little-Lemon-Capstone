import React from "react";
import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatcher }) {
    return (
        <div className="booking">
            <div>
                <img src="images/website_logo.png" alt="" />
            </div>
            <div className="booking__hero">
                <BookingForm
                    availableTimes={availableTimes}
                    dispatcher={dispatcher}
                />
            </div>
            <div>
                <img src="images/website_logo.png" alt="" />
            </div>
        </div>
    );
}

export default BookingPage;
