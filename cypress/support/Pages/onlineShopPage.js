export class OnlineShopPage {
    constructor(){
        this.onlineShopButton = "#onlineshoplink";
    }

    presionarOnlineShopButton(){
        cy.get(this.onlineShopButton).click();
    };
}