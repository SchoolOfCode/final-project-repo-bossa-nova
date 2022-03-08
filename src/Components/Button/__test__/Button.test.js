import { render, screen, fireEvent } from "@testing-library/react";
import Button from "..";

describe("Button test", () => {
  it("Should render the button on the page as save text", () => {
    render(<Button text="Save" />);
    const buttonElement = screen.getByText("Save");
    expect(buttonElement).toBeInTheDocument();
  });

  it("Should fire handleClick when the button is clicked", () => {
    const handleClick = jest.fn();
    render(<Button text="Save" handleClick={handleClick} />);
    const buttonElement = screen.getByText("Save");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
