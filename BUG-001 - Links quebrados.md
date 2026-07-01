
## 🆔 ID do Bug
- BUG-001
---

** 📝 Título**

Botões de adicionar ou remover produtos não funcionam corretamente na tela de produtos ao usar o usuario "problem_user"

Formato recomendado:
**O que aconteceu + Onde aconteceu + Em que condição**
> Pergunta guia: o título descreve o problema sozinho, sem contexto extra?
---
**🌐 Ambiente**
Descreva o ambiente onde o bug foi encontrado:

- Sistema Operacional: Windows 11
- Navegador: Google Chrome
- Versão do navegador: 149.0.7827.201 (Versão oficial) 64 bits
- URL / Aplicação: https://www.saucedemo.com/inventory.html
- Usuário utilizado (se aplicável): problem_user
> Pergunta guia: outra pessoa conseguiria reproduzir com essas informações?
---

** ⚙️ Pré-condição**
O que precisa estar verdadeiro antes de executar o teste:
- Usuario deve estar autenticado com usuario **"problem_user"** e na página (https://www.saucedemo.com/inventory.html)
> Pergunta guia: qual estado o sistema precisa estar para o bug acontecer?

---

** 🔁 Passos para Reproduzir**
Descreva de forma sequencial e literal:

1. Acessar site **"www.saucedemo.com"**
2. Realizar login com o usuário **"problem_user"**
3. Aguardar redirecionamento para a url: **"https://www.saucedemo.com/inventory.html"**
4. Clicar no botão **"Add to Cart"**
5. Verificar o comportamento do botão e do carrinho
6. Caso o produto seja adicionado, tenta clicar em **"Remove"**

> Regra: cada passo deve ser claro, direto e sem interpretação.

---

** 🎯 Resultado Esperado**
Descreva como o sistema deveria se comportar.
O sistema deve permitir que o usuario adiciona ou remova os produtos do carrinho, refletindo as alterações na interface e no carrinho de compra
> Pergunta guia: qual é o comportamento correto segundo a regra de negócio?

---

**❌ Resultado Atual**
- Em alguns produtos o botão "Add do Cart" não responde ao clique e o item não é adicionado ao carrinho
- Em outros, o botão "Add to Cart" adiciona o item ao carrinho, e altera seu texto para **"Remove"**. No entanto, ao clicar no botão **"Remove"**, nenhuma ação é executada, e o item permanece no carrinho.
> Pergunta guia: o que exatamente está diferente do esperado?

---

** ⚖️ Severidade**
Escolha uma:
- Alta

Justifique:

- Afeta a principal funcionalidade de um E-commerce(Adicionar ou Remover Itens em um carrinho).
- Impacta fluxo critico de compra.
- Pode impedir a conclusão de um pedido.
---

** 📊 Prioridade**
Escolha uma:
- Alta

Justifique:

O problema afeta uma funcionalidade essencial do fluxo de compra. A correção deve ser priorizada para evitar impacto na experiência do usuário e impedir a continuidade do processo de compra.

---

**📎 Evidência**
Descreva o tipo de evidência anexada:

- Vídeo anexado mostrando o comportamento dos botões de adicionar e remover itens

---

** 🧠 Observações (opcional)**
- Bug é constante
- Ocorre em todos os usuários ou apenas alguns?
- Ocorre no usuario: "problem_user"
- Existe algum padrão?
- "Não"
---
---

**🎯 Desafio**
- Como você explicaria esse bug em 1 frase para um desenvolvedor?
- Como você priorizaria isso dentro de um sprint com outros bugs?stackedit.io/).
