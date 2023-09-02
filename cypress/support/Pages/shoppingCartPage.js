export class ShoppingCartPage {

    verificarProducto(producto){
       return cy.get(`[name = "${producto}"]`);
    };
};