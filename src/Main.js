import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";

function Main() {
    const [availableTimes, setAvailableTimes] = useState([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ]);
    const updateTimes = () => {
        setAvailableTimes(availableTimes);
    };
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route
                    path="/booking"
                    element={<BookingPage availableTimes={availableTimes} />}
                ></Route>
            </Routes>
        </main>
    );
}

export default Main;
