import React, { useState } from "react";

function BookingPage() {
    const availableTimes = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ];
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [nOG, setNOG] = useState(1);
    const [occasion, setOccasion] = useState("birthday");
    return (
        <div className="booking">
            <div>
                <img src="images/website_logo.png" alt="" />
            </div>
            <div className="booking__hero">
                <h1>Reserve Your Table!!!</h1>
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="date">Choose Date:</label>
                        <input
                            type="date"
                            id="date"
                            className="form-control"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Choose Time:</label>
                        <select
                            id="time"
                            className="form-control"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        >
                            {availableTimes.map((time, index) => {
                                return <option key={index}>{time}</option>;
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noofGuests">Number of Guests:</label>
                        <input
                            type="number"
                            id="noofGuests"
                            className="form-control"
                            value={nOG}
                            onChange={(e) => setNOG(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="occasion">Occasion:</label>
                        <select
                            id="occasion"
                            className="form-control"
                            value={occasion}
                            onChange={(e) => setOccasion(e.target.value)}
                        >
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                    </div>
                    <input
                        type="submit"
                        value="Make your reservation"
                        className="btn"
                    />
                </form>
            </div>
            <div>
                <img src="images/website_logo.png" alt="" />
            </div>
        </div>
    );
}

export default BookingPage;
