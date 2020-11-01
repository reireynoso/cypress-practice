require('cypress-downloadfile/lib/downloadFileCommand');

describe('Download Demo', () => {
    it('Download', () => {
        // first param => url of the image
        // second param any string 
        // third param name of file
        cy.downloadFile('http://www.africau.edu/images/default/sample.pdf', 'Download', 'demo.pdf')
    })
})
