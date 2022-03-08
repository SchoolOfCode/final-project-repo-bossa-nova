describe("homepage actions", () => {
  it("logs in user", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Log out").click();
    cy.get(".startTodayButton").click();
    cy.get("input[name=username]").type("test@test.com");
    cy.get("input[name=password]").type("Test1234");
    cy.get("button[name=action]").click();
  });

  it("navigate to add new form", () => {
    cy.get(".newJobButton").click();
    cy.url().should("include", "/add-new");
  });

  it("cancel job add new form and navigate to home", () => {
    cy.get(".negativeButton").click();
    cy.url().should("include", "/home");
  });

  it("save new job and navigate to home", () => {
    cy.get(".newJobButton").click();
    cy.get("input[name=jobTitle]")
      .type("junior dev")
      .should("have.value", "junior dev");
    cy.get("input[name=company]").type("Google").should("have.value", "Google");
    cy.get("input[name=minSalary]").type(25000).should("have.value", 25000);
    cy.get("input[name=maxSalary]").type(30000).should("have.value", 30000);
    cy.get("select[name=jobStatus]")
      .select("applied")
      .should("have.value", "applied");
    cy.get(".positiveButton").click();
    cy.url().should("include", "/home");
  });
});
