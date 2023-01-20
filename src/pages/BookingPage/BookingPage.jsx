import React from "react";
import "./BookingPage.scss";
import BookingForm from "../../components/BookingForm/BookingForm";

function BookingPage() {
    return (
        <>
            <div className="booking-page__heading">
                <h1>Welcome to Little Lemon Restaurant</h1>
                <h1>SignUp to get started</h1>
            </div>
            <BookingForm />
        </>
    );
}

export default BookingPage;
