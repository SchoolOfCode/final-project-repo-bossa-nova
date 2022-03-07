import { render, screen } from "@testing-library/react";
import Input from "..";

it("Should count number of inputs", () => {
  render(<Input labelText="Company" />);
  const InputElements = screen.getByLabelText(/company/i);
  expect(InputElements).toBeInTheDocument();
});
