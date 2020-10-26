# Cypress Practice

# To Get Started
- Install `npm install cypress --save-dev`

# Test Runner Component
- Open Cyress with `npx cypress open`. Cypress directory is provided by the command. Test runner is also opened with the command.
- To run test cases, double click on a test file. A web tab will open executing all of the step in that particular test case. 

# Writing Test Case in Cypress
- Test Suite & Test Case Structure in Crypress(Mocha)
```js
describe("Test Suite", function(){
    // in each test suite, we can define multiple test cases using it() function
    it('test case 1', function(){
        // steps
    })

    it('test case 2', function(){
        // steps
    })
})
```
- Remove test files provided by Cypress within `integration/examples` before creating own test cases. Create `firsttest.js` file.
```js
// sample test
describe("First Test", () => {
    it("doesn't do much", () => {
        expect(true).to.equal(true)
    })
})
```

# How to Run Crypress Tests in Test Runner in Terminal
- Cypress supports the electron browser. Runs Electron by default. Can switch between Google Chrome and Electron in the test runner
- To run ALL the test under examples directory, `npx cypress run` in the terminal. Running `npx cypress run --headed` will run in the browser
- To run a SINGLE test, `npx cypress run  -spec "cypress/integration/examples/test_file.js"`
- To switch to Chrome from terminal, run the command, `npx cypress run --browser chrome`

# Folder Structure
- `Fixtures`, use to maintain the test data. Test cases, by default, will refer to this location for the test data.
- `Integration`, inside we have the `examples` directory which hold the test cases.
- `Plugins` contains the events listeners. Logs the events.
- `Screenshot` failure screenshots are stored
- `Support` contains reusable scripts
- `Videos` 
- `node_modules` dependencies installed 
- `cypress.json` Cypress configurations. Overide default values

# Locating Elements
- Look for elements inside cypress
- `get()` get one or more DOM elements by selector
```js
    // get the element
    cy.get(selector) // locate the element
```
- CSS selector `.class`, `#id`, `[attribute=value]`, `.class[attribute=value]`

# Locating Elements - Demo
1. Launch browser and Open URL `https://demo.nopcommerce.com/`
2. Enter Text in Search box "Apple Macbook Pro 13-inch"
3. Click on `Search` Button
4. Click on `Add to cart`
5. Provide Quantity 2
6. Click on `Add to cart`
7. Click on `Shopping Cart` Link at the top of the page
8. Verify the total amount

```js
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
```