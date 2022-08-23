
import { ProductDatabase } from "../database/ProductDatabase"
import { RequestError } from "../errors/RequestError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import { ICreateProductInputDTO, ICreateProductOutputDTO, IGetProductInputDTO, IGetProductOutputDTO, Product } from "../models/Product"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class ProductBusiness {
    constructor(
        private productDatabase: ProductDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) { }

    public createProduct = async (input: ICreateProductInputDTO) => {
        const { token, name, tag } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Não autenticado")
        }

        if (typeof name !== "string") {
            throw new RequestError("Parâmetro 'name' inválido")
        }

        if (name.length < 1) {
            throw new RequestError("Parâmetro 'name' inválido: mínimo de 1 caracteres")
        }

        if (payload.role === USER_ROLES.NORMAL) {
            throw new UnauthorizedError("Erro: Apenas usuários 'ADMIN' podem criar products.");
        }


        const id = this.idGenerator.generate()
        const product = new Product(
            id,
            name,
            tag
        )

        await this.productDatabase.createProduct(product)

        const response: ICreateProductOutputDTO = {
            message: "Produto criado com sucesso",
            product
        }

        return response
    }

    public getProducts = async (input: IGetProductInputDTO) => {
        
        const productsDB = await this.productDatabase.getProducts()
        
        const products = productsDB.map(productDB => {
            const tags = this.productDatabase.getTags(productDB.id)
            console.log(tags)
            return new Product(
                productDB.id,
                productDB.name
            )
        })

        for (let product of products) {
            const tags: any = await this.productDatabase.getTags(product.getId())

            product.setTag(tags)
        }
        
        const response:IGetProductOutputDTO = {
            products
        }

        return response
    }
}
