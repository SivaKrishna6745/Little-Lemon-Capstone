import React, { useState } from "react";

function BookingForm({ availableTimes, dispatcher, submitAPI }) {
    const timeRange = availableTimes && Object.values(availableTimes);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [nOG, setNOG] = useState(1);
    const [occasion, setOccasion] = useState("birthday");
    return (
        <>
            <h1>Reserve Your Table!!!</h1>
            <form className="form" onSubmit={submitAPI}>
                <div className="form-group">
                    <label htmlFor="date">Choose Date:</label>
                    <input
                        type="date"
                        id="date"
                        className="form-control"
                        value={date}
                        onChange={(e) => {
                            setDate(e.target.value);
                            dispatcher({
                                type: "updatebooking",
                                payload: e.target.value,
                            });
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Choose Time:</label>
                    <select
                        id="time"
                        data-testid="time-test"
                        className="form-control"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    >
                        {timeRange &&
                            timeRange.map((time, index) => {
                                return (
                                    <option key={index} value={time}>
                                        {time}
                                    </option>
                                );
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
        </>
    );
}

export default BookingForm;
