/// <reference types="cypress" /> 
import { contains } from "cypress/types/jquery";
import { LoginLocators } from "../Pages/LoginPage" 

    let user: any 
    beforeEach(() => {
     cy.fixture('user').then((data)=>{
        user = data
     });
     cy.visit('https://www.saucedemo.com/');
    });

describe('Login', ()=>{

    it('Login con usuario valido', ()=> { 
        cy.get(LoginLocators.username).type(user.username); 
        cy.get(LoginLocators.password).type(user.password); 
        cy.get(LoginLocators.loginButton).click();
        cy.url().should('include', '/inventory.html');

    })

    it.only('Login con usuario bloqueado', ()=> {
        cy.get(LoginLocators.username).type(user.invalidUser);
        cy.get(LoginLocators.password).type(user.password); 
        cy.get(LoginLocators.loginButton).click();
        cy.get(LoginLocators.errorMessage).should('be.visible').and('contain.text', 'this user has been locked out')

    })

})