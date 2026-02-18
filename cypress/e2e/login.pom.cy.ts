import { LoginPage } from "../Pages/LoginPage";


    let user: any 
    beforeEach(() => {

          cy.fixture('user').then((data)=>{
          user = data
     });

     cy.visit('https://www.saucedemo.com/');
    });

  it.only("Test con POM",()=>{

    const loginPage = new LoginPage()

    loginPage.typeUsername(user.username)
    loginPage.typePassword(user.password)
    loginPage.clickLoginButton()
    cy.url().should('include', '/inventory.html');

  })

  it("Test con POM 2",()=>{

    const loginPage = new LoginPage()

   loginPage.loginStandardUser(user.username, user.password)
   cy.url().should('include', '/inventory.html');

  })



