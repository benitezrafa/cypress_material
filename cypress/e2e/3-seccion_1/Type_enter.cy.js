/// <reference types="Cypress" />

describe("Funciones para Type ",() =>{
    it('Type --> ENTER ', () => {
        cy.visit("https://www.google.es/")
        cy.get('#L2AGLb > .QS5gu').click()
        cy.title().should('eq', 'Google')
        
        cy.get('#APjFqb').type("Cypress IO {enter}")
        cy.wait(2000)
        cy.get('#rso > div.hlcw0c > div > div > div > div > div > div > div > div.yuRUbf > div > span > a > h3').click()

    });
})