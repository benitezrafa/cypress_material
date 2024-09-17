/// <reference types='Cypress'/>

import proyectoUno_PO from '../../support/pageObjects/proyectoUno_PO/proyectoUno_PO.cy'
import 'cypress-file-upload'
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')


describe('Page objects models', () => {

    const master = new proyectoUno_PO()

    master.visitHome()
    
    it('Seccion uno', () => {
        master.SeccionUno('Juan', 'juan@gmail.com', '123456', 'LambdaTest', 'www.lambdatest.com')
    });

    it('Seccion dos', () => {
        master.SeccionDos('India', 'New Delhi', 'Calle 123')
    });

    it('Seccion tres', () => {
        master.SeccionTres('bloque 2', 'Contratado', '123456', '123456')
    });

    it('Todas las secciones', () => {
        master.SeccionUno('Juan', 'juan@gmail.com', '123456', 'LambdaTest', 'www.lambdatest.com')
        master.SeccionDos('India', 'New Delhi', 'Calle 123')
        master.SeccionTres('bloque 2', 'Contratado', '123456', '123456')
    });

});