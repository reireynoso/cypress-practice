// <reference types="cypress"/> // get auto solutions/methods from cypress

describe('Locating Element', () => {
    it('Verify types of locators', () => {
        cy.visit("https://demo.nopcommerce.com/")
        // get search bar. and type the search term
        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch")
        // grab the submit search button
        cy.get("[type='submit']").click() // click on the search button
        // add to cart
        cy.get(".product-box-add-to-cart-button[value='Add to cart']").click()

        // clear the preb value and type in a new one
        cy.get("#product_enteredQuantity_4").clear().type('2') //quantity

        cy.get("#add-to-cart-button-4").click()// add to cart after setting quantity

        cy.wait(5000)
        // go to shopping cart
        cy.get("#topcartlink > a > span.cart-label").click()
        cy.wait(3000)

        // directed to shopping total. Grab the total price
        cy.get(".product-unit-price").contains('$1,800.00') //validating point
    })
})