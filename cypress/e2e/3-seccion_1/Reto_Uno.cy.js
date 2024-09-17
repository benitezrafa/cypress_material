/// <reference types="Cypress"/>

describe('Primer Reto', () => {

    it('', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should("eq", "OrangeHRM")

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123")
        cy.get('.oxd-button').click()

        
        //Buscando usuário

        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').should("be.visible").type("Amelia")
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()
        cy.get('.oxd-button--ghost').click()
        cy.wait(1500)
   

        // Agregando nuevo usuário
        cy.get('.orangehrm-header-container > .oxd-button').should("be.visible").click()
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').should("be.visible").type("Rafa").tab()
        .type("Beni").tab()
        .type("Sil").tab()
        .type("06524")
        cy.get('.oxd-button--secondary').should("be.visible").should("be.enabled").click()


        //Buscando nuevo usuário

        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').should("be.visible").type("Rafa")
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()

        //Editar campo
        cy.get(".oxd-icon-button oxd-table-cell-action-space").should("be.visible").click()



    });
    
});