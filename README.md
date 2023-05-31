# api-nu-finance
O api-nu-finance disponibiliza uma API Restfull para a aplicação Nu Finance

Todas as rotas necessitam de um token de login, isto é, para o teste da Api, primeiro é necessário criar uma conta e logar. O token retornado na rota
de login deve ser usado no objeto headers de todas as demais rotas. 

## Métodos
Requisições para a API devem seguir os padrões: 
| Método | Descrição | Autenticação |
|---|---|---|
| `GET` | Retorna informações de um ou mais registros. | Sim |
| `POST` | Utilizado para criar um novo registro/ Utilizado para logar. | Não |
| `PUT` | Atualiza dados de um registro ou altera sua situação. | Sim |
| `DELETE` | Remove um registro do sistema. | Sim |
