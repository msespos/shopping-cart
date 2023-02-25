import { render, screen, fireEvent } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import Shop from "./Shop";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import userEvent from "@testing-library/user-event";

describe("Shop component", () => {
  it("renders the component", () => {
    const component = render(<Shop />, {wrapper: HashRouter});
    expect(component).toMatchSnapshot();
  });

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

  it("increments the cart by 100 when 25 is input and the Add To Cart button is clicked\
      and 75 is input for a different album and the button is clicked", async () => {
    render(<Shop />, {wrapper: HashRouter});
    const input1 = screen.getByLabelText("Incunabula");
    const addToCartButton1 = screen.getByTestId("Incunabula");
    fireEvent.change(input1, {target: {value: 25}});
    await userEvent.click(addToCartButton1);
    const input2 = screen.getByLabelText("Amber");
    const addToCartButton2 = screen.getByTestId("Amber");
    fireEvent.change(input2, {target: {value: 75}});
    await userEvent.click(addToCartButton2);
    const numInCart = screen.getByTestId("num-in-cart");
    expect(numInCart.textContent).toBe("100");
  });

  it("has the correct image source for a card's album cover", () => {
    render(<Shop />, {wrapper: HashRouter});
    const albumImage = screen.getByAltText("Chiastic Slide Album Cover");
    const imageSource = "https://i.discogs.com/0-NYLZSAqU1h4B_nbVPC5GvFmG1zvc586xjFhRI6cXI/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0OTYt/MTE0NDIxMzUyNi5q/cGVn.jpeg";
    expect(albumImage).toHaveAttribute("src", imageSource);
  });

  it("displays the correct title for a card", () => {
    const { getByText } = render(<Shop />, {wrapper: HashRouter});
    const title = "Tri Repetae";
    expect(getByText(title)).toBeInTheDocument();
  });

  it("displays the correct stats for a card", () => {
    const { getByText } = render(<Shop />, {wrapper: HashRouter});
    const stats = "2005. Eighth album. 69:50";
    expect(getByText(stats)).toBeInTheDocument();
  });

  it("displays the correct description for a card", () => {
    const { getByText } = render(<Shop />, {wrapper: HashRouter});
    const description = "The first double album by the duo. A mix of rough challenging beats and occasional more serene moments.";
    expect(getByText(description)).toBeInTheDocument();
  });
});
