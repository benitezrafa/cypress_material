/// <reference types='Cypress'/>

require('cypress-xpath')
import 'cypress-file-upload'

describe('Upload imagens', () => {

    it('Cargando imagens', () => {
        cy.visit('https://demoqa.com/automation-practice-form')

        const ruta='img1.png'
        cy.get('[type="file"]').attachFile(ruta)
        
    });
    
});