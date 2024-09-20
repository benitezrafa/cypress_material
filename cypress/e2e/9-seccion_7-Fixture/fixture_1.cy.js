/// <reference types='Cypress'/>

require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
import 'cypress-file-upload'

describe('Carga por Fixture', () => {

    let t=1500

    //Carga de datos tradicional
    // before(function(){
    //     cy.fixture('datos_1.json').then(function(data){
    //         //this.data=data
    //         globalThis.data=data
    //     })     
    // });


    // //Carga de datos con Alias
    // before(function(){
    //     cy.fixture('datos_1.json').as('datos_json') // el alias
    // })


    it('Teste uno: Cargando archivos json', function(){
        cy.visit('https://www.lambdatest.com/selenium-playground/input-form-demo?_gl=1*sh29si*_up*MQ..*_ga*NjUxMDYzNjE2LjE3MjY0NzEzNDI.*_ga_ETKR49VB7Y*MTcyNjQ3MTM0MS4xLjAuMTcyNjQ3MTM0MS4wLjAuMA..')
        cy.title().should("eq","Selenium Grid Online | Run Selenium Test On Cloud")
        cy.wait(t)
        
        //Validacion de cookies
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()

        //Ingreso de datos
        cy.get('#name').should('be.visible').type(data.name)
        cy.get('#inputEmail4').should('be.visible').type(data.email)
        cy.get('#inputPassword4').should('be.visible').type(data.password)
        cy.get('#company').should('be.visible').type(data.company)
        cy.get('#websitename').should('be.visible').type(data.website)
        cy.get(':nth-child(3) > .pr-20 > .w-full').should('be.visible').type(data.country)
        cy.get('#inputCity').should('be.visible').type(data.city)
        cy.get('#inputAddress1').should('be.visible').type(data.address1)
        cy.get('#inputAddress2').should('be.visible').type(data.address2)
        cy.get('#inputState').should('be.visible').type(data.state)
        cy.get('#inputZip').should('be.visible').type(data.postcode)
        
    });

    it('Teste dos: Cargando archivos json con alias', function(){
        cy.visit('https://www.lambdatest.com/selenium-playground/input-form-demo?_gl=1*sh29si*_up*MQ..*_ga*NjUxMDYzNjE2LjE3MjY0NzEzNDI.*_ga_ETKR49VB7Y*MTcyNjQ3MTM0MS4xLjAuMTcyNjQ3MTM0MS4wLjAuMA..')
        cy.title().should("eq","Selenium Grid Online | Run Selenium Test On Cloud")
        cy.wait(t)
        
        //Validacion de cookies
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()

        //Carga de datos con alias
        cy.get('@datos_json').then((data)=>{

            //Ingreso de datos
            cy.get('#name').should('be.visible').type(data.name)
            cy.wait(t)
            cy.get('#inputEmail4').should('be.visible').type(data.email)
            cy.wait(t)
            cy.get('#inputPassword4').should('be.visible').type(data.password)
            cy.wait(t)
            cy.get('#company').should('be.visible').type(data.company)
            cy.wait(t)
            cy.get('#websitename').should('be.visible').type(data.website)
            cy.wait(t)
            cy.get(':nth-child(3) > .pr-20 > .w-full').should('be.visible').type(data.country)
            cy.wait(t)
            cy.get('#inputCity').should('be.visible').type(data.city)
            cy.wait(t)
            cy.get('#inputAddress1').should('be.visible').type(data.address1)
            cy.wait(t)
            cy.get('#inputAddress2').should('be.visible').type(data.address2)
            cy.wait(t)
            cy.get('#inputState').should('be.visible').type(data.state)
            cy.wait(t)
            cy.get('#inputZip').should('be.visible').type(data.postcode)
        })
    });

    
    it.only('Reto: Cargando archivos json con alias', function(){
       
       
       cy.fixture("datos_1.json").then((testdata)=>{
            testdata.forEach((data)=>{
                const d_name=data.name
                const d_email=data.email
                const d_password=data.password
                const d_company=data.company
                const d_website=data.website
                const d_country=data.country
                const d_city=data.city
                const d_address1=data.address1
                const d_address2=data.address2
                const d_state=data.state
                const d_postcode=data.postcode


                // cy.window().then((win) => {
                //     cy.stub(win, 'open').as('windowOpen')
                // })
                
                cy.visit('https://www.lambdatest.com/selenium-playground/input-form-demo?_gl=1*sh29si*_up*MQ..*_ga*NjUxMDYzNjE2LjE3MjY0NzEzNDI.*_ga_ETKR49VB7Y*MTcyNjQ3MTM0MS4xLjAuMTcyNjQ3MTM0MS4wLjAuMA..')
                cy.title().should("eq","Selenium Grid Online | Run Selenium Test On Cloud")
                cy.wait(t)
            
                //Validacion de cookies
                
               
                //Ingreso de datos
                cy.get('#name').should('be.visible').type(d_name)
                cy.get('#inputEmail4').should('be.visible').type(d_email)
                cy.get('#inputPassword4').should('be.visible').type(d_password)
                cy.get('#company').should('be.visible').type(d_company)
                cy.get('#websitename').should('be.visible').type(d_website)
                cy.get(':nth-child(3) > .pr-20 > .w-full').should('be.visible').type(d_country)
                cy.get('#inputCity').should('be.visible').type(d_city)
                cy.get('#inputAddress1').should('be.visible').type(d_address1)
                cy.get('#inputAddress2').should('be.visible').type(d_address2)
                cy.get('#inputState').should('be.visible').type(d_state)
                cy.get('#inputZip').should('be.visible').type(d_postcode)
                cy.get('.bg-lambda-900').click()
                cy.wait(t)

            })    
       })
       
    })
});