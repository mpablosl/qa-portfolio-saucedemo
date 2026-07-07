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
