/// <reference types="Cypress"/>

describe('Opiciones de click', () => {


    it('Click Sencillo', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should("eq", 'OrangeHRM')
        cy.wait(2000)
        cy.get('.orangehrm-login-logo > img').should("be.visible")
        cy.wait(2000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").should("be.enabled").type("Admin")
        cy.wait(2000)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").should("be.enabled").type("admin123")
        cy.wait(2000)
        cy.get('.oxd-button').should("be.visible").should("be.enabled").click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click()
        cy.wait(2000)
        cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').should("be.visible").click()

    });


    it('Click Force_true', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should("eq", 'OrangeHRM')
        cy.wait(2000)
        cy.get('.orangehrm-login-logo > img').should("be.visible")
        cy.wait(2000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").should("be.enabled").type("Admin")
        cy.wait(2000)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").should("be.enabled").type("admin123")
        cy.wait(2000)
        cy.get('.oxd-button').should("be.visible").should("be.enabled").click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click()
        cy.wait(2000)
        cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').should("be.visible").click({force: true})

    });

    
    it.only('Click por cordenadas (X,Y)', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should("eq", 'OrangeHRM')
        cy.wait(1000)
        cy.get('.orangehrm-login-logo > img').should("be.visible")
        cy.wait(1000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").should("be.enabled").type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").should("be.enabled").type("admin123")
        cy.wait(1000)
        cy.get('.oxd-button').should("be.visible").should("be.enabled").click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click()
        cy.wait(1000)
        cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').should("be.visible").click({force: true})
        cy.wait(1000)
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("be.visible").click(50,5)
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("be.visible").click(70,5)

    });
});