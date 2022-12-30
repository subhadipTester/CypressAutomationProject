/// <reference types="Cypress" />
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from  "../../../../support/pageObjects/HomePage"
import ProductPage from "../../../../support/pageObjects/ProductPage"
import CheckoutPage from "../../../../support/pageObjects/CheckoutPage"
const homePage = new HomePage()
const productPage = new ProductPage()
const checkoutPage = new CheckoutPage()
let name
Given("User open Ecommerce Landing Page", ()=>
{
cy.visit(Cypress.env('url')+"/angularpractice/")

})

When("User add items to the Cart", function()
{
    homePage.getShopTab().click()
    cy.url().should('contains', 'https://rahulshettyacademy.com/angularpractice/shop')
    this.data.productName.forEach(function(element) {
        cy.selectProduct(element)
    })

    productPage.getCheckoutButton().click()
})

When("User validates the total prices", ()=>
{
    var sum=0
    cy.get("tr td:nth-child(4) strong").each(($el, index, $list) => {
      const amountString = $el.text()
      var amountText = amountString.split(" ")
      amountText = amountText[1].trim()
      sum = Number(sum)+Number(amountText)
       
    }).then(function(){

    cy.log(sum)    


    })
    cy.get("h3 strong").then(function(element)
    {
       const totalString = element.text()
       var totalText = totalString.split(" ")
       var total = totalText[1].trim()
       expect(Number(total)).to.equal(sum)

    })



})

Then("User select the country submit and Verify ThankYou message", ()=>
{
    checkoutPage.getSuccessFulCheckout().click()
    cy.get('#country').type("India")
    cy.get('.suggestions > ul > li > a').click()
    cy.get("label[for='checkbox2']").click({force: true})
    cy.get("input[value='Purchase']").click()
    cy.get('.alert').should("contain.text", "Thank you! Your order will be delivered in next few weeks :-)")
    cy.get('.alert').then(function(element)
    {
       const actualText = element.text()
       expect(actualText.includes("Success")).to.be.true 


    })





})

When("User fill the form details", function()
{
    homePage.getNameEditBox().type(this.data.name)
    homePage.getEmailEditBox().type(this.data.email)
    homePage.getPasswordEditBox().click()
    homePage.getPasswordEditBox().type(this.data.password)
    homePage.getCheckbox().click()
    homePage.getGenderDropdownField().select(this.data.gender)
    homePage.getEmploymentStatusEditBox().click()
    homePage.getDateOfBirthEditBox().type('1990-11-20');
    
})

Then("User validates forms behaviour", function()
{
    homePage.getNameEditBox().should("have.attr", "minlength", "2")
    homePage.getDisabledRadioButton().should("be.disabled")
    homePage.getSubmitButton().click();
    homePage.getHomePageDetailsForm().submit();
    homePage.getAlertText().then(function(headerTitle)
    {

        cy.log(headerTitle.text())

    })
    homePage.getAlertText().should('contain.text', "The Form has been submitted successfully!.")
    homePage.getTwoWayDataBindingSelectBox().then(function(footerTitle)
    {

        cy.log(footerTitle.text())

    })
    homePage.getTwoWayDataBindingSelectBox().should("have.value", this.data.name)

})


Then("User select the Shop page",()=>
{

    homePage.getShopTab().click()

})

When("User fill the form details using dataset", function(dataTable)
{    
    // [David Willis,subhadipsingh.referral@gmail.com,Anthem@456,Male]
    // name = dataTable.rawTable[1][0], email = dataTable.rawTable[1][1]
    name = dataTable.rawTable[1][0]
    homePage.getNameEditBox().type(dataTable.rawTable[1][0])
    homePage.getEmailEditBox().type(dataTable.rawTable[1][1])
    homePage.getPasswordEditBox().click()
    homePage.getPasswordEditBox().type(dataTable.rawTable[1][2])
    homePage.getCheckbox().click()
    homePage.getGenderDropdownField().select(dataTable.rawTable[1][3])
    homePage.getEmploymentStatusEditBox().click()
    homePage.getDateOfBirthEditBox().type('1990-11-20');

})

Then("User validates forms behaviour using dataset", function()
{
    homePage.getNameEditBox().should("have.attr", "minlength", "2")
    homePage.getDisabledRadioButton().should("be.disabled")
    homePage.getSubmitButton().click();
    homePage.getHomePageDetailsForm().submit();
    homePage.getAlertText().then(function(headerTitle)
    {

        cy.log(headerTitle.text())

    })
    homePage.getAlertText().should('contain.text', "The Form has been submitted successfully!.")
    homePage.getTwoWayDataBindingSelectBox().then(function(footerTitle)
    {

        cy.log(footerTitle.text())

    })
    homePage.getTwoWayDataBindingSelectBox().should("have.value", name)

})


