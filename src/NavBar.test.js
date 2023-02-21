import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import NavBar from "./NavBar";
import '@testing-library/jest-dom';

describe("App component", () => {
  it("renders Home and Shop in the navbar", () => {
    const { getByText } = render(<NavBar />, {wrapper: HashRouter});
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Shop")).toBeInTheDocument();
  });

  it("includes some of the blurb in the navbar note", () => {
    const { asFragment } = render(<NavBar />, {wrapper: HashRouter});
    expect(asFragment()).toMatchSnapshot(`
      this is not an actual store.
    `)
  });

  it("has the correct source for the logo image in the navbar", () => {
    render(<NavBar />, {wrapper: HashRouter});
    const logoImage = screen.getByAltText(/VAA Logo/i);
    const imageSource = "logo.png";
    expect(logoImage).toHaveAttribute("src", imageSource);
  });
});
