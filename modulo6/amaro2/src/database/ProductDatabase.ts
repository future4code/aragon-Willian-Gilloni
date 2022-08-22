import { IProductDB, Product } from "../models/Product"
import { BaseDatabase } from "./BaseDatabase"

export class ProductDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS = "Amaro-Products"
    public static TABLE_TAGS = "Amaro-Tags"
    public static TABLE_PRODUCT_TAGS = "Amaro-Products-Tags"
    
    public toProductDBModel = (product: Product) => {
        const productDB: IProductDB = {
            id:product.getId(),
            name:product.getName(),
            tags:product.getTags()
        }

        return productDB
    }


    public createProduct = async (product: Product) => {
        const ProductDB = this.toProductDBModel(product)

        await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .insert(ProductDB)
    }

    public getProducts = async () => {
        const productsDB: IProductDB[] = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .select()

        return productsDB
    }

    public getTags = async (id:string): Promise<IProductDB[] | undefined> => {
        const result = await BaseDatabase.connection.raw(`
        SELECT Amaro_Tags.tag
        FROM Amaro_Tags_Products
        JOIN Amaro_Tags
        ON Amaro_Tags_Products.tag_id = Amaro_Tags.id
        WHERE Amaro_Tags_Products.product_id = ${id}  `)
        return result[0]
    }
    public findProductById = async (id: string): Promise<IProductDB | undefined> => {
        const result: IProductDB[] = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .select()
            .where({ id })

        return result[0]
    }


    public editProduct = async (productDB: IProductDB) => {
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