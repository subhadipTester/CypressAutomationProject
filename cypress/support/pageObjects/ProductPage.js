class ProductPage{

getCheckoutButton(){

return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');
}

getproductTitle(){

return cy.get('h4.card-title');    

}



}

export default ProductPage;