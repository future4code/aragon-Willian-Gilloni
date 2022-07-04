
// ## Exercício 6

// Construa um endpoint para deletar um usuário 
// baseado em sua id.

// Entradas → Identificação do usuário.

// Saídas → Mensagem de sucesso da operação.

// Dicas:

// - Utilize o params para identificar o usuário 
// a ser removido.
// - Utilize o método .filter() para promover 
// a remoção.


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
app.delete('/usuarios/:id', (req: Request, res: Response) => {

    const id = Number(req.params.id)

    const index = usuarios.findIndex(usuario => usuario.id === id)

    usuarios.splice(index,1)

    res.status(200).send(usuarios)
})
