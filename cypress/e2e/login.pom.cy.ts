import { LoginPage } from "../Pages/LoginPage";
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

  it("Test con POM",()=>{

    const loginPage = new LoginPage()

    loginPage.typeUsername(user.username)
    loginPage.typePassword(user.password)
    loginPage.clickLoginButton()

  })

  it("Test con POM 2",()=>{

    const loginPage = new LoginPage()

   loginPage.loginStandardUser(user.username, user.password)

  })



})