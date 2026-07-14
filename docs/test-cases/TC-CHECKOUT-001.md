### TC-CHECKOUT-001 — Realizar o checkout de um produto com sucesso

**ID**
TC-CHECKOUT-001

**Título**
Realizar o checkout de um produto com sucesso

**Prioridade**
Alta

**Pré-condição** 
- Usuário deve estar autenticado no sistema
- Usuário deve estar na página de produtos
- Usuário deve ter adicionado um produto ao carrinho

**Dados de Teste**
Username: standard_user
Password: secret_sauce
Produto: Sauce Labs Bike Light
First Name: 'Standard_user'
Last Name: 'Tester'
Zip/Postal Code: `12345-678`


**Passos**
1 - Visualizar a lista de produtos na página de inventário -> https://www.saucedemo.com/inventory.html
2 - Clicar no botão "Add to Cart" do produto "Sauce Labs Bike Light"
3 - Observar o ícone do carrinho de compras no canto superior direito da tela
4 - Clicar no ícone do carrinho de compras no canto superior direito da tela
5 - Clicar no botão "Checkout"
6 - Preencher o campo "First Name" com o usuário 'Standard_user'
7 - Preencher o campo "Last Name" com o sobrenome 'Tester'
8 - Preencher o campo "Zip/Postal Code" com a informação `12345-678`
9 - Clicar no botão "Continue"
10 - Observar as informações do pedido
11 - Clicar no botão "Finish"


**Resultado Esperado**
1 - O usuário realizar o checkout com sucesso, e receber a mensagem: "Thank you for your order!"
----------
