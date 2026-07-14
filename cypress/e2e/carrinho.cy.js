describe ('Suíte de Testes de Carrinho - Saucedemo', () =>{

    // PRÉ-CONDIÇÃO: O usuário deve estar autentiacdo no sistema para realizar os testes do carrinho. Para isso, vamos utilizar o comando customizado "fazerLogin" que está localizado no arquivo cypress/support/commands.js
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.fazerLogin('standard_user','secret_sauce')        
    })

    it('TC-CARRINHO-001 - Adicionar um produto ao carrinho com sucesso', ()=>{
        // 1 - Clicar no botão "Add to cart" do produto Sauce Labs Bike Light"
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

        // 2 - RESULTADO ESPERADO 1: Validar se o ícone do carrinho de compras está visível na tela, indicando que o produto foi adicionado com sucesso
        // ACHAR (cy.get) e VERIFICAR (.should) 
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')

        // 3 - RESULTADO ESPERADO 2: O botão deve mudar de "Add to cart" para "Remove", indicando que o produto foi adicionado com sucesso.
        //ACHAR (cy.get) e VERIFICAR (.should)
        cy.get('[data-test="remove-sauce-labs-bike-light"]').should('have.text', 'Remove')

    })

    it('TC-CARRINHO-004 - Adicionar múltiplos produtos ao carrinho com suceeso', () =>{

        // 1 - Clicar no botão "Add to cart" do produto "Sauce Labs Bike Light"
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        // 1.1 - Resultado Esperado: Verifica se o ícone do carrinho de compras está visível na tela, indicando que o produto foi adicionado com suceso.
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')
        // 1.2 - Resultado Esperado: Verifica se o botão "Add to cart" do  produto "Sauce Labs Bike Light" mudou para "Remove", indicando que o produto foi adicionado com sucesso.
        cy.get('[data-test="remove-sauce-labs-bike-light"]').should('have.text', 'Remove')

        // 2 - Clicar no botão "Add to cart" do produto "Sauce Labs Bolt T-Shirt"
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        // 2.1 - Resultado Esperado: Verifica se o ícone do carrinho de compras está visível na tela, indicando que o produto foi adicionado com suceso.
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '2')
        // 2.2 - Resultado Esperado: Verifica se o botão "Add to cart" do  produto "Sauce Labs Bolt T-Shirt" mudou para "Remove", indicando que o produto foi adicionado com sucesso.
        cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').should('have.text', 'Remove')

        // 3 - Clicar no botão "Add to cart" do produto "Sauce Labs Onesie"
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
        // 3.1 - Resultado Esperado: Verifica se o ícone do carrinho de compras está visível na tela, indicando que o produto foi adicionado com suceso.
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '3')
        // 3.2 - Resultado Esperado: Verifica se o botão "Add to cart" do  produto "Sauce Labs Onesie" mudou para "Remove", indicando que o produto foi adicionado com sucesso.
        cy.get('[data-test="remove-sauce-labs-onesie"]').should('have.text', 'Remove')       
        
    })
})