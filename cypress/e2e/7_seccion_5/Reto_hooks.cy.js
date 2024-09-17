/// <reference types='Cypress'/>

require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
import 'cypress-file-upload'

describe('Reto Utilizando Hooks', () => {

    let t=1500

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should("eq","OrangeHRM")
        cy.wait(t)

        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
    });

    after(() => {
        cy.visit('https://www.lambdatest.com/selenium-playground/checkbox-demo?_gl=1*178kjl0*_up*MQ..*_ga*MTA0ODI5NDI2MS4xNzI2MTM1Mjc0*_ga_ETKR49VB7Y*MTcyNjEzNTI3My4xLjAuMTcyNjEzNTI3My4wLjAuMA..')
    });


    it('Teste 1', () => {

        //Entrando en la primera pagina
        cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').should('be.visible').click()  
        cy.wait(t)

        //Volviendo a la pagina anterior
        cy.go('back')
        cy.wait(t)        
    });

    it('Teste 2', () => {

        //Entrando en la segunda pagina
        cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').should('be.visible').click()  
        cy.wait(t)

        //Volviendo a la pagina anterior
        cy.go('back')
        cy.wait(t)        

        cy.go('forward')
        cy.wait(t)

        cy.reload()
        cy.wait(t)
    });

    it('Teste 3', () => {
        cy.get(':nth-child(11) > .oxd-main-menu-item > .oxd-text').should('be.visible').click()
        cy.wait(t)
    });

});