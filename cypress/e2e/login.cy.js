describe('Suíte de Testes de Login - Saucedemo',() =>{

    it('TC-LOGIN-001 = Deve realizar login com credenciais válidas',()=>{
        // 1 - Acessar a página de login
        cy.visit('https://www.saucedemo.com/')

        //2 - Preencher o usuário
        cy.get('[data-test="username"]').type('standard_user')

        //3 - Preencher a senha
        cy.get('[data-test="password"]').type('secret_sauce')

        //4 - Clicar no botão Login
        cy.get('[data-test="login-button"]').click()

        // Resultado esperado: Validar se a URL mudou para a página de produtos
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')

        // Resultado Esperado Adicional: Validar se o título "Products" está visível na página
        cy.get('.title').should('be.visible')
    })

    it('TC-LOGIN-002 - Não deve realizar login com senha inválida',() =>{
        // 1 - Acessar a página de login
        cy.visit('https://www.saucedemo.com/')        

        //2 - Preencher o usuário
        //cy.get('[data-test="username"]').type('standard_user')

        //3 - Preencher a senha inválida
        //cy.get('[data-test="password"]').type('senha_errada')

        //cy.get('[data-test="login-button"]').click()

        // Usando o comando customizado para realizar o login
        cy.fazerLogin('standard_user','senha_errada')

        // Resultado esperado: Validar se a mensagem de erro está visível na tela
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('TC-LOGIN-003 - Validar Login com usuário inexistente', () =>{
        
        // 1 - Acessar a página de Login
        cy.visit('https://www.saucedemo.com/')

        // 2 - Preencher o campo "Username" com usuário inexistente
        //cy.get('[data-test="username"]').type("usuario_inexistente")
        
        // 3 - Preencher a senha
        //cy.get('[data-test="password"]').type('secret_sauce')

        // 4 - Clicar no botão Login
        //cy.get('[data-test="login-button"]').click()

        // Usando o comando customizado para realizar o login
        cy.fazerLogin("usuario_inexistente","secret_sauce")

        // 5 - Resultado esperado: Uma notificação de mensagem é recebida: **Epic sadface: Username is required**
        
        cy.get('[data-test="error"]').should('have.text',"Epic sadface: Username and password do not match any user in this service" )
    })

    it('TC-LOGIN-004 - Validar login sem informar o usuário', () =>{

        // 1 - Acessar a página de Login
        cy.visit('https://www.saucedemo.com/')

        // 2 - Não preencher o campo username

        // 3 - Preencher o campo password com a senha de teste ="secret_sauce"
        cy.get('[data-test="password"]').type('secret_sauce')

        // 4 - Clicar no botão Login
        cy.get('[data-test="login-button"]').click()

        // 5 - Resultado esperado: "Notificação de mensagem recebida: "**### Epic sadface: Password is required**""
        cy.get('[data-test="error"]').should('have.text',"Epic sadface: Username is required")

        
    })

    it('TC-LOGIN-005 - Validar login sem informar a senha', () =>{

        // 1 - Acessar a página de Login
        cy.visit('https://www.saucedemo.com/')

        // 2 - Preencher o campo "username" com o usuário de teste = "standard_user"
        cy.get('[data-test="username"]').type('standard_user')

        // 3 - Não preencher o campo password
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]').should('have.text',"Epic sadface: Password is required")
    })

    it('TC-LOGIN-006 — Validar login com usuário bloqueado',()=>{

        // 1 - Acessar a página de login
        cy.visit('https://www.saucedemo.com/')

        // 2 - Preencher o campo "username" com o usuário de teste = "locked_out_user"
        cy.get('[data-test="username"]').type('locked_out_user')

        // 3 - Preencher o campo "password" com a senha de teste = "secret_sauce"
        cy.get('[data-test="password"]').type('secret_sauce')

        // 4 - Clica no botão "Login"
        cy.get('[data-test="login-button"]').click()
        
        // 5 - Resultado esperado: Notificação de mensagem recebida: "Epic sadface: Sorry, this user has been locked out."

        cy.get('[data-test="error"]').should('have.text',"Epic sadface: Sorry, this user has been locked out.")


    })

})
