import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import App from "./App";
import '@testing-library/jest-dom';

describe("App component", () => {
  it("renders the component", () => {
    const component = render(<App />, {wrapper: HashRouter});
    expect(component).toMatchSnapshot();
  });

  it("has the correct source for the body image", () => {
    render(<App />, {wrapper: HashRouter});
    const bodyImage = screen.getByAltText(/Vintage Autechre Albums/i);
    const imageSource = "VintageAutechreAlbums.png";
    expect(bodyImage).toHaveAttribute("src", imageSource);
  });
});
