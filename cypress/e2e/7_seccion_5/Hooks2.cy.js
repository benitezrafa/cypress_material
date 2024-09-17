/// <reference types='Cypress'/>

require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
import 'cypress-file-upload'

describe('Hooks Ejemplos', () => {


    let t=1500

    before(() => {
        cy.visit('https://www.lambdatest.com/selenium-playground/checkbox-demo?_gl=1*178kjl0*_up*MQ..*_ga*MTA0ODI5NDI2MS4xNzI2MTM1Mjc0*_ga_ETKR49VB7Y*MTcyNjEzNTI3My4xLjAuMTcyNjEzNTI3My4wLjAuMA..')
        cy.title().should("eq","Selenium Grid Online | Run Selenium Test On Cloud")
    });

    beforeEach(() => {
        cy.visit('https://www.lambdatest.com/selenium-playground/checkbox-demo?_gl=1*178kjl0*_up*MQ..*_ga*MTA0ODI5NDI2MS4xNzI2MTM1Mjc0*_ga_ETKR49VB7Y*MTcyNjEzNTI3My4xLjAuMTcyNjEzNTI3My4wLjAuMA..')        

        //validacion de cookies
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()
    });


    it('Teste 1', () => {

        //validacion de check
        cy.get("[type='checkbox']").check({force:true}).should('be.checked')
        cy.wait(t)

        //validacion de uncheck
        cy.get("[type='checkbox']").uncheck({force:true}).should('not.be.checked')
        cy.wait(t)
    });

    
    it('Teste 2', () => {

        //validacion de check utilizando xpath
        cy.xpath("(//input[contains(@class,'mr-10')])[3]").check({force:true}).should('be.checked')
        cy.wait(t)

        //validacion de uncheck
        cy.xpath("(//input[contains(@class,'mr-10')])[3]").uncheck({force:true}).should('not.be.checked')
        cy.wait(t)
    });
});