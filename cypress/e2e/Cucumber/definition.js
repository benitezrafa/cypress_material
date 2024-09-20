import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Abrir el navegador principal', () => {
    cy.visit('https://selectorshub.com/xpath-practice-page/')
})

When('Cargar el Email', () => {
    cy.get('#shub91').type('jose@gmail.com')
    cy.wait(2000)
})

When('Cargar el Password', () => {
    cy.get('#pass').type('123456')
    cy.wait(2000)
})

And('Cargando la Compañia', () => {
    cy.get('#company').type('Cypress')
    cy.wait(2000)
})

And('Cargando numero de telefono', () => {
    cy.get("[type='number']").type('1234567890')
    cy.wait(2000)
})

Then('Validando el Login', () => {
    cy.title().should('eq', 'Xpath Practice Page | Shadow dom, nested shadow dom, iframe, nested iframe and more complex automation scenarios.')
    cy.wait(2000)
})


