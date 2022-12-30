/// <reference types="Cypress" />
 
describe('Automation Practice Page frame validation', function() 
{
 
it('Demo Testcases for Child frame and window handling',function() {
 

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#opentab').then(function(window)
{

const url = window.prop("href")
cy.visit(url)

})


})


 






}  )
 
 
