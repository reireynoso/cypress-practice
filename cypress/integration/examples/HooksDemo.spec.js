// <reference types="cypress"/> // get auto solutions/methods from cypress

describe('Hooks', () => {
    // before executing all three tests, execute method login, multiple times before each it block
    before(() => {
        //runs once before all tests in the block
        cy.log('*************** This is a SETUP block ********************')
    })

    after(() => {
        //run once after all tests in the block
        cy.log('*************** This is a TEAR DOWN block ********************')
    })

    beforeEach(() => { 
        //runs before each test in the block
        cy.log('*************** This is a LOGIN block ********************')
    })

    afterEach(() => {
        //runs after each test in the block
        cy.log('*************** This is a LOGOUT block ********************')
    })

    it('Searching', () => {
        cy.log('************ This is Searching Test')
    })

    it('Advanced Searching', () => {
        cy.log('************ This is Advanced Searching Test')
    })

    it('Listing Products', () => {
        cy.log('************ This is Listing Products Test')
    })
})