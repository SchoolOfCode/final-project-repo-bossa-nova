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

  it("navigates to update page", () => {
    cy.get(".tablePositiveButton").first().click();
    cy.url().should("include", "/update");
  });

  it("navigates back to home from update page", () => {
    cy.get(".negativeButton").click();
    cy.url().should("include", "/home");
  });

  it("edits job successfully", () => {
    cy.get(".tablePositiveButton").first().click();
    cy.url().should("include", "/update");
    cy.get("input[name=jobTitle]")
      .clear()
      .type("senior dev")
      .should("have.value", "senior dev");
    cy.get("input[name=company]").should("have.value", "Google");
    cy.get("input[name=minSalary]")
      .clear()
      .type(40000)
      .should("have.value", 40000);
    cy.get("input[name=maxSalary]")
      .clear()
      .type(50000)
      .should("have.value", 50000);
    cy.get("textarea[name=jobDescription]")
      .type("A very good job.")
      .should("have.value", "A very good job.");
    cy.get("input[name=techStack]").type("React").should("have.value", "React");
    cy.get("input[name=contact]")
      .type("Rita Bloggs")
      .should("have.value", "Rita Bloggs");
    cy.get("input[name=urlLink]")
      .type("https://www.google.com")
      .should("have.value", "https://www.google.com");
    cy.get("input[name=location]")
      .type("London")
      .should("have.value", "London");
    cy.get("input[name=applicationDeadline]")
      .type("20/03/2022")
      .should("have.value", "20/03/2022");
    cy.get("input[name=interviewDate]")
      .type("20/03/2022")
      .should("have.value", "20/03/2022");
    cy.get("textarea[name=notes]")
      .type("I like this job.")
      .should("have.value", "I like this job.");
    cy.get("select[name=jobStatus]")
      .select("interview")
      .should("have.value", "interview");
    cy.get(".positiveButton").click();
    cy.url().should("include", "/home");
  });

  it("deletes job", () => {
    cy.get(".negativeButton").first().click();
    cy.url().should("include", "/home");
  });
});
