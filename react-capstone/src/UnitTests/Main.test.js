import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from '../Components/Main'

test("renders the Main component", () => {
  render(
    <Router>
      <Main />
    </Router>
  );

  const reservationComponent = screen.getByTestId("main-component");
  expect(reservationComponent).toBeInTheDocument();
});