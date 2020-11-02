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