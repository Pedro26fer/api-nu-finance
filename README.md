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
| `POST` | /signup | Cadastro de usuário. | -- | 200 |
| `PATCH` | /edit/:idUser | Edição/Atualização de dados do usuário |  token JWT. |200 |
| `DELETE` | /deleteUser | Deleção da conta do usuário | token JWT. | 204 |


## Rotas de Transações (Transactions)
| Método | Endpoint | Descrição | Authentication | Código HTTP |
|:---:|:---:|:---:|:---:|:---:|
| `GET` | /allTransactions | Retorna todas as transações do usuário logado.|  token JWT. | 200 |
| `POST` | /addTransaction/:idAccount | Adiciona uma transação na conta bancária cujo id foi enviado pela URL | token JWT | 200 |
| `PATCH` | /edit/transaction/:idTransaction | Edita dados da transação




