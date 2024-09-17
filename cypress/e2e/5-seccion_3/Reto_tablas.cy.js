/// <reference types='Cypress'/>

require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
import 'cypress-file-upload'

describe('Reto utilizando todo lo que aprendimos con la sección de tablas', () => {

    it('Extraer información de la tabla', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/table-sort-search-demo?_gl=1*qk4sjd*_up*MQ..*_ga*MTc3NzY3ODU0Ni4xNzI1OTUwMzkx*_ga_ETKR49VB7Y*MTcyNTk1MDM5MC4xLjAuMTcyNTk1MDM5MC4wLjAuMA..')
        cy.title().should("eq", "Selenium Grid Online | Run Selenium Test On Cloud")
        let t=1500

        //consentimento da página
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()

        const datos=[]

        cy.get(".odd td").each(($el,index,$list)=>{
            datos[index]=$el.text()
        }).then(()=>{
            for(let i=0;i<=datos.length;i++){
                cy.log(datos[i])
            }
        })

        
    });



    it('Sumando los valores de los campos con la clase .odd', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/table-sort-search-demo?_gl=1*qk4sjd*_up*MQ..*_ga*MTc3NzY3ODU0Ni4xNzI1OTUwMzkx*_ga_ETKR49VB7Y*MTcyNTk1MDM5MC4xLjAuMTcyNTk1MDM5MC4wLjAuMA..')
        cy.title().should("eq", "Selenium Grid Online | Run Selenium Test On Cloud")
        let t=1500

        //consentimento da página
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()

        const datos=[]
        let cantidadOdd=0

        cy.get(".odd td").each(($el,index,$list)=>{
            datos[index]=$el.text()
        }).then(()=>{
            for(let i=0;i<=datos.length;i++){
                //cy.log(datos[i])
                if(Number(datos[i])){
                    cantidadOdd+=Number(datos[i])
                }
            }
            cy.log("La cantidad total es: "+cantidadOdd)
            expect(cantidadOdd).to.eq(207)
        })
        
    });

    it('Valor de un campo en específico', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/table-sort-search-demo?_gl=1*qk4sjd*_up*MQ..*_ga*MTc3NzY3ODU0Ni4xNzI1OTUwMzkx*_ga_ETKR49VB7Y*MTcyNTk1MDM5MC4xLjAuMTcyNTk1MDM5MC4wLjAuMA..')
        cy.title().should("eq", "Selenium Grid Online | Run Selenium Test On Cloud")
        let t=1500

        //consentimento da página
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()

        const campo=cy.get('tbody > :nth-child(4) > :nth-child(2)')
        cy.log(campo)
        campo.each(($el,index,$list)=>{
            const dato= $el.text()
            cy.log(dato)

            if(dato.includes('Software Engineer')){
                campo.eq(index).next().next().then((age)=>{
                    const Edad=age.text()
                    cy.log(Edad)
                    cy.log("La edad de "+dato+" es "+Edad)
                    expect(Edad).to.eq('41')
                })
            }      
        })
    });
});

