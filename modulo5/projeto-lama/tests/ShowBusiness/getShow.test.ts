
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { ShowDatabase } from "../../src/database/ShowDatabase"
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock"
import { ShowBusiness } from "../../src/business/ShowBusiness"
import { IGetShowsInputDTO } from "../../src/models/Show"


describe("Testando ShowBusiness", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock() as unknown as ShowDatabase,
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("getShows bem sucedido", async () => {
        const input: IGetShowsInputDTO = {
            token: "token-astrodev"
        }

        const response = await showBusiness.getShows(input)

        expect(response.shows.length).toEqual(3)
        expect(response.shows[0].getId()).toEqual("201")
        expect(response.shows[0].getBand()).toEqual("Foo Fighters")
    })
})