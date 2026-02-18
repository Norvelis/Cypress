import { LoginPage } from "../Pages/LoginPage";


    let user: any 
    beforeEach(() => {

          cy.fixture('user').then((data)=>{
          user = data
     });

     cy.visit('https://www.saucedemo.com/');
    });

  it("Test con POM",()=>{

    const loginPage = new LoginPage()

    loginPage.typeUsername(user.username)
    loginPage.typePassword(user.password)
    loginPage.clickLoginButton()
    cy.url().should('include', '/inventory.html');

  })

  it.only("Login con usuario válido",()=>{

    const loginPage = new LoginPage()

    loginPage.login(user.username, user.password)
    loginPage.getUrlSuccess()
  
  })

  it("Login con usuario bloqueado",()=>{

    const loginPage = new LoginPage()

    loginPage.login(user.username, user.invalidUser)
    loginPage.getErrorMessage()
  })



