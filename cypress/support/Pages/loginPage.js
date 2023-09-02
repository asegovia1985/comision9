export class LoginPage {

    constructor(){
        this.userInput = '#user';
        this.passwordInput = '#pass';
        this.submitForm = '#submitForm';
    }

    escribirUsuario(usuario){
        cy.get(this.userInput).type(usuario);
    };

    escribirPassword(password){
        cy.get(this.passwordInput).type(password);
    };

    presionarLoginButton(){
        cy.get(this.submitForm).click();
    };    
};