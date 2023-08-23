# SISCOMFE - Sistema de Comparação de Ofertas

## Visão Geral

O **SISCOMFE** é um sistema de comércio de produtos completo que inclui tanto o *front-end* quanto o *back-end*. Esse projeto é voltado ao back-end, criando uma API que para listar, criar, atualizar e excluir ofertas e produtos, bem como consultar as melhores ofertas disponíveis.

## Requisitos

Antes de iniciar o projeto, certifique-se de que você tenha as seguintes tecnologias instaladas:

- **Node.js**
- **PostgreSQL**
- **Git**

## Configuração do Projeto

1. Clone o repositório do GitHub:

<pre>
$ git clone https://github.com/seu-usuario/siscomfe.git
</pre>

2. Acesse o diretório do projeto:

3. Instale as dependências do Node.js:

<pre>
$ npm install
</pre>

4. Configure o banco de dados PostgreSQL de acordo com suas credenciais no arquivo `/repositories/conexao.js`.

5. Inicie o servidor:

<pre>
$ npm start
</pre>

6. O servidor estará disponível em `http://localhost:3000`.

## Endpoints da API

O projeto oferece os seguintes endpoints da API:

- **Listar todas as ofertas**
- `GET /ofertas`

- **Listar uma oferta específica**
- `GET /ofertas/:id`

- **Listar os produtos com a melhor oferta**
- `GET /ofertas/melhores`

- **Listar todas as ofertas de um produto**
- `GET /produtos/:id/ofertas`

- **Criar uma nova oferta**
- `POST /ofertas`

- **Atualizar uma oferta existente**
- `PUT /ofertas/:id`

- **Excluir uma oferta**
- `DELETE /ofertas/:id`

- **Listar todos os produtos**
- `GET /produtos`

- **Listar um produto específico**
- `GET /produtos/:id`

- **Criar um novo produto**
- `POST /produtos`

- **Atualizar um produto existente**
- `PUT /produtos/:id`

## Diagrama de Entidade Relacionamento (ER)

Para visualizar a estrutura do banco de dados e as relações entre as tabelas, consulte o [Diagrama de Entidade Relacionamento (ER)](https://github.com/magalhaesedc/siscomfe-backend/master/DER.png).

## Contribuindo

Sinta-se à vontade para contribuir com melhorias neste projeto. Abra um pull request e descreva as mudanças propostas.

## Licença

Este projeto é distribuído sob a licença [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.en.html).