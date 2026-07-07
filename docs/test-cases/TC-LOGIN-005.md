### TC-LOGIN-005 — Validar login sem informar senha

**ID**
TC-LOGIN-005

**Título**
Validar login sem informar senha

**Prioridade**
Média

**Pré-condição**
Usuário deve estar com navegador aberto na URL do sistema

**Dados de Teste**
Username: **standard_user**
Passoword: ' '

**Passos**
1 - Acessar a página de Login: **www.saucedemo.com**
2 - Preencher o campo '**Username**' com o usuário de entrada
3 - Não preencher o campo '**Password**'
4 - Clicar no botão '**Login**'

**Resultado Esperado**
Notificação de mensagem recebida: "**### Epic sadface: Password is required**"

----------