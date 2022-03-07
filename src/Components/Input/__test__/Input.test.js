import { render, screen } from "@testing-library/react";
import Input from "..";

describe("Tests checking if input elements appear on page", () => {
  it("Should render an input with the labelText", () => {
    render(<Input labelText="Company" />);
    const InputElement = screen.getByLabelText(/company/i);
    expect(InputElement).toBeInTheDocument();
  });
  
  it("Should only accept number data type in input", () => {
    render(<Input labelText="Min Salary" />);
    const InputElement = screen.getByLabelText(/min Salary/i);
    expect(InputElement).toBeInTheDocument();
  });
})

