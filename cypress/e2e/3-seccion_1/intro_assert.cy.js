/// <reference types="Cypress" />

describe('Introducción a los assert', () => {

    it('Demo de los asserts', () => {
        cy.visit("https://app.lootstudios.com/login/")
        cy.title().should('eq','Loot Studios App - Login')
        
        cy.get('#user_login').should("be.visible").type("Rafa")
        cy.wait(1500)
        cy.get('#user_pass').should("be.visible").should("be.enabled").type("Benitez")
        cy.wait(1500)
        cy.get('[style="width: 128px;"] > .cont > .fullw').should("be.visible")
        cy.wait(1500)

    });
    
});