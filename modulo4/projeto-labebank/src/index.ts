import express, { Request, Response } from "express";
import cors from "cors";
import { AccountStatement, users, User } from "./data";


const app = express();

app.use(cors());

app.use(express.json());

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003.")
})
app.get("/ping", (req: Request, res: Response) => {
    res.send({ message: "pong" })
})

//endpoint1-criar conta
//Endpoint - Create new user
app.post("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const { name, cpf, birthDate } = req.body;

        if (!name || !cpf || !birthDate) {
            errorCode = 422;
            throw new Error(" Name, CPF and birthdate must be exist.");
        }

        if (
            typeof name !== "string" ||
            typeof cpf !== "string" ||
            typeof birthDate !== "string"
        ) {
            errorCode = 422;
            throw new Error("Name, email and birthdate must be a string.");
        }

        const cpfIndex: number = users.findIndex((user) => user.cpf === cpf);

        const timeElapsed = Date.now();
        const today: any = new Date(timeElapsed);
        const actualDate: any = today.toLocaleDateString();
        const actualDateSplitted: any = actualDate.split("/");
        const actualYear: number = actualDateSplitted[2];

        const birthSplitted: any = birthDate.split("/");
        const birthYear: number = birthSplitted[2];

        const checkAge: number = actualYear - birthYear;
        console.log(checkAge);

        if (cpfIndex < 0) {
            if (checkAge >= 18) {
                if (name.length > 3) {
                    const newUser: User = {
                        id: Date.now(),
                        name: name,
                        cpf: cpf,
                        birthDate: birthDate,
                        balance:0,
                        accountStatement: [
                            {
                                accountValue: 0,
                                descriptionBillToPay: "",
                                paymentDate: "",
                            },
                        ],
                    };

                    users.push(newUser);
                    res.status(200).send({
                        message: "User created successfully!",
                        users: users
                    })


                }
                return res.send({ message: "Name must be longer than 3 caracters" });
            }
            return res.send({ message: "User must be over 18 years old" });
        }
        return res.send({ message: "CPF already exists." });

    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
});

//endpoint get balance

app.get("/users/:id", (req: Request, res: Response) => {

    let errorCode = 400

    try {
        const id = Number(req.params.id)
        const indexId: any = users.findIndex(user => user.id === id)
        if (indexId < 0) {
            errorCode = 409
            throw new Error("Id doesn't exist");
        }
        const result: any = users.filter(user => user.id === id)
        const balance:any = result.map((item:any) => {
            return item.balance
        })
        res.status(200).send({ message: "selected id", users: balance})

}   catch (error) {
    res.send({ message: error.message })
}
})

//endpoint add balance

app.put("/users/:id", (req:Request, res:Response)=> {
    let errorCode = 400
    try {
        
    } catch (error) {
        
    }
})