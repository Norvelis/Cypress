
export class LoginPage{

private username: "#user-name"
private password: "#password"
private loginButton: "#login-button"
private errorMessage: '[data-test="error"]'

typeUsername(username:string){
  cy.get(this.username).type(username)
}

typePassword(password:string){
  cy.get(this.password).type(password)
}

clickLoginButton(){
  cy.get(this.loginButton).click()
}

getErrorMessage(){
  return cy.get(this.errorMessage)
}

loginStandardUser(username:string, password:string){
  this.typeUsername(username)
  this.typePassword(password)
  this.clickLoginButton()
}


}