import "reflect-metadata"
import express from "express"
import { router } from "./routes"

import "./database"

const app = express()

app.use(express.json())

app.use(router)

/*
Métodos HTTP

GET    -> Buscar dados na API
POST   -> Colocar dados no banco de dados
PUT    -> Atualizar dados no banco de dados
DELETE -> Apagar dados no banco de dados
PATCH  -> Alterar uma informação específica

*/

/*
Parâmetros

Tipos de parâmetros: 
* Route params => http://localhost:8080/produtos/322
* Query params => http://localhost:8080/produtos?name=teclado&qualidade=tecladoBom | Pesquisa diretas por parâmetros

* Body  params {
    "name":"RTX 2070",
    "price":"2530"
}

*/

app.get("/test", (request, response) => {
 // Request é tudo que está entrando
 // Response é tudo que está retornando

 return response.send('Olá NLW')
})

app.listen(8080, () => console.log('Rodando'))