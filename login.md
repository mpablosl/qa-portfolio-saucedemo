
# Casos de Teste - Login

## Informações da Funcionalidade

**Sistema**
SauceDemo

**Funcionalidade**
Login

**Módulo**
Autenticação

**Responsável**
Pablo Lopes

**Data de Criação**
30/06/2026

**Última Atualização**
30/06/2026

----------

## Objetivo

Validar o comportamento da funcionalidade de login, garantindo que usuários autorizados consigam acessar o sistema e que acessos inválidos sejam tratados corretamente.

----------

## Casos de Teste

### TC-LOGIN-001 — Validar login com credenciais válidas

**ID**
TC-LOGIN-001

**Título**
Validar login com credenciais válidas

**Prioridade**
Alta

**Pré-condição** 
Usuário deve estar com o navegador aberto na URL do sistema

**Dados de Teste**
Username: standard_user
Password: secret_sauce

**Passos**
1 - Acessar página de login -> https://www.saucedemo.com/
2 - Preencher o campo '**Username**' com o usuário de teste
3 - Preencher o campo '**Password**' com a senha de teste 
4 - Clicar no botão "**Login**"

**Resultado Esperado**
O sistema deve autenticar o usuário, redirecionar para a página '/inventory.html' e exibir a listagem de produtos

----------

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

### TC-LOGIN-004 — Validar login sem informar usuário

**ID**
TC-LOGIN-004

**Título**
Validar login sem informar usuário

**Prioridade**
Média

**Pré-condição**
Usuário deve estar com navedor aberto na URL do sistema

**Dados de Teste**
Username:  ' '
Passoword: **secret_sauce** 

**Passos**
1 - Acessar a página de Login: www.saucedemo.com
2- **Não** preencher o campo '**Username**'.
3 - Preencher o campo '**Password**' com a senha de teste: **secret_sauce**
4 - Clicar no botão '**Login**' 

**Resultado Esperado**
Uma notificação de mensagem recebida: "**### Epic sadface: Username is required**"


----------

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

## Resumo da Suíte

Métrica

Quantidade

Total de Casos de Teste: 6

Casos de Alta Prioridade: 2

Casos de Média Prioridade: 4

Casos de Baixa Prioridade: 0

----------

## Observações

-   Documentar comportamentos inesperados encontrados durante a execução.
    
-   Relacionar os bugs encontrados à pasta `docs/bug-reports`.
    
-   Atualizar este documento sempre que novos cenários forem adicionados.
