/// <reference types="Cypress" />
 
describe('JWT Session Token', function() 
{
 
it('Logged in through local storage',function() {

cy.LoginAPI().then(function(){

cy.visit("https://rahulshettyacademy.com/client",{

onBeforeLoad: function(window)
{

    window.localStorage.setItem('token', Cypress.env('token')) 
}

})

})

})   
 
    
 
})
 