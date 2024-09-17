class proyectoUno_PO {

    visitHome() {
        let t=1500
        beforeEach(() => {
            cy.visit('https://www.lambdatest.com/selenium-playground/input-form-demo?_gl=1*ixf7yt*_up*MQ..*_ga*OTc4NjU0MTcxLjE3MjY0MTY4OTA.*_ga_ETKR49VB7Y*MTcyNjQxNjg5MC4xLjAuMTcyNjQxNjg5MC4wLjAuMA..')
            cy.title().should("eq", "Selenium Grid Online | Run Selenium Test On Cloud")
            cy.wait(t)

            //validacion cookies de la pagina
            cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()
        })

        after(() => {
            cy.get('.bg-lambda-900').click()
        })
    }

    SeccionUno(name, email, password, company, website){
        cy.get('#name').clear().should('be.visible').type(name)
        cy.get('#inputEmail4').clear().should('be.visible').type(email)
        cy.get('#inputPassword4').clear().should('be.visible').type(password)
        cy.get('#company').clear().should('be.visible').type(company)
        cy.get('#websitename').clear().should('be.visible').type(website)
    }    

    SeccionDos(country, city, address1){
        cy.get(':nth-child(3) > .pr-20 > .w-full').select(country)
        cy.get('#inputCity').clear().should('be.visible').type(city)
        cy.get('#inputAddress1').clear().should('be.visible').type(address1)
    }

    SeccionTres(address2, state, zip,){
        cy.get('#inputAddress2').clear().should('be.visible').type(address2)
        cy.get('#inputState').clear().should('be.visible').type(state)
        cy.get('#inputZip').clear().should('be.visible').type(zip)
    }

}//final

export default proyectoUno_PO
