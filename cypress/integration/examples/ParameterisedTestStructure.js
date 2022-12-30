/// <reference types="Cypress" />

describe('ProtoCommerce Practice Page Test', () => {
    let userDetails
    before(function () {
        
        cy.fixture('example').then(function (data) {
        userDetails = data   
        })
    })
    it('Interacting with Webpage UI elements ', function () {

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(1) > .form-control').type(userDetails.name)
        cy.get(':nth-child(1) > .form-control').should("have.attr", "minlength", "2")
        cy.get('.form-group:nth-child(2) > .form-control').type(userDetails.email)
        cy.get('#exampleInputPassword1').click()
        cy.get('#exampleInputPassword1').type(userDetails.password)
        cy.get('#exampleCheck1').click()
        cy.get('#exampleFormControlSelect1').select(userDetails.gender)
        cy.get('#inlineRadio1').click()
        cy.get('#inlineRadio3').should("be.disabled")
        cy.get('.form-group:nth-child(8) > .form-control').type('1990-11-20');
        cy.get('.btn').click();
        cy.get('.ng-dirty:nth-child(3)').submit(); 
        cy.get('.alert').then(function(headerTitle)
        {

            cy.log(headerTitle.text())

        })
        cy.get('.alert').should('contain.text', "The Form has been submitted successfully!.") 
        cy.get('.ng-untouched').then(function(footerTitle)
        {

            cy.log(footerTitle.text())

        })
        cy.get('.ng-untouched').should("contain.value", userDetails.name)
        cy.get('.ng-untouched').should("have.value", userDetails.name)
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('h4.card-title').as("productslocator")
        cy.get('@productslocator').each(($el, index, $list) => {

            const productText = $el.text()
            if(productText.includes('Blackberry'))
            {
             cy.get('button.btn.btn-info').eq(index).click()
            }
            
     
           })
     
                  
      
      



    })


  







})