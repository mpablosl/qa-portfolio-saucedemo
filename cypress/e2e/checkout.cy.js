describe ('Suite de Testes de Checkout',()=>{

    // PRÉ-CONDIÇÃO: O usuário deve estar autentiacdo no sistema para realizar os testes do carrinho. Para isso, vamos utilizar o comando customizado "fazerLogin" que está localizado no arquivo cypress/support/commands.js
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.fazerLogin('standard_user','secret_sauce')
    })
    
    it('TC-CHECKOUT-001 - Realizar o checkout com sucesso',()=>{

        // 1 - Clicar no botão "Add to Cart" o produto "Sauce Labs Bike Light"
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

        // 2 - Clicar no ícone do carrinho de compras
        cy.get('[data-test="shopping-cart-link"]').click()

        // 3 - O usuário deve ser redirecionado para a página do carrinho de compras
        cy.url().should('include','/cart.html')
        
        // 4 - O usuário deve clicar no botão "Checkout"
        cy.get('[data-test="checkout"]').click()

        // 5 - O usuário deve ser redirecionado para a página do carrinho de compras, onde ele deve preencher as informações necessárias para o checkout, como nome, sobrenome e codigo postal
        cy.url().should('include','/checkout-step-one.html')

        // 6 - Preencher o campo "First Name" com o nome de teste = "Standard_user"
        cy.get('[data-test="firstName"]').type('Standard_user')

        // 7 - Preencher o campo "Last Name" com o sobrenome de teste = "Tester"
        cy.get('[data-test="lastName"]').type("Tester")

        // 8 - Preencher o campo "Postal Code" com o código postal de teste = "12345-678"
        cy.get('[data-test="postalCode"]').type("12345-678")

        // 9 - Clicar no botão "Continue"
        cy.get('[data-test="continue"]').click()

        // 10 - O usuário deve ser redirecionado para a página de resumo do pedido, onde ele deve revisar as informações
        cy.url().should('include','/checkout-step-two.html')

        // 11 - Clicar no botão "Finish"
        cy.get('[data-test="finish"]').click()

        // 12 - O usuário deve ser redirecionado para a página de confirmação do pedido, onde ele deve ver uma mensagem de sucesso indicando que o pedido foi realizado com sucesso.
        cy.url().should('include','/checkout-complete.html')

        // 13 - Resultado esperado: Validar se a mensagem de sucesso "THANK YOU FOR YOUR ORDER!" está visível na tela.
        cy.get('[data-test="complete-header"]').should('have.text','Thank you for your order!')

       
    })

})