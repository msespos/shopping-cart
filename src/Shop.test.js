import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import Shop from "./Shop";
import '@testing-library/jest-dom';

describe("Shop component", () => {
  it("has the correct source for the shopping cart logo image", () => {
    render(<Shop />, {wrapper: HashRouter});
    const logoImage = screen.getByAltText(/A shopping cart logo/i);
    const imageSource = "shopping-cart-icon.svg";
    expect(logoImage).toHaveAttribute("src", imageSource);
  });
});
