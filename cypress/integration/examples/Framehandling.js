/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
 
describe('Frame handling using Cypress', function() 
{
 
it('Cypress frame handling example',function() {

 cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 cy.frameLoaded("#courses-iframe")
 cy.iframe().find("a[href*='mentorship']").eq(1).click({force: true})
 cy.iframe().find("h1[class*='pricing-title text-white ls-1']").should("have.length",2)

 




})


 






})
 
 
