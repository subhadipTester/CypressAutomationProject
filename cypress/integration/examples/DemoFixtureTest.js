/// <reference types="Cypress" />

describe('Login to OrangeHRM website', function () {
    before(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.fixture('testdata').then(function (testdata) {
            this.testdata = testdata
        })
    })

    it('Validate successful Login', function () {
        cy.get('input[placeholder="Username"]').type(this.testdata.username)
        cy.get('input[placeholder="Password"]').type(this.testdata.password)
        cy.get('button[type="submit"]').click()
    })
})
