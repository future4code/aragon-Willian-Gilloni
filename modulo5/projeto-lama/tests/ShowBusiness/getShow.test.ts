
// import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
// import { HashManagerMock } from "../mocks/services/HashManagerMock"
// import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
// import { ShowDatabase } from "../../src/database/ShowDatabase"
// import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock"
// import { ShowBusiness } from "../../src/business/ShowBusiness"
// import { IGetShowsInputDTO } from "../../src/models/Show"
// import { UserDatabase } from "../../src/database/UserDatabase"


// describe("Testando PostBusiness", () => {
//     const showBusiness = new ShowBusiness(
//         new ShowDatabaseMock() as ShowDatabase,
//         new IdGeneratorMock(),
//         new AuthenticatorMock(),
//         new UserDatabase()
//     )

//     test("getPosts bem sucedido", async () => {
//         const input: IGetShowsInputDTO = {
//             token: "token-astrodev"
//         }

//         const response = await showBusiness.getShows(input)

//         expect(response.shows.length).toEqual(3)
//         expect(response.shows[0].getId()).toEqual("201")
//         expect(response.shows[0].getBand()).toEqual("Foo Fighters")
//         expect(response.shows[0].getStartsAt()).toEqual("2022/12/05")
//     })
// })