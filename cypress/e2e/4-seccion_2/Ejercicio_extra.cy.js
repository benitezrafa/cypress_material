/// <reference types="Cypress"/>

require('cypress-xpath')

describe('Ejercicios opcionales_Rafa', () => {

    it('Rellenar form completo', () => {

        cy.visit("https://play1.automationcamp.ir/forms.html")
        cy.title().should("eq","Form Interactions")
        cy.wait(1500)
        
        cy.get('#exp').should("be.visible").type(3)
        cy.get('#check_python').should("be.visible").should("not.be.checked").wait(1000)
        cy.get('#check_javascript').check().should("be.checked")

        cy.xpath("//input[contains(@id,'rad_protractor')]").click()

        cy.get('#select_tool').should("be.visible").select("Cypress")

        cy.get("#select_lang").should("be.visible").select(["Java", "JavaScript"])

        cy.get('#notes').type("Ejercicios de fijación de contenido del curso de Cypress")

        //cy.get('#common_sense').type("Only textbox")

        cy.xpath("//label[@class='custom-control-label'][contains(.,'Speaks German?')]").click()

        



    });
    
});