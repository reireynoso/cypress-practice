
context('Window', () => {
    beforeEach(() => {
        cy.visit('https://scrolltest.com')
    })

    it('open in mac 15', () => {
        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(200)
    })

    it('open in mac 13', () => {
        cy.viewport('macbook-13')
        cy.screenshot()
        cy.wait(200)
    })

    it('open in ipad 2', () => {
        cy.viewport('ipad-2')
        cy.screenshot()
        cy.wait(200)
    })

    it('open in iphone 6', () => {
        cy.viewport('iphone-6')
        cy.screenshot()
        cy.wait(200)
    })
}) 