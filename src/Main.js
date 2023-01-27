import React, { useReducer } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";

function Main() {
    const updateTimes = (action, state) => {
        switch (action.type) {
            case "updatebooking":
                console.log("state");
                return { ...state };
            default:
                return initializeTimes;
        }
    };
    const initializeTimes = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ];
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route
                    path="/booking"
                    element={
                        <BookingPage
                            availableTimes={availableTimes}
                            dispatcher={dispatch}
                        />
                    }
                ></Route>
            </Routes>
        </main>
    );
}

export default Main;
