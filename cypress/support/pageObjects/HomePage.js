class HomePage
{

getNameEditBox(){
return cy.get(':nth-child(1) > .form-control');
}

getEmailEditBox(){

return cy.get('.form-group:nth-child(2) > .form-control');   

}
getPasswordEditBox(){

return cy.get('#exampleInputPassword1');    

}

getGenderDropdownField(){

return cy.get('#exampleFormControlSelect1');    

}

getCheckbox(){

return cy.get('#exampleCheck1');    

}

getEmploymentStatusEditBox(){

 return  cy.get('#inlineRadio1') ;   

}

getDateOfBirthEditBox(){

return cy.get('.form-group:nth-child(8) > .form-control');    

}

getSubmitButton(){

return cy.get('.btn');  

}

getTwoWayDataBindingSelectBox(){

return cy.get('.ng-untouched');   

}

getDisabledRadioButton(){

return  cy.get('#inlineRadio3');
}

getHomePageDetailsForm(){

return cy.get('.ng-dirty:nth-child(3)');    
}

getAlertText(){

return cy.get('.alert');    
}


getShopTab(){

return cy.get(':nth-child(2) > .nav-link');
}


}

export default HomePage;
