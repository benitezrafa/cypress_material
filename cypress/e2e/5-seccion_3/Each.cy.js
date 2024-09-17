/// <reference types='Cypress'/>

require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
import 'cypress-file-upload'

describe('Bucles For y Each', () => {

    it('For uno', () => {
       
        for(let i=1; i<1000; i=i+10){
            cy.log("Nuemro: "+ i)
        }

    });

    it('For dos', () => {
       
        for(let i=1; i<=10; i++){
            let t=5
            cy.log(t + " x " + i + "=" + t*i)
        }

    });

    it('Each uno', () => {
        cy.visit('https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html')
        cy.title().should("eq","Jackets - Tops - Women")

        cy.get('.product-item-link').each(($el,index,$list)=>{

            let ferramentas=$el.text()
            cy.log(ferramentas)
        })

        
    });

    it('Each dos', () => {
        cy.visit('https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html')
        cy.title().should("eq","Jackets - Tops - Women")

        cy.get('.product-item-link').each(($el,index,$list)=>{

            let jackets=$el.text()

            //con ".includes" pudes buscar por el nombre completo o parte del nombre del obejcto que estes buscando
            if(jackets.includes("Ingrid Running Jacket")){
                
                //".wrap" recoje toda la lista en each "$el" y seleciona exactamente lo que estamos pediendo
                cy.wrap($el).click()
            }
            
        })

        
    });

    it('Reto For, Each_personal', () => {
        cy.visit('https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html')
        cy.title().should("eq","Jackets - Tops - Women")

        cy.get('.product-item-link').each(($el,index,$list)=>{

            let jackets=$el.text()

            //con ".includes" pudes buscar por el nombre completo o parte del nombre del obejcto que estes buscando
            if(jackets.includes("Ingrid Running Jacket")){
                
                //".wrap" recoje toda la lista en each "$el" y seleciona exactamente lo que estamos pediendo
                cy.wrap($el).click().then(()=>{

                    cy.get('#option-label-size-143-item-167').click()
                    cy.get('#option-label-color-93-item-59').click()
                    cy.get('#qty').clear().type('10').then(()=>{
                        cy.get('#product-addtocart-button').click()
                    }).then(()=>{

                        //entrando en otro producto y añadiendo en el carrito
                        cy.contains("Women").trigger('mouseover')
                        cy.contains("Tops").trigger('mouseover')
                        cy.contains("Tees").click().then(()=>{
                            cy.get('.product-item-link').each(($el,index,$list)=>{

                                let tee=$el.text()
                                if(tee.includes("Tiffany Fitness Tee")){
                                    cy.wrap($el).click().then(()=>{

                                        cy.get('#option-label-size-143-item-167').click()
                                        cy.get('#option-label-color-93-item-50').click()
                                        cy.get('#qty').clear().type(3).then(()=>{
                                            cy.get('#product-addtocart-button').click().then(()=>{
                                                cy.get('.showcart').should('be.visible').click().then(()=>{
                                                    cy.contains('View and Edit Cart').click()
                                                })
                                                
                                            })
                                            
                                        })

                                    })

                                }

                            })
                        })
                    })
                    
                })
            }

            
            
        })

        
    });

    it.only('Reto For, Each_personal', () => {
        cy.visit('https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html')
        cy.title().should("eq","Jackets - Tops - Women")
        let t=1500
        cy.wait(t)

        for(let x=0; x<=3; x++){
            cy.get('.product-item-link').eq(x).click()
            cy.wait(t)
            cy.get('#qty').should('be.visible').clear().type('5')
            cy.wait(t)

            // Seleccionar todas las opciones de talla
            cy.get('.swatch-option.text').each(($option) => {
                // Verificar que cada opción tenga el atributo "aria-checked" en "false"
                cy.wrap($option).should('have.attr', 'aria-checked', 'false');
            
                // Hacer clic en la opción de talla "M"
                if ($option.text() === 'M') {
                cy.wrap($option).click();
                cy.wrap($option).should('have.attr', 'aria-checked', 'true').then(()=>{
                    //agregar al carrito de compra
                    cy.get('#product-addtocart-button').click()
                })
                }

                
                
            });
            
            

        }



    })


});