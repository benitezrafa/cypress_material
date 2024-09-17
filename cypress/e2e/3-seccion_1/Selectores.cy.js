///<reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')

describe('Tipos de Selectores', () => {


    it('Selector por ID', () => {
        cy.visit("https://www.amazon.es/")
        cy.title().should("eq", "Amazon.es: compra online de electrónica, libros, deporte, hogar, moda y mucho más.")

        cy.get('#twotabsearchtextbox').should("be.visible").type("Carlos")
    });


    it('Selector por Atributo', () => {
        cy.visit("https://www.amazon.es/")
        cy.title().should("eq", "Amazon.es: compra online de electrónica, libros, deporte, hogar, moda y mucho más.")

        cy.get("[placeholder='Buscar Amazon.es']").should("be.visible").type("Carlos")
    });


    it('Selector por X-Path', () => {
        cy.visit("https://www.amazon.es/")
        cy.title().should("eq", "Amazon.es: compra online de electrónica, libros, deporte, hogar, moda y mucho más.")

        cy.xpath("//*[@id='twotabsearchtextbox']").should("be.visible").type("Carlos")
    }); 
    
    it('Selector por contains', () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should("eq", "DEMOQA")

        cy.get(".custom-control-label").contains("Female").click()
        cy.get(".custom-control-label").contains("Other").click()
        
    });

    it.only('Selector por copy_selector', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
        cy.title().should("eq", "OrangeHRM")

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()

        cy.get("#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(1) > div > div:nth-child(2) > div > div > input").type("Rafa")
        
    });






    
});

