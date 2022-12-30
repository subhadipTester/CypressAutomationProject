/// <reference types="Cypress" />
 
describe('My First API TestSuite', function() 
{
 
it('My Third API Testcase for Method Validation',function() {

cy.request("POST", "http://216.10.245.166/Library/Addbook.php", {

"name":"Learn Appium Automation with Java",
"isbn":"ISBN2022X9230",
"aisle":"250",
"author":"Timothy Chalamet"
}).then(function(response)
{
expect(response.body).to.have.property("Msg","successfully added");
expect(response.status).to.eq(200);

})   
 
    
 
})
 
})