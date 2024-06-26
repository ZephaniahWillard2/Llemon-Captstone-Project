import { render, screen } from "@testing-library/react";
import BookingForm from "../Components/BookingFormFolder/BookingForm";

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);

    const headingElement = screen.getByText("Reserve a Table");

    expect(headingElement).toBeInTheDocument("Reserve a Table");
})