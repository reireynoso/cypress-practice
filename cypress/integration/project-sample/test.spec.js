describe("Test", () => {
    it("SignUp Test", () => {
        cy.visit('http://react-redux.realworld.io/#/?_k=zhwb95')
        cy.viewport('macbook-15');

        let randomUser = generateUser()
        cy.get('a').contains('Sign up').click();
        cy.get('input[placeholder=Username]').type(randomUser)
        cy.get('input[placeholder=Email]').type(randomUser + '@gmail.com')
        cy.get('input[placeholder=Password]').type(randomUser + "123456!")
        cy.get('button').contains("Sign in").click()
        cy.get('a').contains('Home').should('have.text', 'Home')
        cy.wait(2000)
    })

    it('New Post and Verify', () => {
        cy.get('.ion-compose').click();
        cy.get("input[placeholder='Article Title']").type('jello')
        cy.get("#main > div > div > div > div > div > form > fieldset > fieldset:nth-child(2) > input").type('hello')
        cy.get("#main > div > div > div > div > div > form > fieldset > fieldset:nth-child(3) > textarea").type('sample');
        cy.get("#main > div > div > div > div > div > form > fieldset > fieldset:nth-child(4) > input").type('tag')
        cy.get('#main > div > div > div > div > div > form > fieldset > button').click()
        cy.get('.container h1').should('have.text', 'jello')
    })

    function generateUser(){
        let text = "";


        const possible = "ABCDEFGabcdefh";

        for(let i = 0; i < 5; i++){
            text += possible.charAt(Math.floor(Math.random() * possible.length))
        }

        return text;
    }
})