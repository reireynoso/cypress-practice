// <reference types="cypress"/> // get auto solutions/methods from cypress

describe('UI Elements Part 2', () => {
    it("Hobbies Check Box", () => {
        cy.visit('http://demo.automationtesting.in/Register.html')

        // check first checkbox and it shoudl have a avalue of Cricket
        cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value', 'Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value', 'Hockey')

        // uncheck
        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')
        
        // get all input when type is checkbox and pass in array of Values we want to check
        cy.get('input[type=checkbox]').check(['Cricket', 'Hockey'])
    })

    it("Skills Drop Down", () => {
        // url can still be visited from previous it block
        //select the select drop down of skills and select Android and test if value is the same
        cy.get("#Skills").select('Android').should('have.value', 'Android')
    })

    it("Languages Multi Select", () => {
        // url can still be visited from previous it block
        // get element that brings down the selection
        cy.get('#msdd').click()
        // get element that contains the slections once open. Multi select
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Japanese').click()
    })

    it("Select countries searchable drop down", () => {
        // url can still be visited from previous it block
        // Click the select country option to bring down the options and input field. Forcing it since a dropdown is covering the clickable element
        cy.get('[role=combobox]').click({force:true})

        // get the input field by class and type Ind
        cy.get('.select2-search__field').type('Ind')
        //press enter
        cy.get('.select2-search__field').type('{enter}')
    })
})