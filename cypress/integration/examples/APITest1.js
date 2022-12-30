/// <reference types="Cypress" />
 
describe('My First API TestSuite', function() 
{
 
it('My First API Testcase',function() {
 
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
 
    cy.intercept({
        method : 'GET',
        url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
    },
 
     {
         statusCode : 200,
         body : [{
            "book_name": "Learn Appium Automation with Java",
            "isbn": "RS218",
            "aisle": "111" }]
          
     }).as('bookretrievals')
     cy.get("button[class='btn btn-primary']").click()
     //length of the response array = rows of the table
     cy.wait('@bookretrievals').should(({request,response})=>
     {
         cy.get('tr').should('have.length',response.body.length+1)
      
     })
    cy.get('p').should("have.text","Oops only 1 Book available")
 
 
 
    
 
 
 
 
 
 
 
 
 
 
})
 
})