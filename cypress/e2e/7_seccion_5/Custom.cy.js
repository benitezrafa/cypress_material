/// <reference types='Cypress'/>

require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
import 'cypress-file-upload'

describe('Ejemplos de Custom Commands', () => {

   

    before(() => {
        cy.visit('https://www.lambdatest.com/selenium-playground/simple-form-demo?_gl=1*1mt6sbr*_up*MQ..*_ga*MTI4OTI4NDYwMy4xNzI2MTc2ODgx*_ga_ETKR49VB7Y*MTcyNjE3Njg4MS4xLjAuMTcyNjE3Njg4MS4wLjAuMA..')
        cy.title().should("eq","Selenium Grid Online | Run Selenium Test On Cloud")

        //Aceptar cookies
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()        
       
    });


    it('Ejemplo 1', () => {

        //Utilizando el custom command: Selector de elemento, texto a escribir, tiempo de espera
        cy.Texto_visible('#sum1','Juan',1000)
    });

});