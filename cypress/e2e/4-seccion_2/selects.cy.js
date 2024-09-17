/// <reference types="Cypress"/>
require('cypress-xpath')

describe('Nueva sección checkbox', () => {


    it('Selector v_1', () => {
        cy.visit("https://testsheepnz.github.io/BasicCalculator.html")
        cy.title().should("eq","Basic Calculator")
        cy.get('body').type('{pageDown}')
       
        cy.get('[data-testid="selectBuild"]').should("be.visible").select(5).should("have.value","5")
        cy.wait(1000)
        cy.get('[data-testid="selectBuild"]').should("be.visible").select(9).should("have.value","9")

    })

    it('Selector v_2', () => {
        cy.visit("https://www.google.es/")
        cy.title().should("eq","Google")
        cy.get('#W0wltc > .QS5gu').click()
       
        cy.get('#APjFqb').should("be.visible").type("Ferrari {enter}").wait(1500)
        cy.xpath("//div[@jsname='bVqjv'][contains(.,'Imágenes')]").click()
        
        //cy.wait(1500)
        //activación de la buzqueda por voz
        //cy.get(".XDyW0e").click()
    })


    it('Multi selector v_3', () => {
        cy.visit("https://play1.automationcamp.ir/forms.html")
        cy.title().should("eq","Form Interactions")
        cy.wait(1500)
       
        cy.get("#select_lang").should("be.visible").select(["Java","JavaScript"])
        
    })

    it.only('Multi selector then v_4', () => {
        cy.visit("https://play1.automationcamp.ir/forms.html")
        cy.title().should("eq","Form Interactions")
        cy.wait(1500)
       
        cy.get("#select_lang").should("be.visible").select(["Java","JavaScript"]).then(()=>{
            cy.get('#notes').type("then es una cosa muy rara, que todavia no lo he sacado provecho")
        })
        
    })

});