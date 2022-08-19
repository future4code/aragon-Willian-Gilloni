import { UserBusiness } from "../../src/business/UserBusiness"
import { UserDatabase } from "../../src/database/UserDatabase"
import { BaseError } from "../../src/errors/BaseError"
import { ISignupInputDTO } from "../../src/models/User"
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

    test("signup bem sucedido", async () => {
        const input: ISignupInputDTO = {
            name: "will",
            email: "will@gmail.com",
            password: "will88"
        }

        const response = await userBusiness.signup(input)

        expect(response.message).toEqual("Cadastro realizado com sucesso")
        expect(response.token).toEqual("token-mock")
    })

    test("deve retornar erro caso o nome seja uma string vazia", async () => {
        expect.assertions(2)
        
        try {
            const input: ISignupInputDTO = {
                name: "",
                email: "will@gmail.com",
                password: "will88"
            }

            await userBusiness.signup(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'name' inválido: mínimo de 3 caracteres")
            }
        }
    })

    test("deve retornar erro caso o nome não seja uma string", async () => {
        expect.assertions(2)
        
        try {
            const input = {
                name: undefined,
                email: "will@gmail.com",
                password: "will88"
            } as unknown as ISignupInputDTO

            await userBusiness.signup(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'name' inválido: deve ser uma string")
            }
        }
    })

    test("deve retornar erro caso o email não seja uma string", async () => {
        expect.assertions(2)
        
        try {
            const input = {
                name: "will",
                email: 0,
                password: "will88"
            } as unknown as ISignupInputDTO

            await userBusiness.signup(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'email' inválido: deve ser uma string")
            }
        }
    })

    test("deve retornar erro caso o password não seja uma string", async () => {
        expect.assertions(2)
        
        try {
            const input = {
                name: "will",
                email: "will@gmail.com",
                password: 0
            } as unknown as ISignupInputDTO

            await userBusiness.signup(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'password' inválido: deve ser uma string")
            }
        }
    })

    test("deve retornar erro caso name seja menor que 3 caracteres", async () => {
        expect.assertions(2)
        
        try {
            const input = {
                name: "wi",
                email: "will@gmail.com",
                password: "will88"
            } as unknown as ISignupInputDTO

            await userBusiness.signup(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'name' inválido: mínimo de 3 caracteres")
            }
        }
    })

    test("deve retornar erro caso password seja menor que 6 caracteres", async () => {
        expect.assertions(2)
        
        try {
            const input = {
                name: "will",
                email: "will@gmail.com",
                password: "will"
            } as unknown as ISignupInputDTO

            await userBusiness.signup(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'password' inválido: mínimo de 6 caracteres")
            }
        }
    })

    test("deve retornar erro caso o não possua @ no email", async () => {
        expect.assertions(2)

        try {
            const input = {
                name: "Astrodev",
                email: "astrodevgmail.com",
                password: "bananinha"
            } as unknown as ISignupInputDTO

            await userBusiness.signup(input)
        } catch (error:unknown) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'email' inválido")
            }
        }
    })
})



// if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
//     throw new RequestError("Parâmetro 'email' inválido")
// }