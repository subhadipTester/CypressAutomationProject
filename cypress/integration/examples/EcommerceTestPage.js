// <reference types="Cypress" />
const neatCSV = require('neat-csv')
let productName
describe('Ecommerce Page Validation', ()=> 
{
 
it('End To End Validation of Ecommerce Page', async ()=> {

cy.LoginAPI().then(function(){

cy.visit("https://rahulshettyacademy.com/client",{

onBeforeLoad: function(window)
{

    window.localStorage.setItem('token', Cypress.env('token')) 
}

})

})

cy.get(".card-body b").eq(1).then(function(ele)
{
  productName = ele.text()
  console.log(productName)
})

cy.get(".card-body button:last-of-type").eq(1).click();
cy.get("[routerlink*='cart']").click();
cy.contains("Checkout").click();
cy.get('.field > .text-validated').clear();
cy.get('.field > .text-validated').type('7892456723683456');
cy.get('.ddl:nth-child(2)').select("09").should("have.value", "09");
cy.get('.input:nth-child(3)').select("24").should("have.value", "24");
cy.get('.field:nth-child(2) > .input').click();
cy.get('.field:nth-child(2) > .input').type('789');
cy.get('.row:nth-child(3) .input').click();
cy.get('.row:nth-child(3) .input').type('Subhadip SinghaRoy');
cy.get('.user__name > .ng-untouched').clear();
cy.get('.user__name > .ng-untouched').type("subhadipautomation@mailinator.com");
cy.get("input[placeholder*='Select Country']").type("ind");
cy.get('.ta-results button').each(($e1, index, $list) => 
{
 if($e1.text()===" India")
{
 cy.wrap($e1).click()
}
})

cy.get(".action__submit").click({force: true});
cy.wait(4000);
cy.get(".order-summary button").click()

//path =C:\Users\ssingharoy\OneDrive\Documents\CypressAutomation\cypress\downloads\order-invoice_subhadipautomation.csv
cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_subhadipautomation.csv")
.then(async (text)=>
{

const csv =  await neatCSV(text)
console.log(csv);
const actualProductCSV = csv[0]["Product Name"]
expect(productName).to.equal(actualProductCSV)


})


})   
 
    
 
})
 