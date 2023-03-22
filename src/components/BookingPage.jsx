import React from "react";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";

function BookingPage({ availableTimes, dispatcher, submitForm, isSubmitted }) {
    return (
        <div className="booking">
            {isSubmitted ? (
                <ConfirmedBooking />
            ) : (
                <>
                    <h1>Reserve Your Table!!!</h1>
                    <BookingForm
                        availableTimes={availableTimes}
                        dispatcher={(val) => dispatcher(val)}
                        submitForm={submitForm}
                        isSubmitted={isSubmitted}
                    />
                </>
            )}
        </div>
    );
}

export default BookingPage;
