import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableNames"
import { Product } from "../models/Product"

export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const price = req.body.price

        if (!name || !price) {
            throw new Error("Body inválido.")
        }

        if (typeof name !== "string") {
            errorCode = 422;
            throw new Error("name must be a string.")
        }

        if (typeof price !== "number" || price <= 0) {
            errorCode = 422
            throw new Error("Price must be a number greater then 0.");

        }

        const product = new Product(
            Date.now().toString(),
            name,
            price
        )

        await connection(TABLE_PRODUCTS).insert({
            id: product.getId(),
            name: product.getName(),
            price: product.getPrice()
        })
        res.status(201).send({ message: "Produto criado", product: product })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}