describe("Advanced Commands", () => {
    it("Cy Get", () => {
        cy.visit("https://the-internet.herokuapp.com/inputs")
        // reassigning selected element to a var using property, as
        cy.get('.example p').as('numberText');
        cy.get('@numberText').should('have.text', 'Number')
    })

    it('Cy Should', () => {
        // cy.visit("https://the-internet.herokuapp.com/inputs")
        cy.get('.example p').as('numberText');
        cy.get('@numberText').should('have.text', 'Number')
        // have.text - ''
        // be.empty
        // be.visible
        // .should('have.css', 'font-family')
        // cy.get('form').should('have.class', 'form-horizontal')
        // cy.get('input').should('not.have.value', 'Jane')
        // cy.get('#header a').should('have.attr', 'href', '/users')

        // can take callback with numberous assertions
        cy.get('@numberText').should(($numberText) => {
            expect($numberText).to.have.length(1);
            expect($numberText).to.contain('Number')
        })
    })

    it('Cy Find', () => {
        cy.visit("https://the-internet.herokuapp.com/tables")
        cy.get('#table1').find('tbody>tr').first().find('td').find('a').first().click();
        cy.url('match', '#edit')
    })

    // it('cy each', () => {
    //     cy.visit('http://127.0.0.1:9989')
    //     cy.url().should('match', /127.0.0.1/)
    //     cy.setCookie('sample', 'value')
    //     cy.getCookie('sample').should('exist')

    //     cy.get('ul>li').each(($el,$index,$lis) => {
    //         cy.log('Li element Text is ' + $el.text())

    //     })
    //     .then(($lis) => {
    //         expect($lis).to.have.length(3)
    //     }) 
        
    //     cy.window().its('innerWidth').should('eq', 1000)
    // })
})