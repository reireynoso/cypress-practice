
describe("Cura Make Appointment", () => {
    it("Visit the URL", () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
    })

    it("Click on Make Appointment", () => {
        // btn-make-appointment 
        cy.get('#btn-make-appointment').click()
    })

    it("Login", () => {
        cy.get('#txt-username').type("John Doe")
        cy.get('#txt-password').type("ThisIsNotAPassword")
        cy.get('#btn-login').click()
    })

    it("Make Appointment", () => {

        // select Hongkong  CURA Healthcare Center
        cy.get('select').select('Hongkong CURA Healthcare Center')
        // checkbox  - #chk_hospotal_readmission
        cy.get('#chk_hospotal_readmission').click()
        // checkbox click - #radio_program_medicaid
        cy.get('#radio_program_medicaid').click()
        // input date: #text_visit_date
        cy.get('#txt_visit_date').type('30/11/2020')
        //#txt_comment
        cy.get('#txt_comment').click({force: true})
        cy.get('#txt_comment').type("Hello")
        // click : btn-book-appointment
        cy.get('#btn-book-appointment').click()
        
    })

    it("Verify Appointment", () => {
        // h2 : Appointment Confirmation
        cy.get('h2').contains('Appointment Confirmation');
        cy.get('#comment').contains('Hello')
        // comment: #comment
    })
})