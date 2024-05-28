import React from "react";
import { render, screen } from "@testing-library/react";
import Testimonial from '../Components/TestimonialFolder/Testimonial'

describe("Testimonial component", () => {
  test("renders the testimonial cards", () => {
    render(<Testimonial />);
    
    // Check if the testimonial cards are rendered
    const testimonialCards = screen.getAllByTestId("testimonial-card");
    expect(testimonialCards).toHaveLength(3);
  });
});