// ## Exercício 4

// Construa um endpoint que busca um usuário baseado em sua id.

// Entradas → Identificação do usuário.

// Saídas → Usuário e seus respectivos dados.

// Dicas:

// - Utilize o params para identificar o usuário selecionado.
// - Utilize o método .filter() para identificar o usuário selecionado.


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
app.get('/usuarios/:id', (req: Request, res: Response) => {
    res.status(200).send(usuarios)

    const {id} = req.params
    console.log(id)
})