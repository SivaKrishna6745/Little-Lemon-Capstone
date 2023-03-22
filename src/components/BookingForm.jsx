import React, { useState } from "react";

function BookingForm({ availableTimes, dispatcher, submitForm, isSubmitted }) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [occasion, setOccasion] = useState("birthday");
    const timeRange = availableTimes && Object.values(availableTimes);

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(date, time, numberOfGuests, occasion);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="date">Choose Date:</label>
                <input
                    type="date"
                    id="date"
                    className="form-control"
                    value={date}
                    required
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
                    required
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
                    value={numberOfGuests}
                    required
                    onChange={(e) => setNumberOfGuests(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="occasion">Occasion:</label>
                <select
                    id="occasion"
                    className="form-control"
                    value={occasion}
                    required
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
                disabled={date === ""}
            />
        </form>
    );
}

export default BookingForm;
