/// <reference types="Cypress"/>

describe('Referencias a Windows', () => {

    it('Windows propriedade charset', () => {

        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should("eq", "The Number Game")
        cy.wait(1500)

        cy.document().should("have.property", "charset").and("eq", "UTF-8")
        
    });

    it('Windows validacion url', () => {

        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should("eq", "The Number Game")
        cy.wait(1500)

        cy.url().should('include', 'random-number.html')
        cy.url().should('eq', 'https://testsheepnz.github.io/random-number.html')
        
    });
    
});