### TC-LOGIN-003 — Validar login com usuário inexistente

**ID**

TC-LOGIN-003

**Título**
Validar login com usuário inexistente e senha correta

**Prioridade**
Média

**Pré-condição**
Usuário deve estar com navegador aberto na URL do sistema

**Dados de Teste**
Username: **standard_us**
Password: **secret_sauce**

**Passos**
1 - Acessar a página de Login: www.saucedemo.com
2 - Preencher o campo '**Username**' com usuario de teste
3 - Preencher o campo '**Password**' com a senha de teste
4 - Clicar no botão '**Login**'

**Resultado Esperado**
Uma notificação de mensagem é recebida: **### Epic sadface: Username and password do not match any user in this service**

----------