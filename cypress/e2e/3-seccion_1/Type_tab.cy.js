/// <reference types='Cypress' />

require('cypress-plugin-tab')

describe('Ejemplo función Type Tab', () => {

    it('Type con Tab', () => {

        // cy.visit("https://demoqa.com/automation-practice-form")
        // cy.title().should('eq','DEMOQA')

        // cy.get('#firstName').type("Rafael")

        cy.visit("https://app.lootstudios.com/login/")
        cy.get('#user_login').type('rspbenitez@gmail.com').tab().type('Rb06082011!')
        cy.get('.compButton_red').click()
    });
    
});