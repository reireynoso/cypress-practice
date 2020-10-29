// <reference types="cypress"/> // get auto solutions/methods from cypress

describe('Navigation Suite', () => {
    it("Navigation Tests", () => {
        cy.visit('https://demo.nopcommerce.com/')
        // verify title
        cy.title().should('eq', 'nopCommerce demo store')
        // find and verigy the Register button and click
        cy.get('.ico-register').contains('Reg').click()
        // verify title of new page after clicked
        cy.title().should('eq', 'nopCommerce demo store. Register')

        // go back to home page with back button
        cy.go('back') // also works with cy.go(-1)
        // verify title of prev page again
        cy.title().should('eq', 'nopCommerce demo store')
        // go forward to page
        cy.go('forward') // also works with cy.go(1)
        cy.title().should('eq', 'nopCommerce demo store. Register')

        // reload page
        cy.reload();
        cy.title().should('eq', 'nopCommerce demo store. Register');

    })
})