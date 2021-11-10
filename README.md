# Projeto_2_Backend
Projeto de API utilizando NodeJs, MongoDB Atlas e deploy na nuvem via Heroku.

## Introdução

Segundo projeto para avaliação do módulo 3 de Backend da Blue Ed Tech, onde criamos uma API com 3 rotas principais e 5 subrotas, totalizando o CRUD, conforme a tabela abaixo:

|  /países   |  /estados  |  /cidades  |
| :--------: | :--------: | :--------: |
|  /listall  |  /listAll  |  /listAll  |
| /listname/ | /listNome/ | /listNome/ |
|  /create   |  /create   |  /create   |
|  /update/  |  /update/  |  /update/  |
|  /delete/  |  /delete/  |  /delete/  |

Cada uma dessas rotas será possível fazer uma alteração nos dados cadastrados, tanto os de exemplo já pré-cadastrados, quanto os que o usuário irá cadastrar na rota ***/create***.

## Utilizando a API

Para iniciar, é necessário abrir o Prompt de comando/terminal e inicializar o "npm init" e depois o "npm start", para começar o projeto. Após isso, fazer o mesmo para as dependências abaixo:

* "npm install dotenv"
* "npm install express --save"
* "npm install mongoose"

Concluído as os passos para instalar os npms, para poder utilizar a API, será necessário usar programas como o Postman, Insomnia, ou o Thunder Client dentro do VS Code.

### As Rotas

- As rotas ***/listall*** e ***/listAll*** são responsáveis por listar na tela todos os itens cadastrados no banco de dados.
- As rotas ***/listname/*** e ***/listNome/*** irão retornar um cadastro especifico, bastando colocar o nome da Cidade/Estado/País após o "/".
- A rota ***/update/*** atualiza, por meio do Id do item cadastrado, os dados. Ao usar as rotas ***/listall*** e ***/listAll*** tem-se o id logo no início do cadastro.
- A rota ***/delete/*** irá excluir o cadastro. Assim como a rota ***/update***, é necessário informar o id após o "/" para a API identificar qual cadastro deve excluir.

Se você estiver utilizando o Thunder Client, no repositório tem disponível as Collections de cada rota, para facilitar a utilização delas. Basta importar as Collections (que estão salvas com arquivos .JSON) e as rotas principais estão separadas por pastas, cada pasta contém as 5 rotas do CRUD.
