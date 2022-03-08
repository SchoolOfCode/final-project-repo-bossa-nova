// Arrange -set initial app state
// Act - take an action
// Assert - make an assertion

context("User logged in", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.contains("Log out").click();
    cy.get(".startTodayButton").click();
    cy.get("input[name=username]").type("test@test.com");
    cy.get("input[name=password]").type("Test1234");
    cy.get("button[name=action]").click();
  });

  it("Loads home page", () => {
    cy.url().should("include", "/home");
  });

  it("Navigates to resources page", () => {
    cy.get("button[name=resources-link]").click();
    cy.url().should("include", "/resources");
  });
});
