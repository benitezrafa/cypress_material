/// <reference types='Cypress'/>

require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
import 'cypress-file-upload'

describe('Navegacion', () => {

    it.only('Back, forward, refresh', () => {
        cy.visit('https://code.visualstudio.com/')
        cy.title().should("eq","Visual Studio Code - Code Editing. Redefined")
        let t=1500
        cy.wait(t)

        //validacion cookies de la pagina
        cy.get('._2j0fmugLb1FgYz6KPuB91w > :nth-child(1)').click()


        //click nas paginas navegando para adelante
        cy.get('#nav-docs').should('be.visible').click()
        cy.wait(t)

        cy.get('#nav-extend').should('be.visible').click()
        cy.wait(t)

        //navegando para atras
        cy.go('back')
        cy.wait(t)
        cy.go('back')

        //recargando la pagina
        cy.reload()
        cy.wait(t)

        //navegando para adelante
        cy.go('forward')
        cy.wait(t)
        cy.go('forward')

    });

});