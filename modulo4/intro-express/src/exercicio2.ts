
// ## Exercício 2

// Crie um array de usuários para servir como base de dados da 
// nossa API e inicialize-o com 3 usuários. Cada usuário será 
// representado pelas seguintes propriedades:

// - id: Identificação do usuário na lista.
// - name: Nome do usuário.
// - phone: Número de telefone do usuário.
// - email: E-mail do usuário.

// Dicas:

// - Os usuários devem ser representados por um type específico, 
// com as propriedades definidas anteriormente.
// - A lista de usuários será um type[ ].
// - Você pode armazenar esta lista dentro do próprio arquivo da 
// atividade ou criar um arquivo .json e importá-la (e também tipar) 
// para o contexto da atividade.

import express, {Request, Response} from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

const usuarios:Usuarios[] = [
    {
        id: 1,
        nome: "Rock",
        phone: 8888 - 8888,
        email: "rock@gmail.com"
    },
    {
        id: 2,
        nome: "Pop",
        phone: 3333 - 3333,
        email: "pop@gmail.com"
    },
    {
        id: 3,
        nome: "will",
        phone: 8383 - 8383,
        email: "will@gmail.com"
    }
]

type Usuarios = {
    id:number,
    nome: string,
    phone: number,
    email: string
}
app.listen(3003, ()=> console.log("O servidor esta rodando na porta 3003"))
app.get('/usuarios', (req: Request, res: Response) => {
    res.status(200).send(usuarios)
})