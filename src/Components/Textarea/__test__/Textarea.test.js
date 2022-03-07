import { fireEvent, render, screen } from "@testing-library/react";
import Textarea from "..";

describe("textarea tests", () => {
  it("Should render a textarea component with the correct label text", () => {
    render(<Textarea labelText="Notes" />);
    const TextareaElement = screen.getByTestId("textarea-test");
    const TextareaLabelElement = screen.getByText("Notes");
    expect(TextareaLabelElement).toBeInTheDocument();
    expect(TextareaElement).toBeInTheDocument();
  });
  it("Should fire update when textarea is changed and value matches input", () => {
    const update = jest.fn();
    render(<Textarea labelText="Notes" update={update} />);
    const TextareaElement = screen.getByTestId("textarea-test");
    fireEvent.change(TextareaElement, {
      target: { value: "This job is great. I love this job." },
    });
    expect(update).toHaveBeenCalledTimes(1);
    expect(TextareaElement.value).toBe("This job is great. I love this job.");
  });
});
