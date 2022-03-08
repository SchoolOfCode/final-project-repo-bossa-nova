// Arrange -set initial app state
// Act - take an action
// Assert - make an assertion

describe("My first Test", () => {
  it("Navigate to Add new resource", () => {
    cy.visit("http://localhost:3000/home");
    // cy.url().should("include", "/");
  });
});
