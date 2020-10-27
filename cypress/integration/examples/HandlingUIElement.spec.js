// <reference types="cypress"/> // get auto solutions/methods from cypress

describe('UI Elements', () => {
    it("Verify InputBox & Radio Buttons", () => {
        // cy.visit("http://newtours.demoaut.com/")
        cy.visit("http://demo.guru99.com/test/newtours/")
        // check url of site and verifies it includes "newtours"
        cy.url().should('include', 'newtours')
        // verify conditional for username input
        cy.get("input[name=userName]").should('be.visible').should('be.enabled').type("mercury")
        cy.get("input[name=password]").should('be.visible').should('be.enabled').type("mercury")
        cy.get("input[name=submit]").should('be.visible').click() // submit button
        
        cy.wait(1000)

        // click the flights tab after logging in
        cy.get("body > div:nth-child(5) > table > tbody > tr > td:nth-child(1) > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > a").click()

        // title verification
        cy.title().should('eq', 'Find a Flight: Mercury Tours:')

        // Radio Buttons
        cy.get('input[value=roundtrip]').should('be.visible').should('be.checked') //visible and checked verification
        cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click() 

        // continue button
        cy.get('[name=findFlights]').should('be.visible').click()

        // verify title after redirect, checks if font includes No Seats Available
        cy.get("body > div:nth-child(5) > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(4) > td > table > tbody > tr:nth-child(1) > td:nth-child(2) > table > tbody > tr:nth-child(1) > td > p > font > b > font:nth-child(1)").contains("No Seats Avaialble")
    })
})

