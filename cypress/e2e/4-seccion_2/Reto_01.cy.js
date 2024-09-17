/// <reference types="Cypress"/>

require('cypress-xpath')

describe('Reto Selectores', () => {


    it('Reto selects', () => {
        cy.visit("https://www.jqueryscript.net/demo/Efficient-Dual-List-Box-Plugin-with-jQuery-Bootstrap/")
        cy.title().should("eq", "jQuery Dual List Box Demo")
        cy.wait(1500)

        cy.get(".unselected").select(["Adela Salazar","Angelique Riddle","Angelique Riddle","Cara Luna","Rachel Sherman"]).then(()=>{
            cy.get('.str').click()
            cy.wait(3000)

            cy.get(".selected").should("be.visible").select(["Angelique Riddle","Cara Luna"]).then(()=>{
                cy.get('.stl').click()
                cy.wait(3000)
    
                cy.get(".unselected").should("be.visible").then(()=>{
                    cy.get('.atr').click()
                    cy.wait(3000)
        
                    cy.get(".selected").should("be.visible").then(()=>{
                        cy.get('.atl').click()
                        cy.wait(3000)
                        cy.log("Se movieron todos los elementos")
                    })  
        
                })
            })
        })

       

        

       
        
        
    });
    
});