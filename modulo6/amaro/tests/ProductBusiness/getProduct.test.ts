import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { ProductDatabase } from "../../src/database/ProductDatabase"
import { ProductDatabaseMock } from "../mocks/ProductDatabaseMock"
import { IGetProductInputDTO } from "../../src/models/Product"
import { ProductBusiness } from "../../src/business/ProductBusiness"

describe("Testando ProductBusiness", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock() as unknown as ProductDatabase,
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("getProducts bem sucedido", async () => {
        const input: any = {
            token: "token-astrodev"
        }
 
        const response = await productBusiness.getProducts(input)

        expect(response.products.length).toEqual(3)
        expect(response.products[0].getId()).toEqual("201")
        expect(response.products[0].getName()).toEqual("Foo Fighters")
    })
}) 

