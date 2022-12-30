/// <reference types="Cypress" />
import HomePage from  "../../support/pageObjects/HomePage"
import ProductPage from "../../support/pageObjects/ProductPage"
import CheckoutPage from "../../support/pageObjects/CheckoutPage"
describe('ProtoCommerce Practice Page Test', () => {
    let userDetails
    before(function () {
        cy.fixture('example').then(function (data) {
        userDetails = data   
        })
    })
    it('Interacting with Webpage UI elements ', function () {
        const homePage = new HomePage()
        const productPage = new ProductPage()
        const checkoutPage = new CheckoutPage()
        cy.visit(Cypress.env('url')+"/angularpractice/")
        homePage.getNameEditBox().type(userDetails.name)
        homePage.getNameEditBox().should("have.attr", "minlength", "2")
        homePage.getEmailEditBox().type(userDetails.email)
        homePage.getPasswordEditBox().click()
        homePage.getPasswordEditBox().type(userDetails.password)
        homePage.getCheckbox().click()
        homePage.getGenderDropdownField().select(userDetails.gender)
        homePage.getEmploymentStatusEditBox().click()
        homePage.getDisabledRadioButton().should("be.disabled")
        homePage.getDateOfBirthEditBox().type('1990-11-20');
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
        homePage.getTwoWayDataBindingSelectBox().should("have.value", userDetails.name)
        homePage.getShopTab().click()
        cy.url().should('contains', 'https://rahulshettyacademy.com/angularpractice/shop')
        userDetails.productName.forEach(function(element) {
            cy.selectProduct(element)
        })

        productPage.getCheckoutButton().click()
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


  







})