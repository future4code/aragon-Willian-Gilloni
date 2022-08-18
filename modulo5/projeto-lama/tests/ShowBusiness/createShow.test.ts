import { ShowBusiness } from "../../src/business/ShowBusiness"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock"
import { ICreateShowInputDTO } from "../../src/models/Show"
import { ShowDatabase } from "../../src/database/ShowDatabase"
import { BaseError } from "../../src/errors/BaseError"

describe("Testando ShowBusiness", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock() as unknown as ShowDatabase,
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("createShow bem sucedido", async () => {
        const input: ICreateShowInputDTO = {
            token: "token-astrodev",
            band:"U2",
            starts_at:new Date()
        }

        const response = await showBusiness.createShow(input)

        expect(response.message).toEqual("Show criado com sucesso")
        expect(response.show.getId()).toEqual("id-mock")
        expect(response.show.getBand()).toEqual("U2")
    })

    test("deve retornar um erro não caso exista token", async ()=> {
        expect.assertions(2)

        try {
            const input = {
                token:"",
                band:"Evanescence",
                starts_at:new Date
            } as unknown as ICreateShowInputDTO

             await showBusiness.createShow(input)
        } catch (error:unknown) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Não autenticado")
            }
        }
    })

    test("deve retornar erro caso o band não seja uma string", async () => {
        expect.assertions(2)
        
        try {
            const input = {
                token:"token-astrodev",
                band:0,
                starts_at:new Date
            } as unknown as ICreateShowInputDTO

            await showBusiness.createShow(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'band' inválido")
            }
        }
    })

    test("deve retornar o tamanho da band deve ser maior que 1 caracter", async () => {
        expect.assertions(2)
        
        try {
            const input = {
                token:"token-astrodev",
                band:"",
                starts_at:new Date
            } as unknown as ICreateShowInputDTO

            await showBusiness.createShow(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'band' inválido: mínimo de 1 caracteres")
            }
        }
    })


})

