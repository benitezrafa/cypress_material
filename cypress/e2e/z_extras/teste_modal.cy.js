/// <reference types='Cypress'/>

describe('Testes de Modal', () => {
    
    it('Teste de Modal', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo?_gl=1*1w3xrxk*_up*MQ..*_ga*MTUzODIyMzc4Mi4xNzI2MDUxMjY1*_ga_ETKR49VB7Y*MTcyNjA1MTI2NC4xLjAuMTcyNjA1MTI2NC4wLjAuMA..')
        cy.title().should('equal','Selenium Grid Online | Run Selenium Test On Cloud')
        

        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()
    });
});