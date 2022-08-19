import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { ShowDatabase } from "../../src/database/ShowDatabase"
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock"
import { ShowBusiness } from "../../src/business/ShowBusiness"
import { IcreateReservationInputDTO } from "../../src/models/Show"
import { BaseError } from "../../src/errors/BaseError"



describe("Testando ShowBusiness", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock() as unknown as ShowDatabase,
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("reservTicket bem sucedido", async () => {
        const input: IcreateReservationInputDTO = {
            token: "token-mock",
            showId:"201"
        }

        const response = await showBusiness.reservTicket(input)

        expect(response.message).toEqual("Reserva realizada com sucesso")

    })

    // test("deve retornar erro caso o show não seja encontrado", async () => {
    //     expect.assertions(2)

    //     try {
    //         const input: IcreateReservationInputDTO = {
    //             token:"token-astrodev",
    //             showId:""
    //         }

    //         await showBusiness.reservTicket(input)
    //     } catch (error: unknown) {
    //         if (error instanceof BaseError) {
    //             expect(error.statusCode).toEqual(401)
    //             expect(error.message).toEqual("Show não encontrado")
    //         }
    //     }
    // })
})


// if (!payload) {
//     throw new UnauthorizedError("Não autenticado")
// }

// const showDB = await this.showDatabase.findShowById(showId)

// if (!showDB) {
//     throw new RequestError("Show não encontrado")
// }