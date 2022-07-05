import express, { Request, Response } from 'express'
import cors from 'cors'
import { atividades,Atividade } from './atividades'


const app = express()

app.use(cors())
app.use(express.json())


app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003.")
})
//exercicio1

app.get("/ping", (req: Request, res: Response) => {
    res.send({ mensagem: "Pong!" })
})

//exercicio3
app.get("/atividades/:userId", (req: Request, res: Response) => {

    const userId = Number(req.params.userId)

    const resultado = atividades.filter((title) => {
        return title.userId === userId
    })

    res.send({
        atividades: resultado
    })
})

//exercicio4

app.post("/atividades", (req: Request, res: Response) => {
    const { userId, title } = req.body

    const ultimaAtividade = atividades[atividades.length - 1]

    const novaAtividade: Atividade = {
        userId: ultimaAtividade.id + 1,
        id: userId,
        title: title,
        completed: true
    }
    atividades.push(novaAtividade)

    res.send({ 
        mensagem: "Atividade criada com sucesso",
            atividade: novaAtividade
     })
})

// exercicio5
app.get("/atividades", (req: Request, res: Response) => {
    const busca = req.query.busca

    if (busca !== "true" && busca !== "false") {
        return res.send({
            busca: busca,
            atividades: atividades
        })
    }

    if (busca === "true") {
        const resultado = atividades.filter((atividade) => {
            return atividade.completed === true
        })

        return res.send({
            atividades: resultado,
            busca: busca
        })
    } else {
        const resultado = atividades.filter((atividade) => {
            return atividade.completed === false
        })

        return res.send({
            atividades: resultado,
            busca: busca
        })
    }
})

//exercicio6
app.delete("/atividades/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const index = atividades.findIndex((atividade) => {
        return atividade.id === id
    })

    if (index === -1) {
        return res.send({
            mensagem: "atividade não encontrado",
            id: id
        })
    }

    atividades.splice(index, 1)

    res.send({
        mensagem: "atividade deletado com sucesso",
        atividades: atividades
    })
})

//exercicio7

app.get("/atividades", (req: Request, res: Response) => {
    const busca = req.query.busca

    if (busca !== "true" && busca !== "false") {
        return res.send({
            busca: busca,
            atividades: atividades
        })
    }

    if (busca === "true") {
        const resultado = atividades.filter((atividade) => {
            return atividade.completed === true
        })

        return res.send({
            atividades: resultado,
            busca: busca
        })
    } else {
        const resultado = atividades.filter((atividade) => {
            return atividade.completed === false
        })

        return res.send({
            atividades: resultado,
            busca: busca
        })
    }
})