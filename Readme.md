# ADD-API 🚀
> API RESTful desenvolvida em Node.js para gestão de Metas, Programas e Empregados.

Esta API foi construída utilizando os princípios de **SOLID** e a arquitetura **MVC (Model-View-Controller)**, com uma estrutura de classes inspirada no desenvolvimento Java (POO), facilitando a manutenção e a escalabilidade.

## 🛠️ Tecnologias Utilizadas

* **Node.js** (Ambiente de execução)
* **Express.js** (Framework web)
* **SQL Server (mssql)** (Banco de dados)
* **Dotenv** (Gerenciamento de variáveis de ambiente)

## 📂 Estrutura do Projeto

ADD-API/
├── src/
│   ├── config/       # Configuração de conexão com o banco de dados
│   ├── controllers/  # Lógica de recebimento de requisições (HTTP)
│   ├── services/     # Regras de negócio e comunicação com o SQL
│   ├── routes/       # Definição dos endpoints (URLs)
├── .env              # Variáveis sensíveis (não enviado ao Git)
├── app.js            # Ponto de entrada da aplicação
└── package.json      # Dependências e scripts do projeto

### 🚀 Como Configurar e Rodar

1. Pré-requisitos
Certifique-se de ter o Node.js instalado em sua máquina.

2. Instalação
Clone o repositório ou copie os arquivos e, na pasta raiz, execute:
**npm install**

3. Variáveis de Ambiente
Crie um arquivo chamado .env na raiz do projeto e preencha com as suas credenciais:

*DB_USER=seu_usuario*
*DB_PASSWORD=sua_senha*
*DB_SERVER=nome_do_servidor*
*DB_DATABASE=nome_do_banco*
*PORT=3000*

4. Execução
Para iniciar o servidor:
**node app.js**

#### 📡 Endpoints Principais

Rota	                Método	        Descrição
/status	                GET	            Verifica se a API e o Banco estão online.
/ajuda	                GET	            Retorna o guia de uso da API.
/categorias	            GET/POST	    Lista ou cadastra categorias.
/empregados	            GET/POST	    Lista ou cadastra empregados.

##### 🏗️ Padrões de Projeto (Design Patterns)

**MVC & SOLID**
- Model (Service): Toda a interação com o banco de dados SQL Server está isolada na camada de Services.

- Controller: Responsável apenas por validar a entrada e retornar a resposta ao usuário.

- BaseClasses (Java-Style): Utilizamos classes abstratas (BaseService e BaseController) para que o CRUD básico seja herdado automaticamente.

**Como adicionar uma nova tabela?**
A API foi desenhada para ser extensível. Para adicionar uma nova tabela (ex: Metas):

1. **Crie o Service**: Crie *MetasService.js* em *src/services/* herdando de *BaseService*. Informe o nome da tabela e a chave primária no super().

2. **Crie o Controller**: Crie *MetasController.js* em *src/controllers/* herdando de *BaseController*.

3. **Registre a Rota**: Adicione os novos endpoints em *src/routes/index.js*.

###### 📝 Licença

Desenvolvido para uso somente dentro da Rede Sarah Rio.