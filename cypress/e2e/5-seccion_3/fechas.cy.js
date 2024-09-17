/// <reference types='Cypress'/>

require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
import 'cypress-file-upload'

describe('Cypress eventos Mouse', () => {

    it.only('Fechas', () => {
        cy.visit('https://practice-automation.com/calendars/')
        cy.title().should("eq","Calendars | Practice Automation")

        cy.get('#g1065-selectorenteradate').should('be.visible').click()

        //se puede pillar parte de una class, no hace falta que este entera
        cy.get('.ui-state-highlight').should('be.visible').click()

        /* ESTAS SON OTRAS FORMAS DE PILLAR UNA FECHA EN UNA PÁGINA

        cy.get("la clase o el imput de la fecha").shoud('be.visible').type("09/09/2024").then(()=>{
            cy.get("la clase o el imput de la fecha").shoud('be.visible').tab()
            o
            cy.get("otro elemento de la pagina")..shoud('be.visible').focus()
            o
            //intentar hacer click con las cordenadas
            cy.get("la clase o el imput de la fecha").click(10,20)
            o
            cy.get("la clase o el imput de la fecha").shoud('be.visible').type("09/09/2024 {esc}")
            })
        
        */
    });

});