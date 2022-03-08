describe("sidebar navigation", () => {
  it("logs in user", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Log out").click();
    cy.get(".startTodayButton").click();
    cy.get("input[name=username]").type("test@test.com");
    cy.get("input[name=password]").type("Test1234");
    cy.get("button[name=action]").click();
  });

  it("adds a new job", () => {});
});
