
import { ProductDatabase } from "../database/ProductDatabase"
import { NotFoundError } from "../errors/NotFoundError"
import { RequestError } from "../errors/RequestError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import { ICreateProductInputDTO, ICreateProductOutputDTO, Product } from "../models/Product"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class ProductBusiness {
    constructor(
        private productDatabase: ProductDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    public createProduct = async (input: ICreateProductInputDTO) => {
        const { token, name , tags } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Não autenticado")
        }

        if (typeof name !== "string") {
            throw new RequestError("Parâmetro 'band' inválido")
        }

        if (name.length < 1) {
            throw new RequestError("Parâmetro 'band' inválido: mínimo de 1 caracteres")
        }

        if(payload.role === USER_ROLES.NORMAL){          
            throw new UnauthorizedError("Erro: Apenas usuários 'ADMIN' podem criar products.");                         
        }

    
        const id = this.idGenerator.generate()
        const product = new Product(
            id,
            name,
            tags
        )

        await this.productDatabase.createProduct(product)

        const response: ICreateProductOutputDTO = {
            message: "Produto criado com sucesso",
            product
        }

        return response
    }

    // public getProducts = async (input: IGetProductsInputDTO) => {

    //     const productsDB = await this.productDatabase.getProducts()

    //     const products = productsDB.map(productDB => {
    //         return new Product(
    //             productDB.id,
    //             productDB.band,
    //             productDB.starts_at
    //         )
    //     })

    //     for (let product of products){
    //         const productId = product.getId()
    //         const tickets = await this.productDatabase.getTickets(productId)
    //         product.setTickets(tickets)
    //     }

    //     const response: IGetProductsOutputDTO = {
    //        products
    //     }

    //     return response
    // }

}