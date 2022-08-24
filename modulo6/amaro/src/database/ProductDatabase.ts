import { IGetProductSearchInputDTO, IGetSearchDBDTO, IProductDB, Product } from "../models/Product"
import { BaseDatabase } from "./BaseDatabase"

export class ProductDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS = "Amaro_Products"
    public static TABLE_TAGS = "Amaro_Tags"
    public static TABLE_PRODUCT_TAGS = "Amaro_Products_Tags"
    
    public toProductDBModel = (product: Product) => {
        const productDB: IProductDB = {
            id:product.getId(),
            name:product.getName()
        }

        return productDB
    }


    public createProduct = async (product: Product) => {
        const ProductDB = this.toProductDBModel(product)

        await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .insert(ProductDB)
    }

    public getProducts = async (): Promise<IProductDB[] | undefined> => {
        const result:IProductDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .select()

        return result
    }

    public getTags = async (id:string): Promise<IProductDB[] | undefined> => {
        
        const result = await BaseDatabase.connection.raw(`
        SELECT Amaro_Tags.name
        FROM Amaro_Products_Tags
        JOIN Amaro_Tags
        ON Amaro_Products_Tags.tag_id = Amaro_Tags.id
        WHERE Amaro_Products_Tags.product_id = "${id}"  `)

        return result[0]
    }

    public getBySearch = async (input: IGetSearchDBDTO) => {
        const name = input.name
        const id = input.id
        const order = input.order
        const sort = input.sort
        const limit = input.limit
        const offset = input.offset
        console.log(name)
        const productsDB: IProductDB[] = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .select()
            .where("id", "LIKE", `${id}`)
            .orWhere("name", "LIKE", `${name}`)
            .orderBy(order, sort)
            .limit(limit)
            .offset(offset)

        return productsDB
    }
    public findProductById = async (id: string): Promise<IProductDB | undefined> => {
        const result: IProductDB[] = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .select()
            .where({ id })

        return result[0]
    }


    public editProduct = async (productDB: any) => {
        await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .insert(productDB)
    }

    public deleteProducts = async (id: string) => {
        await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .delete()
            .where({ id: id })
    }

    
}