import express from "express"

const app = express()

/*
Métodos HTTP

GET    -> Buscar dados na API
POST   -> Colocar dados no banco de dados
PUT    -> Atualizar dados no banco de dados
DELETE -> Apagar dados no banco de dados
PATCH  -> Alterar uma informação específica

*/

app.get("/test", (request, response) => {
 // Request é tudo que está entrando
 // Response é tudo que está retornando
 return response.send('Olá NLW')
})

app.post("/testPost", (request, response) => {
    return response.send('Ola NLW método post')
})

app.listen(8080, () => console.log('Rodando'))