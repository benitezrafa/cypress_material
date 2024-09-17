/// <reference types='Cypress'/>

require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
import 'cypress-file-upload'

describe('Alertas en Cypress', () => {

    it.only('Alertas uno', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo?_gl=1*1c1u0h8*_up*MQ..*_ga*NzI1NzE2Njc1LjE3MjYwNDMwMDQ.*_ga_ETKR49VB7Y*MTcyNjA0MzAwNC4xLjAuMTcyNjA0MzAwNC4wLjAuMA..')
        cy.title().should("eq","Selenium Grid Online | Run Selenium Test On Cloud")
        let t=1500

         //consentimento da página
         cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()


         //click en el boton True
         cy.get(':nth-child(1) > .my-30').click()
         cy.wait(t)

         //mi ejecución del ejercicio
         cy.get('#myModal > .modal-dialog > .modal-content > .modal-footer > .btn-dark').should("contain","Save Changes").click()
         cy.wait(t)


           //click en el boton False
           cy.get(':nth-child(1) > .my-30').click()
           cy.wait(t)
  
           //mi ejecución del ejercicio
           cy.get('#myModal > .modal-dialog > .modal-content > .modal-footer > :nth-child(1)').should("contain","Close").click()


        /*
         //ejemplo del profesor que le salia mal
         cy.on("window:alert", (str)=>{

            expect(str).to.equal("This is the place where the content for the modal dialog displays")
            return true;
         })
         //solucion de la IA para el error del profesor = resultado perfecto
         cy.get('#myModal > .modal-dialog > .modal-content > .modal-footer > .btn-dark').click()
        */
        
    });

});