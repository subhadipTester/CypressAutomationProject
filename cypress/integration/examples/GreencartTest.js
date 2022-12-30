/// <reference types="Cypress" />

describe('Greencart Practice Page Test', () => {
    
    it('Interacting with Simple Page elements ', () => {
      // navigating to url
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
      // searching ca in search box 
      cy.get('.search-keyword').type("ca")
      // element waiting time 5000 sec
      cy.wait(2000)
      // aliasing in cypress to reuse locators
      cy.get('.products').as("productslocator")
      // selecting one particular product with text "cashews" and adding to the list
      cy.get('@productslocator').find('.product').each(($el, index, $list) => {

       const vegetableNameText = $el.find("h4.product-name").text()
       if(vegetableNameText.includes('Cashews'))
       {
        cy.wrap($el).find("button[type='button']").click()
       }
       

      })

      cy.get('.cart-icon > img').click()
      cy.contains("PROCEED TO CHECKOUT").click()
      cy.contains("Place Order").click()
      cy.get('select').select('India').should('have.value','India')
      cy.get('.chkAgree').check().should('be.checked')
      cy.contains("Proceed").click()












    })


  







})