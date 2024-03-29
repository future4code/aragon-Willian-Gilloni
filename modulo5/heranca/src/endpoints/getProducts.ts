import { Request, Response } from "express"
// import connection from "../database/connection"
import { ProductDatabase } from "../database/ProductDataBase"
// import { TABLE_PRODUCTS } from "../database/tableNames"

export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const productDatabase = new ProductDatabase()
        const result = await productDatabase.getAllProducts()
        res.status(200).send({ products: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}