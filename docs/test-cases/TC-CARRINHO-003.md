### TC-CARRINHO-001 — Adicionar múltiplos produtos ao carrinho com sucesso

**ID**
TC-CARRINHO-001

**Título**
Adicionar multiplos produtos ao carrinho com sucesso

**Prioridade**
Alta

**Pré-condição** 
- Usuário deve estar autenticado no sistema
- Usuário deve estar na página de produtos

**Dados de Teste**
Username: standard_user
Password: secret_sauce
Produtos: "Sauce Labs Bike Light", "Sauce Labs Bolt T-Shirt", "Sauce Labs Onesie"

**Passos**
1 - Visualizar a lista de produtos na página de inventário -> https://www.saucedemo.com/inventory.html
2 - Clicar no botão "Add to cart" do produto "Sauce Labs Bike Light"
3 - Clicar no botão "Add to cart" do produto "Sauce Labs Bolt T-Shirt"
4 - Clicar no botão "Add to cart" do produto "Sauce Labs Onesie"
5 - Observar o ícone do carrinho de compras no canto superior direito da tela
6 - Clicar no ícone do carrinho de compras para acessar a página "Your cart"

**Resultado Esperado**
1 - O ícone do carrinho de compras deve exibir um emblema (badge) com o número 3
2 - Os botões dos 3 produtos clicados na tela de inventário devem mudar o texto de "Add to cart" para "Remove"
3 - Na página "your cart", a lista deve exibir exatamente os 3 produtos que foram adicionados.

----------
