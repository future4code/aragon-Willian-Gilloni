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

        const date: Date = new Date();
        const actualYear: number = date.getFullYear();

        const birthSplitted: any = birthDate.split("/");
        const birthYear: number = birthSplitted[2];

        const checkAge: number = actualYear - birthYear;

        if (cpfIndex < 0) {
            if (checkAge >= 18) {
                if (name.length > 3) {
                    const newUser: User = {
                        id: Date.now(),
                        name: name,
                        cpf: cpf,
                        birthDate: birthDate,
                        balance: 0,
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
                        users: users,
                    });
                }
                errorCode = 422;
                throw new Error("Name must be longer than 3 caracters");
            }
            errorCode = 422;
            throw new Error("User must be over 18 years old");
        }
        errorCode = 422;
        throw new Error("CPF already exists.");
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
        const balance: any = result.map((item: any) => {
            return item.balance
        })
        res.status(200).send({ message: "selected id", users: balance })

    } catch (error) {
        res.send({ message: error.message })
    }
})

// Endpoint - Add Balance

app.put("/users/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const id = Number(req.params.id);
        const { balance } = req.body;

        const indexId: number = users.findIndex((user) => user.id === id);

        if (indexId < 0) {
            errorCode = 409;
            throw new Error("Id doesn't exist");
        }

        if (typeof balance !== "number" || balance <= 0) {
            errorCode = 422;
            throw new Error(
                "Balance type must be a number and balance amount must be greater than zero."
            );
        }

        const result: User[] = users.filter((user) => {
            if (user.id === id) {
                user.balance = user.balance + balance

                res.status(200).send({
                    message: "Update balance.",
                    users: user
                });
            }
        });

    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
});


//Endpoint - Pay bill

app.put("/users/:id/pay", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const id = Number(req.params.id);

        const { accountValue, descriptionBillToPay } = req.body;

        const indexId: number = users.findIndex((user) => user.id === id);

        if (indexId < 0) {
            errorCode = 409;
            throw new Error("Id doesn't exist");
        }

        if (!accountValue || !descriptionBillToPay) {
            errorCode = 422;
            throw new Error(" AccountValue and descriptionBillToPay must be exist.");
        }

        if (
            typeof accountValue !== "number" ||
            typeof descriptionBillToPay !== "string"
        ) {
            errorCode = 422;
            throw new Error(
                " AccountValue type must be a number and descriptionBillToPay type must be a string."
            );
        }

        if (accountValue <= 0 || descriptionBillToPay.length < 6) {
            errorCode = 422;
            throw new Error(
                " AccountValue must be a number greater than zero and descriptionBillToPay must be longer than 6 caracters"
            );
        }

        const date: Date = new Date()
        const actualDate = date.toLocaleDateString()

        const newStatement = {
            accountValue: accountValue,
            descriptionBillToPay: descriptionBillToPay,
            paymentDate: actualDate
        };

        const checkPay: User[] = users.filter((user) => {
            if (user.id === id) {
                if (user.balance > accountValue) {
                    user.balance = user.balance - accountValue;
                    user.accountStatement.push(newStatement);
                    res.status(200).send({
                        message: "Successfully paid",
                        users: user,
                    })
                    return checkPay
                }
                errorCode = 422;
                throw new Error(
                    "The account amount cannot be greater than the balance amount."
                );
            }
        });
    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
});