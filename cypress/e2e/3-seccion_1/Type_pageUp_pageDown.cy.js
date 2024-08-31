/// <reference types="Cypress" />

describe('Ejemplo Type page UP, Page Down', () => {

    it('Teste PageUp', () => {
        cy.visit('https://www.google.es/')

        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('#APjFqb').type('Cypress.io{enter}')
        cy.wait(4000)
        cy.get('body').type('{pageUp}')        

    });

    it('Teste PageDown', () => {
        cy.visit('https://www.google.es/')

        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('#APjFqb').type('Cypress.io{enter}')
        cy.wait(4000)
        cy.get('body').type('{pageDown}')        

    });

    
});
