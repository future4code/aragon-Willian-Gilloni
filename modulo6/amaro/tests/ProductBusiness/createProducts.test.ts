import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { ProductDatabase } from "../../src/database/ProductDatabase"
import { ProductBusiness } from "../../src/business/ProductBusiness"
import { ProductDatabaseMock } from "../mocks/ProductDatabaseMock"
import { ICreateProductInputDTO } from "../../src/models/Product"
import { BaseError } from "../../src/errors/BaseError"


describe("Testando productBusiness", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock() as unknown as ProductDatabase,
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("createProduct bem sucedido", async () => {
        const input: ICreateProductInputDTO = {
            token: "token-astrodev",
            name:"havaiana de pau",
            tag:["neutro"]
        }

        const response = await productBusiness.createProduct(input)

        expect(response.message).toEqual("Produto criado com sucesso")
        expect(response.product.getId()).toEqual("id-mock")
        expect(response.product.getName()).toEqual("havaiana de pau")
        expect(response.product.getTags()).toEqual(["neutro"])
    })

    test("deve retornar um erro não caso exista token", async ()=> {
        expect.assertions(2)

        try {
            const input = {
                token:"",
                name:"havaiana de pau",
            tag:["neutro"]
            } as unknown as ICreateProductInputDTO

             await productBusiness.createProduct(input)
        } catch (error:unknown) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Não autenticado")
            }
        }
    })

    test("deve retornar erro caso o name não seja uma string", async () => {
        expect.assertions(2)

        try {
            const input = {
                token:"token-astrodev",
                name:0,
                tag:["neutro"]
            } as unknown as ICreateProductInputDTO

            await productBusiness.createProduct(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'name' inválido")
            }
        }
    })

    test("deve retornar um erro caso tamanho do name for menor que 1 caracter", async () => {
        expect.assertions(2)

        try {
            const input = {
                token:"token-astrodev",
                name:"",
                tag:["neutro"]
            } as unknown as ICreateProductInputDTO

            await productBusiness.createProduct(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'name' inválido: mínimo de 1 caracteres")
            }
        }
    })

})