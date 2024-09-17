/// <reference types="Cypress"/>
require('cypress-xpath')

describe('Nueva sección checkbox', () => {


    it('check uno', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
        cy.title().should("eq","OrangeHRM")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click().wait(1500)

        //checkbox
        cy.xpath("(//i[contains(@class,'oxd-icon bi-check oxd-checkbox-input-icon')])[2]").click().wait(1500)
        cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click()
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click()
        cy.xpath("(//i[contains(@class,'oxd-icon bi-check oxd-checkbox-input-icon')])[2]").should("not.be.checked")

    });
    


    it('check dos', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
        cy.title().should("eq","OrangeHRM")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()

        //checkbox
        cy.xpath("(//i[contains(@class,'oxd-icon bi-check oxd-checkbox-input-icon')])[2]").click()
    
    });

    it.only('Radios Button', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
        cy.title().should("eq","OrangeHRM")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()

        //checkbox
        cy.xpath("(//i[contains(@class,'oxd-icon bi-check oxd-checkbox-input-icon')])[2]").click()
    
    });




});