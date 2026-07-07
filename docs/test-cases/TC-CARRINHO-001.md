### TC-CARRINHO-001 — Adicionar um produto ao carrinho com sucesso

**ID**
TC-CARRINHO-001

**Título**
Adicionar um produto ao carrinho com sucesso

**Prioridade**
Alta

**Pré-condição** 
- Usuário deve estar autenticado no sistema
- Usuário deve estar na página de produtos

**Dados de Teste**
Username: standard_user
Password: secret_sauce
Produto: Sauce Labs Bike Light

**Passos**
1 - Visualizar a lista de produtos na página de inventário -> https://www.saucedemo.com/inventory.html
2 - Clicar no botão "Add to Cart" do produto "Sauce Labs Bike Light"
3 - Observar o ícone do carrinho de compras no canto superior direito da tela

**Resultado Esperado**
1 - O ícone do carrinho de compras deve exibir um emblema (badge) com o número 1
2 - O botão do produto "Sauce Labs Bike Light" deve mudar o seu texto de "Add to cart" para "Remove"

----------
