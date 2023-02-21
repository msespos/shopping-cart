import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import App from "./App";
import '@testing-library/jest-dom';

describe("App component", () => {
  it("renders Home and Shop in the navbar", () => {
    const { getByText } = render(<App />, {wrapper: HashRouter});
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Shop")).toBeInTheDocument();
  });

  it("includes some of the blurb in the navbar note", () => {
    const { asFragment } = render(<App />, {wrapper: HashRouter});
    expect(asFragment()).toMatchSnapshot(`
      this is not an actual store.
    `)
  });

  it("includes some of the blurb in the body", () => {
    const { asFragment } = render(<App />, {wrapper: HashRouter});
    expect(asFragment()).toMatchSnapshot(`
      Autechre have been true musical pioneers for over thirty years.
    `)
  });

  it("has the correct source for the body image", () => {
    render(<App />, {wrapper: HashRouter});
    const bodyImage = screen.getByAltText(/Vintage Autechre Albums/i);
    const imageSource = "VintageAutechreAlbums.png";
    expect(bodyImage).toHaveAttribute("src", imageSource);
  });

  it("has the correct source for the logo image in the navbar", () => {
    render(<App />, {wrapper: HashRouter});
    const logoImage = screen.getByAltText(/VAA Logo/i);
    const imageSource = "logo.png";
    expect(logoImage).toHaveAttribute("src", imageSource);
  });
});
