/// <reference types='Cypress'/>

require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
import 'cypress-file-upload'

describe('', () => {

    let t=1500

    before(() => {
        cy.visit('url')
        cy.title().should("eq","title")
        cy.wait(t)
    });


    it('', () => {
        

        
    });

});