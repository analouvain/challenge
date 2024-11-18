**API**

A estrutura do projeto da API está organizada da seguinte forma:
- **index.js :** Arquivo de inicio da aplicação 
- **logger.js:** Controlador de Log desenvolvido utilizando o framework Winston 
- **githubapi.js :** Implementação da API com a requisição a API do GitHub
	 Foram implementados dois tipo de requisição:
	 
	 - `/api/users/<nome do usuario>`: 
	 Retorna as informações do usuário
	 - `/api/repos/<nome do usuário>/<linguagem>`:
	 Retorna os repositórios do usuário na linguagem
- **apiController.js**: Controlador das requisições. Responsável por renderizar os response codes
- **config.js**: Armazena as variaveis de configuração da API.
- **api.test.js**: Testes unitários realizados com o framework Jest



**DEPLOY**

A Api foi publicada em um servidor AWS. 
Endpoint da API:

http://18.228.222.208:3000/

**Exemplos de uso:**

http://18.228.222.208:3000/users/takenet

(Retorna informações do usuário takenet)

http://18.228.222.208:3000/repos/takenet/C%23

(Retorna os repositórios do usuário takenet existentes na linguagem C#)

