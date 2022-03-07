import { fireEvent, render, screen } from "@testing-library/react";
import Select from "..";

describe("Select input test", () => {
  it("should render Select component", () => {
    render(<Select />);
    const SelectElement = screen.getByLabelText("Job Status:");
    expect(SelectElement).toBeInTheDocument();
  });

  it("should fire update when select input changes and value matches input", () => {
    const update = jest.fn();
    render(<Select update={update} />);
    const SelectElement = screen.getByLabelText("Job Status:");
    fireEvent.change(SelectElement, { target: { value: "applied" } });
    expect(update).toHaveBeenCalledTimes(1);
    expect(SelectElement.value).toBe("applied");
  });
});
