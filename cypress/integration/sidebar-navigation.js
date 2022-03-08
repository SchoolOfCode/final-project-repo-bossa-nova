// Arrange -set initial app state
// Act - take an action
// Assert - make an assertion

describe("sidebar navigation", () => {
  it("logs in user", () => {
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

  it("Navigates back to home page from resources page", () => {
    cy.get("button[name=resources-link]").click();
    cy.get("a[name=home-link]").click();
    cy.url().should("include", "/home");
  });
});
