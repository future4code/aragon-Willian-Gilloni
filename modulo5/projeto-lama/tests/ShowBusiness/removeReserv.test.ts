import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { ShowDatabase } from "../../src/database/ShowDatabase"
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock"
import { ShowBusiness } from "../../src/business/ShowBusiness"
import { IRemoveShowInputDTO } from "../../src/models/Show"
import { BaseError } from "../../src/errors/BaseError"




describe("Testando ShowBusiness", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock() as unknown as ShowDatabase,
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("reservTicket bem sucedido", async () => {
        const input: IRemoveShowInputDTO = {
            token:"token-astrodev",
            showId:"201"
        }

        const response = await showBusiness.removeReserv(input)

        expect(response.message).toEqual("Reserva removida com sucesso")

    })

    test("deve retornar um erro não caso exista token", async ()=> {
        expect.assertions(2)

        try {
            const input = {
                token:"",
            showId:"201"
            } as unknown as IRemoveShowInputDTO

             await showBusiness.removeReserv(input)
        } catch (error:unknown) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Não autenticado")
            }
        }
    })
})