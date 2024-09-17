/// <reference types='Cypress'/>

require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
import 'cypress-file-upload'

describe('Hooks', () => {

    let t=1000

    before(() => {
        cy.log('#######------Principio de todo------#######')
        cy.wait(t)
    });


    beforeEach(() => {
        cy.log('Esto se repite en cada uno de los test muy importante')
        cy.wait(t)
    });


    afterEach(() => {
        cy.log('Esto se hace al final de todos los test')
        cy.wait(t)
    });

    after(() => {
        cy.log('#######------ Ultimo CicloFinal de todo------#######')
        cy.wait(t)
        cy.visit('https://code.visualstudio.com/api')
    });

    it('Teste Uno', () => {
        cy.log('Teste Uno')
        cy.wait(t)
    });

    it('Teste Dos', () => {
        cy.log('Teste Dos')
        cy.wait(t)
    });

    it('Teste Tres', () => {
        cy.log('Teste Tres')
        cy.wait(t)
    });

    it('Teste Cuatro', () => {
        cy.log('Teste Cuatro')
        cy.wait(t)  
    });

});