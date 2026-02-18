

export const loginLocators = {
  username: "#user-name",
  password: "#password",
  loginButton: "#login-button",
  errorMessage: '[data-test="error"]'
}

export class LoginPage{
typeUsername(username:string){
  cy.get(loginLocators.username).type(username)
}

typePassword(password:string){
  cy.get(loginLocators.password).type(password)
}

clickLoginButton(){
  cy.get(loginLocators.loginButton).click()
}

getErrorMessage(){
  return cy.get(loginLocators.errorMessage)
}

loginStandardUser(username:string, password:string){
  this.typeUsername(username)
  this.typePassword(password)
  this.clickLoginButton()
}


}