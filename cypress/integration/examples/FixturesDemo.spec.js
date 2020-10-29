// <reference types="cypress"/> // get auto solutions/methods from cypress

describe('Fixture Demo Suite', function(){
    // load the fixture data befor running the test
    before(() => {
        // load fixture file
        cy.fixture('example').then((data) => {
            // data is from the fixture itself
            // attach the data to the object to be accessible in other code block
            this.data = data
        })
    })

    it('Fixture Test', () => {
        cy.visit('https://demo.nopcommerce.com/login')

        cy.get('#Email').type(this.data.email)

        cy.get('#Password').type(this.data.password)

        cy.get('.login-button').click()
    })
})