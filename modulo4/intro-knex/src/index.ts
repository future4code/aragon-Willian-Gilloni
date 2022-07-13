import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./database/connection";
import { Funcionario } from "./types";


const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

//Exercicio1
app.get("/funcionarios", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const search = req.query.search as string

    if (search) {
      const [result] = await connection.raw(`
      SELECT * FROM Funcionarios
      WHERE LOWER(nome) LIKE "%${search.toLowerCase()}%";
      `)
      return res.status(200).send({ funcionarios: result })
    }

    const [result] = await connection.raw(`
    SELECT * FROM Funcionarios;
    `)
    res.status(200).send({ funcionarios: result })
  } catch (error) {
    res.status(errorCode).send({ mensagem: error.message })
  }
})

//Exercicio2

app.post("/funcionarios", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { nome, email } = req.body

    if (!nome || !email) {
      errorCode = 422
      throw new Error("Parâmetros faltando.");
    }
    if (typeof nome !== "string" || typeof email !== "string") {
      errorCode = 422
      throw new Error("Nome ou email precisam ser caracteres.");
    }

    if (!email.includes("@")) {
      errorCode = 422
      throw new Error("Email deve possuir @.");
    }

    if (nome.length < 4) {
      errorCode = 422
      throw new Error("O nome do usuário deve ter ao menos 4 caracteres.");
    }

    const [funcionarios] = await connection.raw(`
    SELECT * FROM Funcionarios
    WHERE email = "${email}";
    `)
    console.log(funcionarios)
    if (funcionarios.email == email) {
      errorCode = 409
      throw new Error("Email ja cadastrado.")
    }

    const novoFuncionario: Funcionario = {
      id: Date.now(),
      nome: nome,
      email: email
    }

    await connection.raw(`
    INSERT INTO Funcionarios(id,nome,email)
    VALUES("${novoFuncionario.id}", "${novoFuncionario.nome}", "${novoFuncionario.email}");
    `)

    res.status(201).send({ mensagem: "Funcionario cadastrado com sucesso", funcionarios: novoFuncionario })

  } catch (error) {
    res.status(errorCode).send({ mensagem: error.message })
  }
})

//Exercicio3

app.put("/funcionarios/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)
    const email = req.body.email

    // const [funcionarios] = await connection.raw(`
    // SELECT * FROM Funcionarios
    // WHERE id = "${id}";
    // `)

    // if(funcionarios.id !== id) {
    //   errorCode = 409
    //   throw new Error("ID inexistente");

    // }

    if (!email) {
      errorCode = 422
      throw new Error("Email deve existir.");
    }

    if (typeof email !== "string") {
      errorCode = 422
      throw new Error("Email deve ser um caracter.");
    }

    if (!email.includes("@")) {
      errorCode = 422
      throw new Error("Email deve possuir @.");
    }


    // const [funcionarios] = await connection.raw(`
    // SELECT * FROM Funcionarios
    // WHERE email = "${email}";
    // `)

    // if (funcionarios.email == email) {
    //   errorCode = 409
    //   throw new Error("Email ja cadastrado.")
    // }


    await connection.raw(`
    UPDATE Funcionarios
    SET email = "${email}"
    WHERE id = "${id}";
    `)
    res.status(200).send({ mensagem: "Email atualizado com sucesso." })

  } catch (error) {
    res.status(errorCode).send({ mensagem: error.message })
  }
})

//exercicio4
app.delete("/funcionarios/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)

    // const [funcionarios] = await connection.raw(`
    // SELECT * FROM Funcionarios
    // WHERE id = "${id}";
    // `)
    // const funcionarioEncontrado = funcionarios[0]

    // if (!funcionarioEncontrado) {
    //   errorCode = 404
    //   throw new Error("Funcionario não encontrado");
    // }
    
    await connection.raw(`
    DELETE FROM Funcionarios
    WHERE id = ${id};
    `)

    res.status(200).send({ mensagem: "Funcionario deletado com sucesso" })
  } catch (error) {
    res.status(errorCode).send({ mensagem: error.message })
  }
})
