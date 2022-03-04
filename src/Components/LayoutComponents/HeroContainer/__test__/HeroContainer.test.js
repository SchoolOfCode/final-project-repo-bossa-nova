import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import HeroContainer from "../index.js";

it("should render same text passed into title prop", () => {
  render(<HeroContainer title="Page Title" />);
  const headingElement = screen.getByText(/page title/i);
  expect(headingElement).toBeInTheDocument();
});