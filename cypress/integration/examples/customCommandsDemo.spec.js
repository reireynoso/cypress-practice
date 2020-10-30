// <reference types="cypress"/> // get auto solutions/methods from cypress

describe('Custom Suite', () => {
    it('LoginTest', () => {
        cy.login('admin@yourstore.com', 'admin')
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')

        cy.login('admin@yourstore.com', 'admin12')
        cy.title().should('be.equal', 'Your store. Login')

        cy.login('admin@yourstore.comds', 'admin')
        cy.title().should('be.equal', 'Your store. Login')
    })

    it('Add Customer', () => {
        //login script
        cy.login('admin@yourstore.com', 'admin')
    
        //adding customer script
        cy.log('Adding customer.....')
    })

    it('Edit Customer', () => {

        cy.login('admin@yourstore.com', 'admin')
        // cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
        cy.log('editing customer.....')
        //editing for customer script
    })
})