import { fireEvent, render, screen } from "@testing-library/react";
import Input from "..";

describe("input test", () => {
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

  it("Should fire update when the input changed and value matches input", () => {
    const update = jest.fn();
    render(<Input labelText="company" update={update} />);
    const InputElement = screen.getByLabelText(/company/i);
    fireEvent.change(InputElement, { target: { value: "Google" } });
    expect(update).toHaveBeenCalledTimes(1);
    expect(InputElement.value).toBe("Google");
  });
});
