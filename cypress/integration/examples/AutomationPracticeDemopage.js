/// <reference types="Cypress" />
 
describe('Automation Practice Same Page validation', function() 
{
 
it('Demo Testcases for Web Controls element test',function() {
 

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get("#name").type("subhadip")
cy.get("#alertbtn").click()
cy.get("#confirmbtn").click()
//window:alert
cy.on('window:alert',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello subhadip, share this practice page and share your knowledge')
})


cy.on('window:confirm',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})

cy.get('#opentab').invoke('removeAttr','target').click()
 
cy.url().should('include','https://www.rahulshettyacademy.com/')
 
cy.go('back')

cy.get("div.mouse-hover-content").invoke("show")
cy.contains("Top").click({ force: true })
cy.url().should("contain", "top")





}  )
 
 
 
}  )