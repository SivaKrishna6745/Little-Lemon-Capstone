import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import BookingPage from "./components/BookingPage";
import "@testing-library/jest-dom";
import BookingForm from "./components/BookingForm";

test("Renders the BookingPage heading", () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Reserve Your Table!!!");
    expect(headingElement).toBeInTheDocument();
});

test("Renders the reservation form", () => {
    render(<BookingForm />);
    const dateLabel = screen.getByText(/Choose Date:/i);
    const timeLabel = screen.getByText(/Choose Time:/i);
    expect(dateLabel).toBeInTheDocument();
    expect(timeLabel).toBeInTheDocument();

    const dateInput = screen.getByLabelText(/Choose Date:/i);
    expect(dateInput).toHaveAttribute("type", "date");
});

test("button should be disabled when date is empty", () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText(/Choose Date:/i);
    fireEvent.change(dateInput, { target: { value: "" } });
    const btn = screen.getByRole("button", "Make your reservation");
    expect(btn).toHaveAttribute("disabled");
});
