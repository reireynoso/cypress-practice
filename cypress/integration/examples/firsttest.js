describe("My Test Suite", () => {
    it("Verify title of page - pass", () => {
        // visit web page
        cy.visit('https://demo.nopcommerce.com/')
        // verify web page title. assertion
        cy.title().should('eq', 'Store Demo - nopCommerce')
    })

    it("Verify title of page - fail", () => {
        // visit web page
        cy.visit('https://demo.nopcommerce.com/')
        // verify web page title. assertion
        cy.title().should('eq', 'Store Demo - Commerce')
    })
})