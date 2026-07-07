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