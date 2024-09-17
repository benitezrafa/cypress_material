/// <reference types='Cypress'/>

require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
import 'cypress-file-upload'

describe('Cypress eventos Mouse', () => {

    it('Drag and Drop', () => {
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        cy.title().should("eq","The Internet")

        cy.get('#column-a').drag("#column-b")
        
        
    });
    

    
    it('Drag and Drop_2', () => {
        cy.visit('https://letcode.in/dropable')
        cy.title().should("eq","Droppable - LetCode")

        cy.get('#draggable').drag("#droppable", {force:true})
        
    });


    it('Drag and Drop_3', () => {
        cy.visit('https://nearform.github.io/testing-playground/#/drag-and-drop')
        //cy.title().should("eq","Nearform Testing Playground")

        cy.get('[data-testid="draggable-box"]').drag('.MuiGrid-container')    
        
    });


    it('Drag over', () => {

        //solamente un ejemplo de como hacer, la página no es operativa 
        cy.visit('https://www.way2automation.com/')
        cy.title().should("eq","Get Online Selenium Certification Course | Way2Automation")


        //"contains" selecciona en el menu de la barra y el ".trigger('mouseover')" abre el desplegable
        cy.contains("Selenium").trigger('mouseout')

        //'contains' indica a tabela desplegable y el nombre de la página
        //'removeAttr' remove la función de saltar a otra página eliminando el "target" del html
        cy.contains("Selenium Python Video Tutorial").invoke("removeAttr", "target").click()  
        
    });


    it('Slider', () => {
        cy.visit('https://practice-automation.com/slider/')
        cy.title().should("eq","Slider | Practice Automation")

        //"attr" pillar el atributo relacionado al slide
        cy.get('#slideMe').invoke("attr", "value", "93")
        
    });


    it.only('Fecha uno', () => {
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