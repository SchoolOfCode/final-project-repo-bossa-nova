import { render, screen } from "@testing-library/react";
import Sidebar from "../";
import { BrowserRouter } from "react-router-dom";

const MockSidebar = () => {
  return (
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  );
};

/* Not convinced how valuable these visiblity tests are because I've hardcoded the display prop... */
describe("Sidebar tests to check visibility at different screen sizes", () => {
  it("should render mobile sidebar at small screens", () => {
    render(<MockSidebar />);
    // const mobileSidebar = screen.getByTestId("mobile-sidebar");
    const mobileSidebar = screen.getByTestId("mobile-sidebar");
    expect(mobileSidebar).toBeVisible();
  });

  it.skip("should NOT render desktop sidebar at small screens", () => {
    render(<MockSidebar className="hidden" />);
    const mobileSidebar = screen.getByTestId("desktop-sidebar");
    expect(mobileSidebar).not.toBeVisible();
  });

  it.skip("should NOT render mobile sidebar at medium sized screens and above", () => {
    render(<MockSidebar className="md:hidden" />);
    const mobileSidebar = screen.getByTestId("mobile-sidebar");
    expect(mobileSidebar).not.toBeVisible();
  });

  it("should render desktop sidebar at medium sized screens and above", () => {
    render(<MockSidebar />);
    const mobileSidebar = screen.getByTestId("desktop-sidebar");
    expect(mobileSidebar).toBeVisible();
  });
});
