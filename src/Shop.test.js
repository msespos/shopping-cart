import { render, screen, waitFor } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import Shop from "./Shop";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import userEvent from "@testing-library/user-event";

describe("Shop component", () => {
  it("has the correct source for the shopping cart logo image", () => {
    render(<Shop />, {wrapper: HashRouter});
    const logoImage = screen.getByAltText(/A shopping cart logo/i);
    const imageSource = "shopping-cart-icon.svg";
    expect(logoImage).toHaveAttribute("src", imageSource);
  });

  // test slightly adapted from https://www.youtube.com/watch?v=TuxmnyhPdhA
  it("calls the alert when Go To Cart is clicked", async () => {
    // below line from https://stackoverflow.com/questions/53611098/how-can-i-mock-the-window-alert-method-in-jest
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<Shop />, {wrapper: HashRouter});
    const goToCartButton = screen.getByRole("button", { name: "Go To Cart" });
    await userEvent.click(goToCartButton);
    expect(alert).toHaveBeenCalledTimes(1);
  });
});
