# To-Do List API

Uma API RESTful para gerenciar tarefas (to-do list), desenvolvida em Java com Spring Boot. Este projeto foi criado para fins de estudo e prática, integrando boas práticas de desenvolvimento e organização.

## Funcionalidades
- Criar uma nova tarefa.
- Listar todas as tarefas.
- Atualizar uma tarefa.
- Excluir uma tarefa.
- Marcar uma tarefa como concluída.

## Tecnologias Utilizadas
- Java 17
- Spring Boot
- Lombok
- MySQL
- DBeaver (para gerenciar o banco de dados)
- Maven

## Como Executar
1. Clone este repositório.
2. Configure o banco de dados MySQL e atualize o arquivo `application.properties`.
3. Execute o projeto com seu IDE favorita ou utilizando o Maven.

## Endpoints
- `POST /tasks`: Cria uma nova tarefa.
- `GET /tasks`: Retorna todas as tarefas.
- `PUT /tasks/{id}`: Atualiza uma tarefa existente.
- `DELETE /tasks/{id}`: Exclui uma tarefa.
- `PATCH /tasks/{id}/complete`: Marca uma tarefa como concluída.

## Autor
Desenvolvido por Leonidas como parte de seu portfólio de desenvolvimento back-end.
