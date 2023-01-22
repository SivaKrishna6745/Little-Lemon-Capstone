import React, { useState } from "react";
import BookingForm from "./BookingForm";

function BookingPage({ availableTimes }) {
    return (
        <div className="booking">
            <div>
                <img src="images/website_logo.png" alt="" />
            </div>
            <div className="booking__hero">
                <BookingForm
                    // date={date}
                    // time={time}
                    // nOG={nOG}
                    // occasion={occasion}
                    // setDate={setDate}
                    // setTime={setTime}
                    // setNOG={setNOG}
                    // setOccasion={setOccasion}
                    availableTimes={availableTimes}
                />
            </div>
            <div>
                <img src="images/website_logo.png" alt="" />
            </div>
        </div>
    );
}

export default BookingPage;
