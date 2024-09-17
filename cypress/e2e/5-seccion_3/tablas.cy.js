/// <reference types='Cypress'/>

require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
import 'cypress-file-upload'

describe('Elementos de una tabla', () => {

    it('Children', () => {
        let t=1500
        cy.visit('https://www.lambdatest.com/selenium-playground/table-records-filter-demo?_gl=1*16z7hwc*_up*MQ..*_ga*MTU5MjgzMzg4OS4xNzI1OTE3NjAy*_ga_ETKR49VB7Y*MTcyNTkxNzYwMS4xLjAuMTcyNTkxNzYwMS4wLjAuMA..')
        cy.title().should("eq","Selenium Grid Online | Run Selenium Test On Cloud")
        cy.wait(t)

        //consentimento da página
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()

        //codigo de claude
        // cy.get('.btn-group').children().eq(0).should('have.text', 'HyperExecute').and('have.attr', 'data-target', 'pagado').click()
        // cy.wait(t)
        // cy.get('.btn-group').children().eq(1).should('have.text', 'Selenium Testing').and('have.attr', 'data-target', 'pendiente').click()
        // cy.wait(t)
        // cy.get('.btn-group').children().eq(2).should('have.text', 'Cypress Testing').and('have.attr', 'data-target', 'cancelado').click()
        // cy.wait(t)
        // cy.get('.btn-group').children().eq(3).should('have.text', 'All').and('have.attr', 'data-target', 'all').click()
        // cy.wait(t)
        
        //codigo del profesor
        cy.get("[type='button']").eq(0).should("contain","HyperExecute").click()
        cy.wait(t)
        cy.get("[type='button']").eq(1).should("contain","Selenium Testing").click()
        cy.wait(t)
        cy.get("[type='button']").eq(2).should("contain","Cypress Testing").click()
        cy.wait(t)
        cy.get("[type='button']").eq(3).should("contain","All").click()
        cy.wait(t)

     });


     it('Filter', () => {
        let t=1500
        cy.visit('https://www.lambdatest.com/selenium-playground/table-records-filter-demo?_gl=1*16z7hwc*_up*MQ..*_ga*MTU5MjgzMzg4OS4xNzI1OTE3NjAy*_ga_ETKR49VB7Y*MTcyNTkxNzYwMS4xLjAuMTcyNTkxNzYwMS4wLjAuMA..')
        cy.title().should("eq","Selenium Grid Online | Run Selenium Test On Cloud")
        cy.wait(t)
        
        //consentimento da página
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()

        cy.get("[type='button']").filter("[data-target='pagado']")
        cy.wait(t)
        cy.get("[type='button']").filter("[data-target='pagado']").click()

        cy.get("[type='button']").filter("[data-target='pendiente']")
        cy.wait(t)
        cy.get("[type='button']").filter("[data-target='pendiente']").click()

        cy.get("[type='button']").filter("[data-target='cancelado']")
        cy.wait(t)
        cy.get("[type='button']").filter("[data-target='cancelado']").click()

        cy.get("[type='button']").filter("[data-target='all']")
        cy.wait(t)
        cy.get("[type='button']").filter("[data-target='all']").click()
     });


     it('Find', () => {
        let t=1500
        cy.visit('https://www.lambdatest.com/selenium-playground/table-records-filter-demo?_gl=1*16z7hwc*_up*MQ..*_ga*MTU5MjgzMzg4OS4xNzI1OTE3NjAy*_ga_ETKR49VB7Y*MTcyNTkxNzYwMS4xLjAuMTcyNTkxNzYwMS4wLjAuMA..')
        cy.title().should("eq","Selenium Grid Online | Run Selenium Test On Cloud")
        cy.wait(t)
        
        //consentimento da página
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()

        cy.get('.btn-group').find("[data-target='pagado']").should('contain','HyperExecute').click()
        cy.wait(t)
        cy.get('.btn-group').find("[data-target='pendiente']").should('contain','Selenium Testing').click()
        cy.wait(t)
        cy.get('.btn-group').find("[data-target='cancelado']").should('contain','Cypress Testing').click()
        cy.wait(t)
        cy.get('.btn-group').find("[data-target='all']").should('contain','All').click()
        cy.wait(t)
     });

     it('Find', () => {
        let t=1500
        cy.visit('https://www.lambdatest.com/selenium-playground/table-records-filter-demo?_gl=1*16z7hwc*_up*MQ..*_ga*MTU5MjgzMzg4OS4xNzI1OTE3NjAy*_ga_ETKR49VB7Y*MTcyNTkxNzYwMS4xLjAuMTcyNTkxNzYwMS4wLjAuMA..')
        cy.title().should("eq","Selenium Grid Online | Run Selenium Test On Cloud")
        cy.wait(t)
        
        //consentimento da página
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()

        //first para el primero
        cy.get('.btn-group').find("button").first().click()
        cy.wait(t)
        //last para el último
        cy.get('.btn-group').find("button").last().click()
        cy.wait(t)

      });

      it('NextAll', () => {
         let t=1500
         cy.visit('https://www.lambdatest.com/selenium-playground/table-records-filter-demo?_gl=1*16z7hwc*_up*MQ..*_ga*MTU5MjgzMzg4OS4xNzI1OTE3NjAy*_ga_ETKR49VB7Y*MTcyNTkxNzYwMS4xLjAuMTcyNTkxNzYwMS4wLjAuMA..')
         cy.title().should("eq","Selenium Grid Online | Run Selenium Test On Cloud")
         cy.wait(t)
         
         //consentimento da página
         cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()

         cy.get("[type='button']").should("contain","HyperExecute")
         cy.wait(t)
         cy.get("[type='button']").should("contain","HyperExecute").nextAll().should("have.length",3)
      });

      
      it('Parent', () => {
         let t=1500
         cy.visit('https://www.lambdatest.com/selenium-playground/table-records-filter-demo?_gl=1*16z7hwc*_up*MQ..*_ga*MTU5MjgzMzg4OS4xNzI1OTE3NjAy*_ga_ETKR49VB7Y*MTcyNTkxNzYwMS4xLjAuMTcyNTkxNzYwMS4wLjAuMA..')
         cy.title().should("eq","Selenium Grid Online | Run Selenium Test On Cloud")
         cy.wait(t)
         
         //consentimento da página
         cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()

         cy.get("[type='button']").parent().should("have.class","btn-group")
      });

      it('Reto de las tablas', () => {
         let t=1500
         cy.visit('https://www.lambdatest.com/selenium-playground/table-records-filter-demo?_gl=1*16z7hwc*_up*MQ..*_ga*MTU5MjgzMzg4OS4xNzI1OTE3NjAy*_ga_ETKR49VB7Y*MTcyNTkxNzYwMS4xLjAuMTcyNTkxNzYwMS4wLjAuMA..')
         cy.title().should("eq","Selenium Grid Online | Run Selenium Test On Cloud")
         cy.wait(t)
         
         //consentimento da página
         cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()

         //Reto dar el click y seleccionar todos los elementos. El codigo no funciona es meramente ilustrativo
         cy.get("[type='button']").eq(3).should("contain","All").click()
         cy.wait(t)

         //esta parte no tiene en la pagina web que son las check box
         cy.get("[type='checkbox']").check({force:true})
         cy.wait(t)         
      });


      it('Reto de las tablas con ciclo For', () => {
         let t=1500
         cy.visit('https://www.lambdatest.com/selenium-playground/table-records-filter-demo?_gl=1*16z7hwc*_up*MQ..*_ga*MTU5MjgzMzg4OS4xNzI1OTE3NjAy*_ga_ETKR49VB7Y*MTcyNTkxNzYwMS4xLjAuMTcyNTkxNzYwMS4wLjAuMA..')
         cy.title().should("eq","Selenium Grid Online | Run Selenium Test On Cloud")
         cy.wait(t)
         
         //consentimento da página
         cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()

         /* //Reto creado por la IA
         // Reto dar el click y seleccionar todos los elementos utilizando un ciclo For
         cy.get("[type='button']").eq(3).should("contain", "All").click()
         cy.wait(t)

         // Obtener todos los checkboxes y marcarlos usando un ciclo For
         cy.get("[type='checkbox']").then($checkboxes => {
             for (let i = 0; i < $checkboxes.length; i++) {
                 cy.wrap($checkboxes[i]).check({force: true})
             }
         })
         cy.wait(t)
         */

         //Reto creado por el profesor
         for(let x=0;x<=3;x++){
            cy.get("[type='button']").eq(x).click()
            cy.wait(t)
            cy.get("[type='checkbox']").check({force:true})
            cy.wait(t)
         }
      });

      it.only('Reto de las tablas con ciclo For y asserts', () => {
         let t=1500
         cy.visit('https://www.lambdatest.com/selenium-playground/table-records-filter-demo?_gl=1*16z7hwc*_up*MQ..*_ga*MTU5MjgzMzg4OS4xNzI1OTE3NjAy*_ga_ETKR49VB7Y*MTcyNTkxNzYwMS4xLjAuMTcyNTkxNzYwMS4wLjAuMA..')
         cy.title().should("eq","Selenium Grid Online | Run Selenium Test On Cloud")
         cy.wait(t)
         
         //consentimento da página
         cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()

         //Reto creado por el profesor
         for(let x=0;x<=3;x++){
            let nombreButton=""
            if(x==0){
               nombreButton="HyperExecute"
            }
            else if(x==1){
               nombreButton="Selenium Testing"
            }
            else if(x==2){
               nombreButton="Cypress Testing"
            }
            else if(x==3){
               nombreButton="All"
            }


            cy.get("[type='button']").eq(x).should("contain",nombreButton).click()
            cy.wait(t)
            cy.get("[type='checkbox']").check({force:true})
            cy.wait(t)
         }


      });










});