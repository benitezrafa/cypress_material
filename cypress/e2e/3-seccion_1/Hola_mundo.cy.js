describe("Bienvenido al curso de Cypress sección 1", () =>{

    it("Mi primer Test -> Hola Mundo", () =>{
        cy.log("Hola mundo")
        cy.wait(6000)
        
    })

    it('Segundo test -> camp name', () => {
        cy.visit("https://app.lootstudios.com/login/")

        cy.get('#user_login').type("rspbenitez@gmail.com")
        cy.get('#user_pass').type("Rb06082011!")
        cy.get('.compButton_red').click()


        

       // cy.get("#userName").type("Rafael")    
        //cy.get('#userEmail').type("rafael.benites@gmail.com")
        //cy.wait(6000)

    })

})