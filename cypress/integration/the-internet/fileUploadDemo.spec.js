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