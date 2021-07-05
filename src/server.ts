import "reflect-metadata"
import express, { Request, Response, NextFunction } from "express"
import "express-async-errors"

import { router } from "./routes"

import "./database"

const app = express()

app.use(express.json())

app.use(router)

// middleware
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
    return response.status(400).json({
        error: err.message
    })
    }
    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

app.get("/test", (request, response) => {
 // Request é tudo que está entrando
 // Response é tudo que está retornando

 return response.send('Olá NLW')
})

app.listen(8080, () => console.log('Rodando'))