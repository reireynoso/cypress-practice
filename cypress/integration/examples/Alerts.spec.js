// <reference types="cypress"/> // get auto solutions/methods from cypress

describe('Alert test', () => {
    it('Alerts', () => {
        // cy.visit('https://www.seleniumeasy.com/test/javascript-alert-box-demo.html')
        // cy.get('#easycont > div > div.col-md-6.text-left > div:nth-child(4) > div.panel-body > button').click()
        // // on cypress, there will be no alert window notification. Automatically closes but it shows alert

        // // run an event to captjure the message in the alert window
            // cy.on('window:alert', (str) => {
            //     // verify assertions
            //     expect(str).to.equal('I am an alert box!')
            // })

        cy.visit('http://testautomationpractice.blogspot.com/')
        cy.get('#HTML9 > div.widget-content > button').click()
            //confirmation alert window
            cy.on('window:confirm', (str) => {
                // verify assertions
                expect(str).to.equal('Press a button!')
            })
    })
})
