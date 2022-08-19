import { UserBusiness } from "../../src/business/UserBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { ISignupInputDTO } from "../../src/models/User"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("Testando UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("signup bem sucedido", async () => {
        const input: ISignupInputDTO = {
            name: "alice",
            email: "alice@gmail.com",
            password: "alice99"
        }

        const response = await userBusiness.signup(input)

        expect(response.message).toEqual("Cadastro realizado com sucesso")
        expect(response.token).toEqual("token-mock")
    })

    test("deve retornar erro caso o nome não seja uma string", async ()=> {
        expect.assertions(2)

        try {
            const input = {
                name:8,
                email:"will@gmail.com",
                password:"will88"
            } as unknown as ISignupInputDTO

            await userBusiness.signup(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'name' inválido: deve ser uma string")
            }
        }
    })

    test("deve retornar erro caso o email não seja uma string", async ()=> {
        expect.assertions(2)

        try {
            const input = {
                name:"will",
                email:0,
                password:"will88"
            } as unknown as ISignupInputDTO

            await userBusiness.signup(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'email' inválido: deve ser uma string")
            }
        }
    })

    test("deve retornar erro caso o password não seja uma string", async ()=> {
        expect.assertions(2)

        try {
            const input = {
                name:"will",
                email:"will@gmail.com",
                password:8
            } as unknown as ISignupInputDTO

            await userBusiness.signup(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'password' inválido: deve ser uma string")
            }
        }
    })
})
