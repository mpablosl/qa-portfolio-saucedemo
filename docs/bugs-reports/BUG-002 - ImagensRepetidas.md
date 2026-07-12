

## 🆔 ID do Bug
- BUG-002
---

** 📝 Título**

Uma única imagem se repete em todos os produtos ao usar o usuario "problem_user"

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
4. Visualizar todos os produtos com a mesma imagem de um cachorro

> Regra: cada passo deve ser claro, direto e sem interpretação.

---

** 🎯 Resultado Esperado**
Descreva como o sistema deveria se comportar.
O sistema deve exibir a imagem relacionada ao produto.
> Pergunta guia: qual é o comportamento correto segundo a regra de negócio?

---

**❌ Resultado Atual**
- Uma única imagem se repete em todos os itens.
> Pergunta guia: o que exatamente está diferente do esperado?
---
** ⚖️ Severidade**
Escolha uma:
- Alta

Justifique:

- Afeta a principal funcionalidade de um E-commerce(Confiabilidade).
- Impacta fluxo critico de compra.
- Pode impedir a conclusão de um pedido.
---

** 📊 Prioridade**
Escolha uma:
- Alta

Justifique:

O problema afeta a usabilidade e a confiabilidade do sistema. A correção deve ser priorizada para evitar impacto na experiência do usuário e impedir a continuidade do processo de compra.

---

**📎 Evidência**
Descreva o tipo de evidência anexada:

- Print- 

Exemplo:
`[Print anexado mostrando uma única foto em todos os produtos]`

---
