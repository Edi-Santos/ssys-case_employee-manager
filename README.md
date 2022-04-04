# Projeto Recebido pela SSYS - SSYS Emplyee Manager

### Sumário

1. [Sobre o Projeto](#sobre-o-projeto)
   - [Padrões de Projeto](#padrões-de-projeto)
   - [Tecnologias Utilizadas](#tecnologias-utilizadas)
2. [Como Rodar o Projeto Em Sua Máquina](#como-rodar-o-projeto-em-sua-máquina)
   - [Pré Requisitos](#pré-requisitos)
   - [Clonando o Projeto](#clonando-o-projeto)
   - [Instalando Dependências](#instalando-dependências)
   - [Rodando o Projeto](#rodando-o-projeto)

## Sobre o Projeto
O projeto SSYS Employee Manager é, basicamente, uma API onde é possível registrar novos funcionários, consultar os funcionários já registrados, atualizar um registro e deletar um registro. Em outras palavras, é CRUD básico. Também é possível fazer duas consultas para encontrar o maior e menor salário, e também, o mais jovem e mais velho funcionário. Mas, para tudo isto, é necessário estar autenticado. Deste modo, tomei a liberdade de criar um endpoint para login do administrador da aplicação, garantindo então, que, apenas ele, tenha permissão de manusear a aplicação. <br/>
Por fim, utilizei banco de dados NoSQL para persistir os dados.

#### Padrões de Projeto
Busquei organizar as pastas e dividir as responsabilidades do código utilizando o modelo *MSC* (Model, Service e Controller) onde o `Model` é responsável pela interação direta com o banco de dados, `Service` com as regras de negócio e `Controller` sendo a camada de contato direto com o usuário. <br/>
Busquei também usar alguns dos princípios de *SOLID* tentando colocar em prática a as ideias de `Single Responsibility Principle`, `Open/Closed Principle` e `Dependency Inversion Principle`.

#### Tecnologias Utilizadas
Para este projeto eu utilizei as seguintes tecnologias:

- JavaScript (ES6)
- Node.JS
- Express
- MongoDB

Usei também as bibliotecas:

- jsonwebtoken
- nodemon

Para qualidade de código, foi usado:

- eslint-config-trybe-backend
- mocha
- chai
- chai-http
- sinon
- mongodb-memory-server

## Como Rodar o Projeto Em Sua Máquina

#### Pré Requisitos
Primeiro, será necessário que você tenha instalado o Git, Node (npm) e o MongoDB em sua máquina. Caso não tenha e precise de uma força, siga os tutoriais dos links abaixo.

<a href="https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git">Tutorial do Git</a> <br/>
<a href="https://balta.io/blog/node-npm-instalacao-configuracao-e-primeiros-passos">Tutorial do Node</a> <br/>
<a href="https://medium.com/danieldiasjava/obtendo-e-configurando-o-mongodb-em-seu-ambiente-10ff98d868fa">Tutorial do MongoDB (Windows)</a> <br/>
<a href="https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-20-04-pt">Tutorial do MongoDB (Linux)</a> <br/>
<a href="https://www.oficinadanet.com.br/post/13367-instalando-mongodb-no-mac-os-x">Tutorial do MongoDB (MacOS)</a> <br/>

#### Clonando o Projeto
Com o ambiente preparado, agora é preciso que você clone o projeto para sua máquina. <br/>

1. Dentro do repositório no GitHub, clique no botão ***`Code`*** (O único botão verde na tela).
2. Em seguida, copie o link do repositório.
3. Depois, abra o seu terminal, navegue até a pasta que deseja colocar o projeto e use o comando: 
```
git clone git@github.com:Edi-Santos/ssys-case_employee-manager.git
```

#### Instalando Dependências
Com o projeto já clonado, através do seu terminal ainda aberto, entre na pasta raiz do projeto e rode o comando: <br/>
```
npm install
```
Assim serão instaladas todas as dependências do projeto necessárias para que se possa rodar o projeto.

#### Rodando o Projeto
Para rodar o projeto use o comando:
```
npm start
```
ou então:
```
npm run dev
```
