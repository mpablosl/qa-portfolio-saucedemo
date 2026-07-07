
### TC-CARRINHO-001 — Remover um produto do carrinho com sucesso

**ID**
TC-CARRINHO-002

**Título**
Remover um produto do carrinho com sucesso

**Prioridade**
Alta

**Pré-condição** 
- Usuário deve estar autenticado no sistema
- Usuário deve estar na página de produtos
- Ter produto "Sauce Labs Bike Light" adicionado ao carrinho

**Dados de Teste**
Username: standard_user
Password: secret_sauce
Produto: Sauce Labs Bike Light

**Passos**
1 - Visualizar a lista de produtos na página de inventário -> https://www.saucedemo.com/inventory.html
2 - Clicar no botão "Remove" do produto "Sauce Labs Bike Light"
3 - Observar o ícone do carrinho de compras no canto superior direito da tela

**Resultado Esperado**
1 - O botão do produto "Sauce Labs Bike Light" deve mudar o seu texto de "Add to cart" para "Remove"
2 - O ícone vermelho do carrinho de compras deve desaparecer (ou deixar de exibir números)

----------
