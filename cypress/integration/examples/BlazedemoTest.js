/// <reference types="Cypress" />
describe('Blazedemo UI Control Test', function() {
    
    it('Blazedemo page interaction', function() {

        
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
        cy.get('tr:nth-child(2) .btn').trigger("click")
        cy.get('tr:nth-child(2) > form').submit()
        cy.wait(5000)
        cy.url().should('contains', 'https://blazedemo.com/purchase.php');
        cy.get('#inputName').click();
        cy.get('#inputName').type('James');
        cy.get('#address').type('Hiddlestone');
        cy.get('#city').click();
        cy.get('#city').type('Montecarlo');
        cy.get('#state').click();
        cy.get('#state').type('Alabama');
        cy.get('#zipCode').click();
        cy.get('#zipCode').type('98765');
        cy.get('#cardType').select("amex").should("have.value", "amex")
        cy.get('#creditCardNumber').click();
        cy.get('#creditCardNumber').type('987654321234');
        cy.get('#creditCardMonth').click();
        cy.get('#creditCardMonth').clear()
        cy.get('#creditCardMonth').type('12')
        cy.get('#creditCardYear').click()
        cy.get('#creditCardYear').clear()
        cy.get('#creditCardYear').type('2024')
        cy.get('#nameOnCard').click();
        cy.get('#nameOnCard').type('Tom Hiddlestone')
        cy.get('#rememberMe').click()
        cy.get('.btn-primary').trigger("click")
        cy.get('form').submit();
        cy.get('h1').then(function(headerTitle)
        {

            cy.log(headerTitle.text())

        })
        cy.get('h1').should('have.text', "Thank you for your purchase today!")
        cy.url().should('contains', 'https://blazedemo.com/confirmation.php');
           

           
      
    })


  







})
