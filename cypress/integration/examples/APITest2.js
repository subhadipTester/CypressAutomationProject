/// <reference types="Cypress" />
 
describe('My First API TestSuite', function() 
{
 
it('My Second API Testcase',function() {
 
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
 
    cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
    (req)=>
    {
    req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
 
    req.continue((res)=>
    {
       expect(res.statusCode).to.equal(404)
    })
 }
 ).as("dummyUrl")
 
 cy.get("button[class='btn btn-primary']").click()
 cy.wait('@dummyUrl')
 
})
 
})