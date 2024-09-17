/// <reference types='Cypress'/>

require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
import 'cypress-file-upload'

describe('Alias', () => {

    it.only('Alias uno', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/input-form-demo?_gl=1*4cu86g*_up*MQ..*_ga*NzI1NzE2Njc1LjE3MjYwNDMwMDQ.*_ga_ETKR49VB7Y*MTcyNjA0MzAwNC4xLjAuMTcyNjA0MzAwNC4wLjAuMA..')
        cy.title().should("eq","Selenium Grid Online | Run Selenium Test On Cloud")
        let t=1000

        //validación de la cookie
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()

        cy.get('#name').should('be.visible').as('nom')
        cy.get('@nom').type('Juan')
        cy.wait(t)

        cy.get('#inputEmail4').should('be.visible').as('email')
        cy.get('@email').type('juan@gmail.com')
        cy.wait(t)

        cy.get('#inputPassword4').should('be.visible').as('pass')
        cy.get('@pass').type('123456')
        cy.wait(t)

        cy.get('#company').should('be.visible').as('comp')
        cy.get('@comp').type('LambdaTest')
        cy.wait(t)

        cy.get('#websitename').should('be.visible').as('web')
        cy.get('@web').type('www.lambdatest.com')
        cy.wait(t)

        cy.get(':nth-child(3) > .pr-20 > .w-full').should('be.visible').as('country')
        cy.get('@country').select('Brazil')
        cy.wait(t)

        cy.get('#inputCity').should('be.visible').as('city')
        cy.get('@city').type('Salvador')
        cy.wait(t)

        cy.get('#inputAddress1').should('be.visible').as('address')
        cy.get('@address').type('Rua das Flores, 123')
        cy.wait(t)

        cy.get('#inputAddress2').should('be.visible').as('address2')
        cy.get('@address2').type('Apto 101')
        cy.wait(t)

        cy.get('#inputState').should('be.visible').type('Bahia')
        cy.wait(t)

        cy.get('#inputZip').should('be.visible').as('zip')
        cy.get('@zip').type('41220-675')
        
        cy.get('.bg-lambda-900').should('be.visible', 'be.enabled').click()

        cy.get("[style='display: block;']").contains('Thanks for contacting us, we will get back to you shortly.')
        
    });

});