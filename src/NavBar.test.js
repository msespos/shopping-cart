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

  it("renders the component", () => {
    const component = render(<NavBar />, {wrapper: HashRouter});
    expect(component).toMatchSnapshot()
  });

  it("has the correct source for the logo image in the navbar", () => {
    render(<NavBar />, {wrapper: HashRouter});
    const logoImage = screen.getByAltText(/VAA Logo/i);
    const imageSource = "logo.png";
    expect(logoImage).toHaveAttribute("src", imageSource);
  });
});
