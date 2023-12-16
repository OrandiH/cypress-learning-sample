describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000")
    })

  
    it("allows users to subscribe to the email list", () => {


        cy.getByData("email-input").type('test@test.com')
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist").contains("test@test.com")
    })

    it("does not allow a invalid email address", () => {


        cy.getByData("email-input").type('test')
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
    })

    it("should not allow users to subscribe again if already subscribed", () => {
        cy.getByData("email-input").type('john@example.com')
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should('exist').contains('john@example.com already exists')
    })
  })
  