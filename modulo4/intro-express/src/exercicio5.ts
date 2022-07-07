// ## Exercício 5

// Construa um endpoint que permita alterar o 
// telefone de um usuário baseado em sua id.

// Entradas → Identificação do usuário e novo 
// valor para telefone do usuário.

// Saídas → Mensagem de sucesso e usuário com 
// valor alterado.

// Dicas:

// - Utilize o params para identificar o usuário 
// a ser alterado.
// - Utilize o body para receber o novo telefone
//  do usuário.
// - Utilize o método .map() para identificar
//  o usuário selecionado e efetuar a modificação.


import express, {Request, Response} from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

let usuarios:Usuarios[] = [
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
const id = Number(req.params.id)
const {phone} = req.body

const updatePhone = usuarios.map( usuario => {
    if(usuario.id === id){
        return {...usuario, phone:phone}
    }else{
        return usuario
    }
})
    usuarios = updatePhone

    const updateUsuario = usuarios.filter(usuario => usuario.id === id)

    res.status(201).send({mensage:"Numero atualizado com sucesso!", usuario:updateUsuario[0]})
})