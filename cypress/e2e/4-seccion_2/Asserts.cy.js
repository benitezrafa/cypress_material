/// <reference types="Cypress"/>

require('cypress-xpath')
require('cypress-plugin-tab')

describe('Asserts', () => {


    it('Assert Contains', () => {
        cy.visit("https://opencart.abstracta.us/")
        cy.title().should("eq", "Your Store")
        cy.wait(1500)

        cy.get(".navbar-ex1-collapse").contains("Laptops & Notebooks").click()
              
    });


    it('Assert find, eq', () => {
        cy.visit("https://opencart.abstracta.us/")
        cy.title().should("eq", "Your Store")
        cy.wait(1000)

        //cy.get(".product-thumb").click() //Manera equivopcada de hacer salta error con multiples elementos encontrados
        //cy.get(".product-thumb").first().click() //Una manera de arreglarlo, pero no es la más eficaz

        cy.get(".product-thumb").find(".button-group").eq(0).click()
              
    });


    it('Assert text', () => {
        cy.visit("https://www.demoblaze.com/")
        cy.title().should("eq", "STORE")
        cy.wait(1000)

        cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').should("be.visible").click().then(()=>{
            cy.wait(1000)
            cy.get('.active > .nav-link').click().then(()=>{
                cy.wait(1000)
                cy.get(':nth-child(4) > .card > .card-block > .card-title > .hrefch').click()
            })
        })

        cy.get('#more-information').then((a)=>{

            //cy.log(a.text())
            let estado=a.text()
            cy.log(estado)

            if(estado=="Product description"){
                cy.log("El movil sale en pantalla")
            }
        })

        // validación del precio

        cy.get('.price-container').should("be.visible").then((e)=>{
            //cy.log(e.text())
            let precio=e.text()
            cy.log(precio)
            precio=precio.slice(1,4)
            cy.log(precio)

            if(precio > 300){
                cy.log("El telefono sale de nuestro presupuesto")
                cy.get('.active > .nav-link').click()
                cy.wait(1500)
            }else{
                cy.log("El telefono está dentro de nuestro presupuesto")
                cy.get('.col-sm-12 > .btn').should("be.visible").click()
            }
        })
              
    });


    /* //fundi meu cérebro com esse problema, o pop up da data, como adicionar a data nessa página
    it('Assert contains', () => {
        cy.visit("https://commitquality.com/")
        cy.title().should("eq", "CommitQuality - Test Automation Demo")
        //cy.wait(1500)

        //add information

        cy.get('[data-testid="add-a-product-button"]').should('be.visible').click().then(()=>{
            cy.get('[data-testid="product-textbox"]').type("Vibrator 2000")
            cy.get('[data-testid="price-textbox"]').type('50').tab()
            .type('30-05-2000')
            //cy.get('[data-testid="submit-form"]').should('be.visible').click()  
        })  
    })
    */


    //este ejercicio no funciona, pero está aqui reflejado para poder seguir adelante con el curso, la página da error a la hora de añadir el nombre 
    it('Assert contain.text y have.text', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "DEMOQA")

        cy.get('#userName').type('rodrigo')
        cy.get('#userEmail').type('rodrigo@gmail.com')
        cy.get('#submit').click()

        cy.get("#name").should("have.text", "rodrigo")
        cy.get("#name").should("contain.text", "rodrigo")
    })



    it('Assert have.text', () => {
        cy.visit("https://computer-database.gatling.io/computers")
        cy.title().should("eq", "Computers database")
        cy.get('#add').click()

        //add info a la página
        cy.get('#name').type('vibrador').tab()
        .type('30/05/2000').tab().type('31/05/2000')
        cy.get('#company').select('IBM')
        cy.get('#name').should('have.value', 'vibrador').then(()=>{
            cy.get('.primary').should('be.visible').click()
        })

    })


    it('Assert have.class', () => {
        cy.visit("https://play1.automationcamp.ir/forms.html?")
        cy.title().should("eq", "Form Interactions")

        cy.get('#exp').should('be.visible').should('have.class', 'form-control form-control-sm').then(()=>{
            cy.get('#exp').type('8')
        })
        
    })

    it('Assert have.class y la funcion and', () => {
        cy.visit("https://play1.automationcamp.ir/forms.html?")
        cy.title().should("eq", "Form Interactions")

        cy.get('#exp').should('be.visible').and('have.class', 'form-control form-control-sm').then(()=>{
            cy.get('#exp').type('8')
        }) 
    })

    it('Assert not.have.class', () => {
        cy.visit("https://play1.automationcamp.ir/forms.html?")
        cy.title().should("eq", "Form Interactions")

        cy.get('#exp').should('be.visible').and('not.have.class', 'form-control form-control-sm2').then(()=>{
            cy.get('#exp').type('8')
        }) 
    })


    it('Assert length', () => {
        cy.visit("https://applitools.com/blog/advanced-tools-for-testing-tables/")
        cy.title().should("eq", "Advanced Tools for Testing Tables - Automated Visual Testing | Applitools")

        cy.get('.row-hover >tr >td').should('have.length', 40).and('have.class', 'column-3').then(()=>{
           
            cy.log('Este es el resultado que necesito')
        })
    })

    it('Assert length anda css', () => {
        cy.visit("https://applitools.com/blog/advanced-tools-for-testing-tables/")
        cy.title().should("eq", "Advanced Tools for Testing Tables - Automated Visual Testing | Applitools")

        cy.get('.row-hover >tr >td').should('have.length', 40).and('have.css', 'box-sizing', 'border-box').then(()=>{
           
            cy.log('Este es el resultado que necesito')
        })
    })





    //el ejercicio no funciona, la página no acepta los valores del botón
    it.only('Contains', () => {
        let tiempo=1500

        cy.visit("https://testsheepnz.github.io/BasicCalculator.html")
        cy.title().should("eq", "Basic Calculator")
        cy.wait(tiempo)

        //Eliminar ventana
        cy.get('[data-testid="number1Field"]').should('be.visible').type('10')
        cy.get('[data-testid="number2Field"]').type('20')
        cy.get('[data-testid="selectOperationDropdown"]').select('Multiply')

        cy.contains("[type='button']", "Calculate").should('be.visible').click({force:true})
        
    })



});