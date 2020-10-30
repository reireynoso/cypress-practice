// <reference types="cypress"/> // get auto solutions/methods from cypress

// const { default: LoginPage } = require("../PageObjects/LoginPage")
import LoginPage from '../PageObjects/LoginPage'

describe('Page Object Suite', () => {
    it('Valid Login Test', () => {
        const login = new LoginPage();
        login.visit();
        login.fillEmail('admin@yourstore.com')
        login.fillPassword('admin')
        login.submit()
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
    })
})