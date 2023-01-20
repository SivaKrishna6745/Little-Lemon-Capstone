import "./App.css";
import Nav from "./components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import BookingPage from "./pages/BookingPage/BookingPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import ReservationsPage from "./pages/ReservationsPage/ReservationsPage";

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="booking" element={<BookingPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="menu" element={<MenuPage />} />
                <Route path="reservations" element={<ReservationsPage />} />
            </Routes>
        </>
    );
}

export default App;
