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

# Interacting with UI Elements
- UI elements: `input box`, `radio buttons`
- Commands: `visit()`, `url()`, `get()`, `title()`
```js
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
```

- UI Elements: `check boxes`, `drop downs`
- Commands: `check`, `uncheck`. `type`
```js
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
```

# Interacting with UI Elements
- UI Elements: `alerts`
- Commands: `.on`
```js
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

```

# Navigating Pages
- Navigate back or forward to the previous or next URL in the browser's history
- Commands: `go()`
```js
describe('Navigation Suite', () => {
    it("Navigation Tests", () => {
        cy.visit('https://demo.nopcommerce.com/')
        // verify title
        cy.title().should('eq', 'nopCommerce demo store')
        // find and verigy the Register button and click
        cy.get('.ico-register').contains('Reg').click()
        // verify title of new page after clicked
        cy.title().should('eq', 'nopCommerce demo store. Register')

        // go back to home page with back button
        cy.go('back') // also works with cy.go(-1)
        // verify title of prev page again
        cy.title().should('eq', 'nopCommerce demo store')
        // go forward to page
        cy.go('forward') // also works with cy.go(1)
        cy.title().should('eq', 'nopCommerce demo store. Register')

        // reload page
        cy.reload();
        cy.title().should('eq', 'nopCommerce demo store. Register');

    })
})
```

# Handling Web Table
- Check value presence anywhere in the table
- check value presence in specific row and column
- check value presence based on condition by iterating rows
```js
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
```

# Cypress Hooks
- Cypress hooks borrowed from Mocha used to organize tests
- Commands: `beforeEach`, `afterEach`, `before`, `after`
- `beforeEach` that particular block will execute before each test starts
- `afterEach` will execute after each test completes
- `before` Before doing all tests, can specifiy in a block which will execute once before.
- `after` After doing all test, can specificy in a block which will execute once after
```js
describe('Hooks', () => {
    // before executing all three tests, execute method login, multiple times before each it block
    before(() => {
        //runs once before all tests in the block
        cy.log('*************** This is a SETUP block ********************')
    })

    after(() => {
        //run once after all tests in the block
        cy.log('*************** This is a TEAR DOWN block ********************')
    })

    beforeEach(() => { 
        //runs before each test in the block
        cy.log('*************** This is a LOGIN block ********************')
    })

    afterEach(() => {
        //runs after each test in the block
        cy.log('*************** This is a LOGOUT block ********************')
    })

    it('Searching', () => {
        cy.log('************ This is Searching Test')
    })

    it('Advanced Searching', () => {
        cy.log('************ This is Advanced Searching Test')
    })

    it('Listing Products', () => {
        cy.log('************ This is Listing Products Test')
    })
})
```

# Cypress Fixture
- Load a fixed set of data in a file
- Inside the directory, `fixtures` provided by cypress, we can create and provide multiple files
```js
describe('Fixture Demo Suite', function(){
    // load the fixture data befor running the test
    before(() => {
        // load fixture file
        cy.fixture('example').then((data) => {
            // data is from the fixture itself
            // attach the data to the object to be accessible in other code block
            this.data = data
        })
    })

    it('Fixture Test', () => {
        cy.visit('https://demo.nopcommerce.com/login')

        cy.get('#Email').type(this.data.email)

        cy.get('#Password').type(this.data.password)

        cy.get('.login-button').click()
    })
})
```

# Custom Commands
- How to create custom commands in cypress
- By default, cypress provides a certain number of commands, which we can automate our web applications but along with them, we can also create our own commands.
- Cypress provides a flder, `support`. Inside `commands.js`, we can write our own commands.
```js
describe('Custom Suite', () => {
    it('LoginTest', () => {
        cy.login('admin@yourstore.com', 'admin')
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')

        cy.login('admin@yourstore.com', 'admin12')
        cy.title().should('be.equal', 'Your store. Login')

        cy.login('admin@yourstore.comds', 'admin')
        cy.title().should('be.equal', 'Your store. Login')
    })

    it('Add Customer', () => {
        //login script
        cy.login('admin@yourstore.com', 'admin')
    
        //adding customer script
        cy.log('Adding customer.....')
    })

    it('Edit Customer', () => {

        cy.login('admin@yourstore.com', 'admin')
        // cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
        cy.log('editing customer.....')
        //editing for customer script
    })
})
```

# Page Object Model Pattern
- Page Object Moel is a design pattern where page objets are separated from Automatino test scripts.
- Advantage: reusability and maintainability
- In `integration`, create a new directory, `PageObjects` with a new class file.
```js
class LoginPage {

    
    visit(){
        cy.visit('https://admin-demo.nopcommerce.com/login')

    }

    fillEmail(value){
        const field = cy.get('[id=Email]')
        field.clear();
        field.type(value);
        return this
    }

    fillPassword(value){
        const field = cy.get('[id=Password]')
        field.clear();
        field.type(value);
        return this
    }

    submit(){
        const button = cy.get('[type=submit]');
        button.click()
    }
}

export default LoginPage
```
- Create the tests
```js
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
```

