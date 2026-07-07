### TC-LOGIN-006 — Validar login com usuário bloqueado

**ID**
TC-LOGIN-006

**Título**
Validar login com usuário bloqueado

**Prioridade**
Média

**Pré-condição**
Usuário deve estar com navegador aberto na URL do sistema

**Dados de Teste**
Username: **locked_out_user**
Password: **secret_sauce**

**Passos**
1 - Acessar a página de Login:  **www.saucedemo.com**
2 - Preencher o campo **'Username'** com o usuário de teste
3 - Preencher o campo **'Password'** com a senha de teste
4 - Clicar no botão '**Login**'

**Resultado Esperado**
Notificação de mensagem recebida: "**### Epic sadface: Sorry, this user has been locked out.**"

----------