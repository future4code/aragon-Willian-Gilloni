// ## Exercício 1

// Faça a instalação e configuração do Express
// na pasta do exercício. Para testar, crie um 
//endpoint que aponte para a URL base da API. 
//Esse endpoint pode responder apenas com uma
// mensagem de “Servidor funcionando!”.

// Dicas:

// - URL base de uma API é definida por “/”

import express, {Request, Response} from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, ()=> console.log("O servidor esta rodando na porta 3003"))
app.get("/path", (req:Request, res:Response)=> {
    res.send("Servidor funcionando!")
})

