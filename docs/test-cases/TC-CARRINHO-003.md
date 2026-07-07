
### TC-CARRINHO-001 — Remover um produto pela página do carrinho com sucesso

**ID**
TC-CARRINHO-002

**Título**
Remover um produto pela página do carrinho com sucesso

**Prioridade**
Alta

**Pré-condição** 
- Usuário deve estar autenticado no sistema
- Usuário deve estar na página de carrinho
- Ter produto "Sauce Labs Bike Light" adicionado ao carrinho

**Dados de Teste**
Username: standard_user
Password: secret_sauce
Produto: Sauce Labs Bike Light

**Passos**
1 - Visualizar a lista de produtos na página de carrinho "Your Cart" -> https://www.saucedemo.com/cart.html
2 - Clicar no botão "Remove" do produto "Sauce Labs Bike Light"
3 - Observar se o produto desaparece da página
4 - Observar o ícone do carrinho de compras no canto superior direito da tela

**Resultado Esperado**
1 - A linha contendo o produto "Sauce Labs Bike Light" deve desaparecer (ser removida) da página
2 - O ícone vermelho do carrinho de compras deve desaparecer (pois não há mais itens).
2 - O usuário deve permanecer na página "Your Cart"

----------
