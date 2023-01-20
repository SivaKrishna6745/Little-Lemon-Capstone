import React, { useState } from "react";
import "./BookingForm.scss";

function BookingForm() {
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [numberOfGuests, setNumberOfGuests] = useState();
    const [occasion, setOccasion] = useState();
    const [availableTimes, setAvailableTimes] = useState([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ]);
    return (
        <form className="form">
            <div className="form-group">
                <label htmlFor="date">Date: </label>
                <input
                    type="date"
                    id="date"
                    className="form-control"
                    placeholder="Enter date..."
                    value={date}
                    onChange={(e) => console.log(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="time">Time: </label>
                <select
                    id="time"
                    className="form-control"
                    value={time}
                    onChange={(e) => console.log(e.target.value)}
                >
                    {availableTimes.map((time, index) => {
                        return <option key={index}>{time}</option>;
                    })}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="number of guests">Number of guests: </label>
                <input
                    type="number"
                    id="number of guests"
                    className="form-control"
                    placeholder="1"
                    min="1"
                    max="10"
                    value={numberOfGuests}
                    onChange={(e) => console.log(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="occasion">Occasion: </label>
                <select
                    id="occasion"
                    className="form-control"
                    value={occasion}
                    onChange={(e) => console.log(e.target.value)}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <button type="button" className="btn btn-submit">
                Submit
            </button>
        </form>
    );
}

export default BookingForm;
