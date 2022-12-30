/// <reference types="Cypress" />
 
describe('Web Table Exmaple', function() 
{
 
it('Webtable Automation step',function() {
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
 
    const text=$e1.text()
    if(text.includes("Python"))
    {
 
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
        {
         const priceText=  price.text()
         expect(priceText).to.equal('25')
        })
    }

    if(text.includes("Appium"))
    {
 
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
        {
         const priceText=  price.text()
         expect(priceText).to.equal('30')
        })
    }
 
})
 
 
})
 
 
})

describe('Blazedemo WebTable Exmaple', function() 
{
 
it('Blazedemo webatable Automation step',function() {
 
    const url = "https://blazedemo.com/"
    cy.visit(url, { headers: { "Accept-Encoding": "gzip, deflate" } });
    cy.get("select[name='fromPort']").select("Paris").should("have.value","Paris")
    cy.get("select[name='toPort']").select("Rome").should("have.value","Rome")
    cy.get("input[value='Find Flights']").trigger("click")
    cy.get('form').submit();
    cy.wait(5000)
    cy.url().should('contains', 'https://blazedemo.com/reserve.php');
    cy.get('h3').then(function(logoTitle)
   
     {
         cy.log(logoTitle.text())
      })

    cy.get('h3').should('have.text', "Flights from Paris to Rome: ")
 
    cy.get('tr td:nth-child(4)').each(($e1, index, $list) => {
 
       const FlightNameText=$e1.text()
       if(FlightNameText.includes("United Airlines"))
      {
 
        cy.get("tr td:nth-child(4)").eq(index).prev().then(function(flightCode)
        {
         const flightCodeText=  flightCode.text()
         expect(flightCodeText).to.equal('234')
        })

        cy.contains('United Airlines').click()
        cy.get('tr:nth-child(2) > form').submit()
        cy.wait(5000)
        cy.url().should('contains', 'https://blazedemo.com/purchase.php');
    }

    
 
})
 
 
})
 
 
})
 
 
 
 
 
 
 
 
 
 
 
 