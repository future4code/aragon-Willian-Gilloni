import { UserBusiness } from "../../src/business/UserBusiness"
import { UserDatabase } from "../../src/database/UserDatabase"
import { BaseError } from "../../src/errors/BaseError"
import { ILoginInputDTO } from "../../src/models/User"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("Testando UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock() as UserDatabase,
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("login bem sucedido", async () => {
        const input: ILoginInputDTO = {
            email: "astrodev@gmail.com",
            password: "bananinha"
        }

        const response = await userBusiness.login(input)

        expect(response.message).toEqual("Login realizado com sucesso")
        expect(response.token).toEqual("token-astrodev")
    })

    test("deve retornar erro caso a senha seja inválida", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "astrodev@gmail.com",
                password: "bnanainha"
            }

            await userBusiness.login(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Password incorreto")
            }
        }
    })

    test("deve retornar erro caso o email não seja uma string", async ()=> {
        expect.assertions(2)

        try {
            const input = {
                email:0,
                password:"bananinha"
            } as unknown as ILoginInputDTO

            await userBusiness.login(input)
        } catch (error:unknown) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'email' inválido")
            }
        }
    })

    test("deve retornar erro caso o password não seja uma string", async ()=> {
        expect.assertions(2)

        try {
            const input = {
                email:"astrodev@gmail.com",
                password:0
            } as unknown as ILoginInputDTO

            await userBusiness.login(input)
        } catch (error:unknown) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'password' inválido")
            }
        }
    })

    test("deve retornar erro caso o password não seja uma string", async ()=> {
        expect.assertions(2)

        try {
            const input = {
                email:"astrodev@gmail.com",
                password:"bana"
            } as unknown as ILoginInputDTO

            await userBusiness.login(input)
        } catch (error:unknown) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'password' inválido: mínimo de 6 caracteres")
            }
        }
    })

    test("deve retornar erro caso o não possua @ no email", async ()=> {
        expect.assertions(2)

        try {
            const input = {
                email:"astrodevgmail.com",
                password:"bananinha"
            } as unknown as ILoginInputDTO

            await userBusiness.login(input)
        } catch (error:unknown) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'email' inválido")
            }
        }
    })
})

