# api-nu-finance
O api-nu-finance disponibiliza uma API Restfull para a aplicação Nu Finance

Nesta Api é possível criar uma conta e logar na conta criada. Após logado, o usuário consegue cadastrar e gerenciar transações financeiras além de cadastrar e gerenciar as contas bancárias a qual as transações pertencem. O CRUD completo dessas três entidades (User, Transactions e Accounts) estão disponibilizados nas rotas abaixo.

Todas as rotas necessitam de um token de login, isto é, para o teste da Api, primeiro é necessário criar uma conta e logar. O token retornado na rota
de login deve ser usado no objeto headers de todas as demais rotas. 

## Métodos
Requisições para a API devem seguir os padrões: 
| Método | Descrição | Autenticação |
|:---:|:---:|:---:|
| `GET` | Retorna informações de um ou mais registros. | Sim |
| `POST` | Utilizado para criar um novo registro/ Utilizado para logar. | Não |
| `PACTH` | Atualiza dados de um registro. | Sim |
| `DELETE` | Remove um registro do sistema. | Sim |


## Respostas
| Código | Descrição |
|:---:|:---:|
| `200` | Requisição executada com sucesso (success).|
| `201` | Registro criado com sucesso (created).|
| `204` | Requisição concluída sem objeto de resposta (No content).|
| `400` | Erros de validação ou os campos informados não existem no sistema.|
| `401` | Dados de acesso inválidos.|
| `404` | Registro pesquisado não encontrado (Not found).|
| `403` | Conflito nos dados enviados (Forbidden)|

## URL base
<https://api-nu-finance.cyclic.app>


## Rotas do Usuário (User)
| Método | Endpoint | Descrição | Authentication | Código HTTP |
|:---:|:---:|:---:|:---:|:---:|
| `GET` | /profile | Retorna os de perfil do usuário logado.|  token JWT. | 200 |
| `POST` | /signup | Cadastro de usuário. | -- | 201 |
| `PATCH` | /edit/:idUser | Edição/Atualização de dados do usuário |  token JWT. |200 |
| `DELETE` | /deleteUser | Deleção da conta do usuário | token JWT. | 204 |


## Rotas de Transações (Transactions)
| Método | Endpoint | Descrição | Authentication | Código HTTP |
|:---:|:---:|:---:|:---:|:---:|
| `GET` | /allTransactions | Retorna todas as transações do usuário logado.|  token JWT. | 200 |
| `POST` | /addTransaction/:idAccount | Adiciona uma transação na conta bancária cujo id foi enviado pela URL | token JWT | 201 |
| `PATCH` | /edit/transaction/:idTransaction | Edita dados da transação cujo id foi enviado pela URL | token JWT | 204 |
| `DELETE` | /deleteTransactions/:idTransaction | Deleta transação cujo id foi enviado  pela URL | token JWT | 204 |

## Rotas das Contas Bancárias (Accounts)
| Método | Endpoint | Descrição | Authentication | Código HTTP |
|:---:|:---:|:---:|:---:|:---:|
| `GET` | /accounts | Retorna todas as contas bancárias cadastradas do usuário logado. | token JWT | 200 |
| `POST` | /addAccount | Adiciona uma conta bancária pertencente ao usuário logado. | token JWT | 201 |
| `PATCH` | /editAccount/:idAccount | Atualiza dados da conta bancária cujo id foi enviado pela URL. | token JWT | 200 |
| `DELETE` | /deleteAccount/:idAccount | Deleta conta bancária cujo id foi enviado pela URL | token JWT | 204 |


## Dados de Request e Response
## User

| Método | Endpoint |
|:---:|:---:|
| `GET`| /profile |

  + Request (application/json)  
  
    + Headers


          {       
            "Authorization": "token  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBfZmVybmFuZGVzQGdtYWlsLmNvbSIsImlhdCI6MTY4NTU2ODc4OCwiZXhwIjoxNjg1NTg2Nzg4fQ.UZuvPPNktZ1IxSru8ASxxWxAvceBnetHzGI1LgxioxA"
          }


  + Response 200 (application/json)

          
          {
              "name": "Pedro Henrique",
              "email": "p_fernandes@gmail.com",
              "password": "$2b$10$.AohwymdcR10IyCGVd4BouhjuYwDwIHgnfbxZUaDVQVgTpdSc0Zwe",
              "id": "bd8b9f63-4697-4989-9b74-93ed3eade7f5",
              "createdAt": "2023-05-31T21:21:12.424Z",
              "updatedAt": "2023-05-31T21:21:12.424Z"
          }   


| Método | Endpoint |
|:---:|:---:|
| `POST`| /signup |


  + Request (application/json)

    + Body

          {
            "name": "Pedro Henrique",
            "email": "p_fernandes@gmail.com",
            "password": "12345"
          }
          
          
  + Response 201 (application/json)

        {
          "name": "Pedro Henrique",
          "email": "p_fernandes@gmail.com",
          "password": "$2b$10$.AohwymdcR10IyCGVd4BouhjuYwDwIHgnfbxZUaDVQVgTpdSc0Zwe",
          "id": "bd8b9f63-4697-4989-9b74-93ed3eade7f5",
          "createdAt": "2023-05-31T21:21:12.424Z",
          "updatedAt": "2023-05-31T21:21:12.424Z"
        }
        
_______________________________________________________________________________  





