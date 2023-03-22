import React, { useReducer, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import About from "./About";
import Menu from "./Menu";
import Reservations from "./Reservations";
import OrderOnline from "./Order_Online";
import Login from "./Login";

const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = (s * a) % m) / m;
    };
};

const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ":00");
        }
        if (random() < 0.5) {
            result.push(i + ":30");
        }
    }
    return result;
};

function Main() {
    const updateTimes = (state, action) => {
        switch (action.type) {
            case "updatebooking":
                const date = new Date(action.payload);
                const times = fetchAPI(date);
                return { ...state, ...times };
            default:
                return initializeTimes();
        }
    };

    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitAPI = function (formData) {
        if (formData) {
            return true;
        }
    };

    const submitForm = (date, time, numberOfGuests, occasion) => {
        setIsSubmitted(true);
        const formData = {
            date: date,
            time: time,
            numberOfGuests: numberOfGuests,
            occasion: occasion,
        };
        submitAPI(formData);
    };

    const date = new Date();
    const initializeTimes = () => {
        return fetchAPI(date);
    };
    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        initializeTimes()
    );
    return (
        <main className="main">
            <Routes>
                <Route
                    path="/"
                    element={<HomePage setIsSubmitted={setIsSubmitted} />}
                ></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/menu" element={<Menu />}></Route>
                <Route path="/reservations" element={<Reservations />}></Route>
                <Route path="/order_online" element={<OrderOnline />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route
                    path="/booking"
                    element={
                        <BookingPage
                            availableTimes={availableTimes}
                            dispatcher={(val) => dispatch(val)}
                            submitForm={submitForm}
                            isSubmitted={isSubmitted}
                        />
                    }
                ></Route>
                {isSubmitted && (
                    <Route
                        path="/confirmed"
                        element={<ConfirmedBooking />}
                    ></Route>
                )}
            </Routes>
        </main>
    );
}

export default Main;