# Checking for Window Script
- Commands: `viewport`, `screenshot`
- Open tests in certain viewports specified
- Issues facing Uncaught Exceptions: `https://stackoverflow.com/questions/58372833/cypress-test-failing-due-to-error-in-application-code`
```js
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
```

# Cypress File Upload
- Install Cypress Upload dev dependency, `npm install cypress-file-upload --save-dev`
- load the file using `fixture`
- upload and verify the upload file
```js
import 'cypress-file-upload'

describe('Upload the file', () => {
    it('Upload file and assert the nae of the file upload', () => {
        const fixturePath = '1k.jpg' //checks for the image name in the fixxture folder
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get("#file-upload").attachFile(fixturePath)
        cy.get('#file-submit').click()
        cy.wait(1000)
        cy.get("#uploaded-files").contains("1k.jpg")
    })
})
```

# Download File
- Install `npm install cypress-downloadfile --save-dev`
- Then require it with `require('cypress-downloadfile/lib/addPlugin')` in the `cypress/plugins/index.js`
```js
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = (on,config) => {
  on('task', {downloadFile})
}
```

```js
require('cypress-downloadfile/lib/downloadFileCommand');

describe('Download Demo', () => {
    it('Download', () => {
        // first param => url of the image
        // second param any string 
        // third param name of file
        cy.downloadFile('http://www.africau.edu/images/default/sample.pdf', 'Download', 'demo.pdf')
    })
})
```
- Upon downloading, a `Download` folder is ccreated in the root

# REST API Testing with Cypress
- Commands: `request`
```js
describe("HTTP Examples", () => {
    it("GET", () => {
        //make a get request
        cy.request({
            method: "GET",
            url: "https://httpbin.org/get",
        }).then((res) => {
            // expect the res to have a key of URL
            expect(res.body).have.property('url')
        })
    })

    it("POST", () =>{
        cy.request({
            method: "POST",
            url: "https://httpbin.org/post",
            body: {
                'name': 'Rei'
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            expect(res.body).have.property('json')
            // compare the json property and make sure it is equal
            expect(res.body.json).to.deep.equal({
                "name": "Rei"
            })
        })
    })

    it("PATCH", () => {
        cy.request("PATCH", "https://httpbin.org/patch", {'name': 'Rei'}).then((res) => {
            expect(res.body).have.property('json')
            expect(res.body.json).to.deep.equal({
                "name": "Rei"
            })
        })
    })
})
```

# Add HTML Report in Cypress
- Generate a report with Mocha Awesome
- Adjust the `cypress.json` file with the following properties:
```js
"reporter": "mochawesome",
  "reporterOptions": {
      "reportDir": "cypress/report/mochawesome-report", // where to save in directory
      "overwrite": false,
      "html": true,
      "json": false,
      "timestamp": "mmddyyyy_HHMMss"
  }
```
- Add the dev dependency, `npm install mocha mochawesome mochawesome-merge  --save-dev`
- Generate the report by running cypress, `npx cypress run`

# Run Cypress Test-Cases in Docker and Record Video
- Docker Commands: `docker run -it -v $PWD:/e2e -w /e2e --entrypoint=cypress cypress/included:3.2.0 run` (refer to cypress docker images for versions)
- Basically mapping the whole directory of PWD. The current directory we are in.
- -w setting working directory with `e2e`
- entrypoint is the `cypress` directory
- `-it` means iteratively
- Executes test cases in a headless mode on a docker container, not on the local machine
- Alternative appraoch is to create a `docker-compose.yml` file. Code for file can be found in `https://www.cypress.io/blog/2019/05/02/run-cypress-with-a-single-docker-command/`
- And can run with `docker-compose up --exit-code-from cypress`

# Cypress Command Line & Dashboard Services
- How to run Cypress from the command line. 
    - To run all the tests in the terminal => `npx cypress run`.
- How to specify which spec files to run
    - To run a specific spec file => `npx cypress --spec "location_of_spec_file"`
- Working with dashboard features
    - Capture screenshots
    - Recording
    - To run in test runner => `npx cypress open`. All of the screenshots and videos will be saved in the cypress cloud. In the test runner, navigate ro the `runs` tab, connect/login. Follow instructions in the prompt

# Continuous Integration (CI) 
- Cypress Integration with Jenkins.
- Jenkins is CI tool where we can configure our cypress project and run our cypress project scripts.
- Configure `package.json` to run tests. The same command will be used in Jenkins
- Install Jenkins with `brew install jenkins-lts` on your machine. Run it with `brew services start jenkins-lts` and visit `localhost:8080`
- To add project in Jenkins, get the project path with `pwd` and on the Jenkins dashboard, click on New Item, Freestyle Project. Under the General Tab, normally, provide the Github link but can also run with Custom Workspace. Add Build Step with the script command. Back to the dashboard, click on `Build Now`
- Optional: Add NODE JS plugin globally on Jenkins. Add it as a tool. The include on builds
