/// <reference types="Cypress"/>

require("cypress-xpath")
require('cypress-plugin-tab')

describe('Reto_02 Assets', () => {
    let tiempo=1500


    it('Reto Asserts', () => {
        cy.visit("https://play1.automationcamp.ir/forms.html")
        cy.title().should("eq","Form Interactions")

        cy.get('#validationCustom03').should('be.visible').and("have.class", "form-control").type('Madrid')
        cy.get('#validationCustom04').should('be.visible').and("have.class", "form-control").type('Madrid')
        cy.get('#validationCustom05').should('be.visible').and("have.class", "form-control").type('28815')
        cy.get('#invalidCheck').check().should('be.checked').then(()=>{
            cy.contains("[type='submit']", "Submit Form").click()
        })
    });


    it.only('Reto Asserts_02', () => {
        cy.visit("https://testsheepnz.github.io/BasicCalculator.html")
        cy.title().should("eq","Basic Calculator")
        cy.wait(tiempo)


        let a=60
        let b=80

        cy.get('[data-testid="number1Field"]').should("be.visible").and("have.class", "element text medium").type(a)
        cy.get('[data-testid="number2Field"]').should("be.visible").and("have.class", "element text medium").type(b)

        // tentei colocar el assert (.contains), pero no he podido porque el botón de la página no contiene "contenido"
        //cy.contains("[type='button+']", "Calculate").click()

        cy.get('[data-testid="calculateButton"]').click()

       
       //código del chat GPT ya que la pagina no me pasaba el valor de la operacion en "log"
        cy.get('#numberAnswerField').invoke('val') // Invocar la función 'val' para obtener el valor del campo
        .then((value) => {
            // Aquí puedes hacer algo con el valor, como imprimirlo o verificarlo
            cy.log('El valor del campo es: ' + value)
            
            if (value==a+b){
                cy.log('Es correcta')

            }else{
                cy.log('el valor es incorrecto')
            } 

            if(value > 50){

                a=a-10
                b=b-10
                cy.get('[data-testid="number1Field"]').should("be.visible").and("have.class", "element text medium").clear().type(a)
                cy.get('[data-testid="number1Field"]').invoke('attr','style','color:red')
                cy.wait(tiempo)
                cy.get('[data-testid="number2Field"]').should("be.visible").and("have.class", "element text medium").clear().type(b)
                cy.wait(tiempo)
                cy.get('[data-testid="calculateButton"]').click()
            }else{

                a=a+5
                b=b+5
                cy.get('[data-testid="number1Field"]').should("be.visible").and("have.class", "element text medium").clear().type(a)
                cy.wait(tiempo)
                cy.get('[data-testid="number2Field"]').should("be.visible").and("have.class", "element text medium").clear().type(b)
                cy.wait(tiempo)
                cy.get('[data-testid="calculateButton"]').click()
            }
            

          
        });
       


        // cy.get('#numberAnswerField').then((e)=>{

        //     let r=a+b
        //     cy.log("el valor de r: "+r)
        //     cy.log(e.text())
        //     let res=e.text()
        //     if(r==res){
        //         cy.log("Son iguales")
        //     }else{
        //         cy.log("el resultado es incorrecto") //me sale incorrecto porque no printa en la pantalla el resultado
        //     }
        // })

        

        // cy.get('#numberAnswerField').invoke('val').should('be.visible').then((e)=>{
                    // let r=a+b
                    // cy.log("el valor de r: "+r)
                    // cy.log(e.text())
                    // let res=e.text()

                    // if(r==res){
                    //     cy.log("Son iguales")
                    // }else{
                    //     cy.log("el resultado es incorrecto") //me sale incorrecto porque no printa en la pantalla el resultado
                    // }


                // })

    })


    
});