import { render, screen, fireEvent } from "@testing-library/react";
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

  // help from Kuromika (fellow Odinite) for the following test:
  // "It is a more than reasonable question, it is a good test.
  //  You could test the parent component (the component that contains both components),
  //  in the test you could use userEvents to simulate the inputs, the click, and then
  //  get the cart component and expect the number displayed to be some value."

  it("increments the cart by 1 when 1 is input and the Add To Cart button is clicked", async () => {
    render(<Shop />, {wrapper: HashRouter});
    const input = screen.getByLabelText("Incunabula");
    const addToCartButton = screen.getByTestId("Incunabula");
    fireEvent.change(input, {target: {value: 1}});
    await userEvent.click(addToCartButton);
    const numInCart = screen.getByTestId("num-in-cart");
    expect(numInCart.textContent).toBe("1");
  });
});
