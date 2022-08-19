import { Request, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";
import { User, USER_ROLES } from "../models/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserController {
    public signup = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const nickname = req.body.nickname
            const email = req.body.email
            const password = req.body.password

            if (!nickname || !email || !password) {
                throw new Error("Parameters missing.")
            }

            if (typeof nickname !== "string") {
                throw new Error("Parameter 'nickname' must be a string.")
            }

            if (typeof email !== "string") {
                throw new Error("Parameter 'email' must be a string.")
            }

            if (typeof password !== "string") {
                throw new Error("Parameter 'password' must be a string.")
            }

            if (nickname.length < 3) {
                throw new Error("O parameter'nickname' must have at least 3 characters.")
            }

            if (password.length < 6) {
                throw new Error("The parameter 'password' must have at least 6 characters.")
            }

            if (!email.includes("@") || !email.includes(".com")) {
                throw new Error("The parameter 'email' must have @ and .com")
            }

            const idGenerator = new IdGenerator()
            const id = idGenerator.generate()

            const hashManager = new HashManager()
            const hashPassword = await hashManager.hash(password)

            const user = new User(
                id,
                nickname,
                email,
                hashPassword,
                USER_ROLES.NORMAL
            )

            const userDatabase = new UserDatabase()
            await userDatabase.createUser(user)

            const payload: ITokenPayload = {
                id: user.getId(),
                role: user.getRole()
            }

            const authenticator = new Authenticator()
            const token = authenticator.generateToken(payload)

            res.status(201).send({
                message: "Successfully registered",
                token
            })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public login = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const email = req.body.email
            const password = req.body.password

            if (!email || !password) {
                errorCode = 401
                throw new Error("Missing email or password")
            }

            if (typeof email !== "string") {
                throw new Error("Parameter 'email' must be a string.")
            }

            if (typeof password !== "string") {
                throw new Error("Parameter 'password' must be a string.")
            }

            if (password.length < 6) {
                throw new Error("The parameter'password' must have at least 6 characters.")
            }

            if (!email.includes("@") || !email.includes(".com")) {
                throw new Error("The parameter 'email' must have @ and .com")
            }

            const userDatabase = new UserDatabase()
            const userDB = await userDatabase.findByEmail(email)

            if (!userDB) {
                errorCode = 401
                throw new Error("Email not registered")
            }

            const user = new User(
                userDB.id,
                userDB.nickname,
                userDB.email,
                userDB.password,
                userDB.role
            )

            const hashManager = new HashManager()
            const isPasswordCorrect = await hashManager.compare(
                password,
                user.getPassword()
            )

            if (!isPasswordCorrect) {
                errorCode = 401
                throw new Error("Invalid password")
            }

            const payload: ITokenPayload = {
                id: user.getId(),
                role: user.getRole()
            }

            const authenticator = new Authenticator()
            const token = authenticator.generateToken(payload)

            res.status(200).send({
                message: "Login successfully",
                token
            })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public getAllUsersDB = async (req: Request, res: Response ) => {
        let errorCode = 400
            try {
                const token = req.headers.authorization
                const search = req.query.q as string

                const authenticator = new Authenticator()
                const payload = authenticator.getTokenPayload(token)

                if (!payload) {
                    errorCode = 401
                    throw new Error("Missing or invalid token")
                }

                const userDatabase = new UserDatabase()
                const isUserExists = await userDatabase.checkIfExistsById(payload.id)

                if (!isUserExists) {
                    errorCode = 401
                    throw new Error("Invalid token.")
                }

                const usersDB = await userDatabase.getAllUsers(search)

                const users = usersDB.map((userDB) => {
                    return new User(
                        userDB.id,
                        userDB.nickname,
                        userDB.email,
                        userDB.password,
                        userDB.role
                    )
                })

                const result = users.map((user) => {
                    return {
                        id: user.getId(),
                        nickname: user.getNickname(),
                        email: user.getEmail()
                    }
                })

                res.status(200).send({ users: result })

        } catch (error) {
            res.status(200).send({ message: error.message })
        }
    }

    public deleteUser = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const id = req.params.id

            if (!token) {
                errorCode = 422
                throw new Error("Missing token")
            }

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Invalid token.")
            }

            const userDataBase = new UserDatabase()
            const userDB = await userDataBase.findById(id)

            if (!userDB) {
                errorCode = 404
                throw new Error("Invalid user id to be deleted.")
            }

            if (payload.role === USER_ROLES.NORMAL) {
                if (payload.id !== userDB.id) {
                    errorCode = 403
                    throw new Error("Only admins can delete users.")
                }
            }

            await userDataBase.deleteUser(id)

            res.status(200).send({ message: "User successfully deleted!" })

        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
}