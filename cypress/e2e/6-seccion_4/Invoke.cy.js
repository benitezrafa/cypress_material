/// <reference types='Cypress'/>

require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
import 'cypress-file-upload'

describe('Funciones Invoke', () => {

    it('Invoke text', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/input-form-demo?_gl=1*4cu86g*_up*MQ..*_ga*NzI1NzE2Njc1LjE3MjYwNDMwMDQ.*_ga_ETKR49VB7Y*MTcyNjA0MzAwNC4xLjAuMTcyNjA0MzAwNC4wLjAuMA..')
        cy.title().should("eq","Selenium Grid Online | Run Selenium Test On Cloud")
        let t=1000

        //validación de la cookie
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()

        //validando texto
        cy.get('.text-gray-900').invoke('text').as('info')

        //comprobando que el texto es el esperado
        cy.get('@info').should('contain','Input form validations')
        cy.wait(t)


        //validando el texto y si es true insertar el valor en el siguiente campo
        cy.get(".text-label").invoke('text').as('title_name')
        cy.wait(t)

        cy.get('@title_name').should('contain','Name').then(()=>{
            cy.get("#name").type('Juan')
        })
    });

    
    it('Invoke estilos', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/input-form-demo?_gl=1*4cu86g*_up*MQ..*_ga*NzI1NzE2Njc1LjE3MjYwNDMwMDQ.*_ga_ETKR49VB7Y*MTcyNjA0MzAwNC4xLjAuMTcyNjA0MzAwNC4wLjAuMA..')
        cy.title().should("eq","Selenium Grid Online | Run Selenium Test On Cloud")
        let t=1000

        //validación de la cookie
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()

        //cambiando estilo de la pagina con invoke
        cy.get('.text-label').invoke('attr','style', 'color:red; font-size:50px;')
    });

    
    it('Invoke ocultar y mostrar elementos', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/input-form-demo?_gl=1*4cu86g*_up*MQ..*_ga*NzI1NzE2Njc1LjE3MjYwNDMwMDQ.*_ga_ETKR49VB7Y*MTcyNjA0MzAwNC4xLjAuMTcyNjA0MzAwNC4wLjAuMA..')
        cy.title().should("eq","Selenium Grid Online | Run Selenium Test On Cloud")
        let t=1000

        //validación de la cookie
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()

        //ocultar el texto de la pagina con ia
        //cy.get('.text-label').invoke('attr','style', 'display:none;')

        //Ejemplo del profesor

        //ocultar el texto de la pagina con invoke durante 3 segundos
        cy.get('.text-label').invoke('hide', '3s')
        cy.get('#name').invoke('hide', '3s')
        cy.wait(t)

        //mostrar el texto de la pagina con invoke
        cy.get('.text-label').invoke('show', '3s')
        cy.get('#name').invoke('show', '3s')
        cy.wait(t)  
    });

    it('Reto con invoke', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/input-form-demo?_gl=1*4cu86g*_up*MQ..*_ga*NzI1NzE2Njc1LjE3MjYwNDMwMDQ.*_ga_ETKR49VB7Y*MTcyNjA0MzAwNC4xLjAuMTcyNjA0MzAwNC4wLjAuMA..')
        cy.title().should("eq","Selenium Grid Online | Run Selenium Test On Cloud")
        let t=2000

        //validación de la cookie
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()

        //ocultar el texto de la pagina con invoke hasta que el campo cy.get('#name') esté relleno
        cy.get('#inputEmail4').invoke('hide')

        cy.get('#name').as('name')
        cy.wait(t)
        cy.get('@name').should('be.visible').type('Rafa').then(()=>{
            cy.get('#inputEmail4').invoke('show')
            cy.get('#inputEmail4').type('rafa@gmail.com')
        })

    });

    it('Invoke src', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/input-form-demo?_gl=1*4cu86g*_up*MQ..*_ga*NzI1NzE2Njc1LjE3MjYwNDMwMDQ.*_ga_ETKR49VB7Y*MTcyNjA0MzAwNC4xLjAuMTcyNjA0MzAwNC4wLjAuMA..')
        cy.title().should("eq","Selenium Grid Online | Run Selenium Test On Cloud")
        let t=2000

        //validación de la cookie
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()

        //validando el src de la imagen
        cy.get('.footer_logo').invoke('attr','src').should('include','footer_lambdatest_logo.svg')

    });

    it.only('Invoke target blank', () => {
        cy.visit('https://qarmy.ar/webs-practicas-testing/')
        cy.title().should("eq","Webs para practicar testing - QARMY")
        let t=2000

        //validando el target blank
        cy.xpath("//span[contains(.,'https://www.demoblaze.com')]").parent('a')  // Asumiendo que el span está dentro de un enlace
          .invoke('removeAttr', 'target').click()
     

    });

});