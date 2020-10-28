/// <reference types="cypress"/> // get auto solutions/methods from cypress

describe('Table test', () => {
    it('Table Test', () => {

        cy.visit(`http://testautomationpractice.blogspot.com/`)
        // Check value presence anywhere in the table. There's multiple elements with TD. In contains, specify which tag
        cy.get('table[name=BookTable]').contains('td', 'Learn Selenium').should('be.visible')

        // check value presence in specific row and column
        cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')

        // check value presence based on condition by iterating rows, look for author, then find t's book title
        // find all tds. use .each to iterate over each one $ variables
        cy.get('table[name=BookTable] > tbody > tr td:nth-child(2)').each(($e,index, $list) => {
            const text = $e.text()
            if(text.includes('Amod')){
                // get first column but point to the same index it is found in row
                cy.get('table[name=BookTable] > tbody > tr td:nth-child(1)').eq(index).then((bookname) => {
                    // bookname is the argument from the element found. We call .text() to pull out the information inside the element
                    const book = bookname.text()
                    expect(book).to.equal("Master In Java")
                })
            }
        }) 

    })
})
