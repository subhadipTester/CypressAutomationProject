/// <reference types="Cypress" />

describe('My First Test', () => {
    
    it('Navigating to URL', () => {
      // navigating to url
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
      // searching ca in search box 
      cy.get('.search-keyword').type("ca")
      // element waiting time 5000 sec
      cy.wait(5000)
      // aliasing in cypress to reuse locators
      cy.get('.products').as("productslocator")
      // alternate way to find product length inside Products (Parent Child Chaining)
      cy.get('@productslocator').find('.product').should("have.length", 4)
      // selecting third element and clicking on Add to cart button
      cy.get('@productslocator').find('.product').eq('2').contains("ADD TO CART").click()
      // manually handling console.log 
      cy.get('@productslocator').find('.product').eq('1').contains("ADD TO CART").click().then(function()
      {
        console.log("carrot added in the cart")
      })
      // selecting one particular product with text "cashews" and adding to the list
      cy.get('@productslocator').find('.product').each(($el, index, $list) => {

       const vegetableNameText = $el.find("h4.product-name").text()
       if(vegetableNameText.includes('Cashews'))
       {
        cy.wrap($el).find("button[type='button']").click()
       }
       // Greencart logo capturing - solving async promises
       cy.get('.brand').then(function(logoTitle)
       
       {
        cy.log(logoTitle.text())
       })

       cy.get('.brand').should('have.text', "GREENKART")


      })










    })


  







})