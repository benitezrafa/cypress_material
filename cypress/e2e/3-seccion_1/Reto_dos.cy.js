/// <reference types="Cypress"/>

require('cypress-xpath')
require('cypress-plugin-tab')

describe('Segundo Reto', () => {


    it('Probando la Aplicación', () => {

        cy.visit("https://computer-database.gatling.io/computers")
        cy.title("").should("eq","Computers database")
        cy.wait(1500)


        //Buscando
        cy.xpath("//input[contains(@id,'searchbox')]").type("ACE")
        cy.get('#searchsubmit').should("be.visible").click()

        //add
        cy.get('#add').should("be.visible").click()
        cy.get('#name').should("be.visible").type("Rafintoch")
        cy.get('#introduced').should("be.visible").type("2024-05-01").tab().type("2089-08-06")
        cy.get('#company').should("be.visible").select("IBM").should("have.value", "13").wait(1500)
        cy.get('.primary').should("be.visible").click()
        cy.xpath("//input[contains(@id,'searchbox')]").type("Rafintoch")
        cy.get('#searchsubmit').click()

    });
    
});