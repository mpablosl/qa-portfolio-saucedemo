### TC-LOGIN-002 — Validar login com senha inválida

**ID**
TC-LOGIN-002

**Título**
Validar login com senha inválida

**Prioridade**
Alta

**Pré-condição**
Usuário deve estar com o navegador aberto na URL do sistema

**Dados de Teste**
Username: standard_user
Password: 123abc

**Passos**
1 - Acessar página de login: www.saucedemo.com
2 - Preencher o campo '**Username**' com o usuário de teste
3 - Preencher o campo '**Password**' com a senha inválida de teste
4 - Clicar no botão '**Login**'

**Resultado Esperado**
Uma notificação de mensagem é recebida: "### Epic sadface: Username and password do not match any user in this service"

----------
