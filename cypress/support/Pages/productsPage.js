export class ProductsPage {

    seleccionarProducto(producto){
        cy.get(`[value = "${producto}"]`).click();

    };

};