/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
             // .first()
             // .click()
             // .eq(3)
             .contains('Arcadio Gym Short')
             .click()

    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 2
        cy.get('[class="product-block grid"]')
            .contains('Arcadio Gym Short').click()
        cy.get('.button-variable-item-34').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 2)
        cy.get('.woocommerce-message').should('contain', quantidade + 'foram adicionados no seu carrinho')
    });

    it.only('Deve adicionar produtos ao carrinho - Usando Comando customizados', () => {
        cy.addProdutos('Arcadio Gym Short', 2)
    });

});