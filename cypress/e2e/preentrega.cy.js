 /// <reference types="cypress" />
 //importar las paginas
import {LoginPage} from "../support/Pages/loginPage"
import {OnlineShopPage } from "../support/Pages/onlineShopPage"
import {ProductsPage } from "../support/Pages/productsPage";
import { ShoppingCartPage } from "../support/Pages/shoppingCartPage";
 
 describe("preentrega", () =>{

    //inicializa el fixture
    let credenciales;
    let productos;
   
    before("archivo credenciales JSON", () => {
        cy.fixture('credenciales').then(datac => {
        credenciales = datac;
        })
    })

    before("archivo productos JSON", () => {
        cy.fixture('productos').then(datap => {
        productos = datap;
        })
    })

    //generar una instancia de la clase correspondiente
    const loginPage = new LoginPage();
    const onlineShopPage = new OnlineShopPage();
    const productsPage = new ProductsPage();
    const shoppingCartPage = new ShoppingCartPage();

    it('preentrega', () =>{
        cy.visit('');
        cy.get("#registertoggle").dblclick();
        loginPage.escribirUsuario(credenciales.username);
        loginPage.escribirPassword(credenciales.password);
        loginPage.presionarLoginButton();
        onlineShopPage.presionarOnlineShopButton();
        productsPage.seleccionarProducto(productos.producto1.nombre); 
        cy.get('#closeModal').click();
        productsPage.seleccionarProducto(productos.producto2.nombre);
        cy.get('#closeModal').click();
        cy.get('#goShoppingCart').click();
        shoppingCartPage.verificarProducto(productos.producto1.nombre).should('have.text',productos.producto1.nombre)
        shoppingCartPage.verificarProducto(productos.producto1.nombre).siblings("#productPrice").should("contain",productos.producto1.precio)     
        shoppingCartPage.verificarProducto(productos.producto2.nombre).should('have.text',productos.producto2.nombre)     
        shoppingCartPage.verificarProducto(productos.producto2.nombre).siblings("#productPrice").should("contain",productos.producto2.precio)
        cy.get('.css-n1d5pa > .chakra-button').click()
        let tot = productos.producto1.precio + productos.producto2.precio
        cy.get('#price > b').should('have.text',tot)
    })
})

